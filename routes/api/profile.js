const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

//@route   GET api/profile/me
//@desc    get current user profile
//@access  Private
router.get('/me', async (req, res) => {
    try{
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', [ 'name', 'avatar' ]);

        if(!profile){
            return res.status(400).json({ msg: 'This user does not have a profile' })
        }

        res.json(profile);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

//@route   POST api/profile
//@desc    Create/update user profile
//@access  Private

router.post('/', [ auth ],async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { bio, youtube, twitter, facebook, instagram } = req.body;

    const profileFields = {};

    profileFields.user = req.user.id;
    if(bio) profileFields.bio = bio;

    profileFields.social = {}

    if(youtube) profileFields.social.youtube = youtube;
    if(twitter) profileFields.social.twitter = twitter;
    if(facebook) profileFields.social.facebook = facebook;
    if(instagram) profileFields.social.instagram = instagram;

    

    try{
        let profile = await Profile.findOne({ user: req.user.id });

        //update profile if exists
        if(profile){
            profile = await Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileFields }, { new: true });

            return res.json(profile);
        }

        //create profile
        profile = new Profile(profileFields);

        await profile.save();

        res.json(profile);

    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server error')
    }
});

//@route   GET api/profile
//@desc    get all profiles
//@access  Public

router.get('/', async (req, res) => {
    try{
        const profiles = await Profile.find().populate('user', [ 'name', 'avatar' ]);
        res.json(profiles);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

//@route   GET api/profile/user/:user_id
//@desc    get all profiles
//@access  Public

router.get('/user/:user_id', async (req, res) => {
    try{
        const profiles = await Profile.findOne({ user: req.params.user_id }).populate('user', [ 'name', 'avatar' ]);

        if(!profile){
            return res.status(400).json({ msg: 'Profile not found' });
        }

        res.json(profiles);
    }
    catch(err){
        console.error(err.message);
        if(err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Profile not found' });
        }

        res.status(500).send('Server error');
    }
});

//@route   DELETE api/profile
//@desc    Delete profile, user & posts
//@access  Private

router.delete('/', auth, async (req, res) => {
    try{
        //remove profile
        await Profile.findOneAndRemove({ user: req.user.id });

        await User.findOneAndRemove({ _id: req.user.id });

        res.json({ msg: 'User deleted' });
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;