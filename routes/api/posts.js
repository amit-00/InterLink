const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Post = require('../../models/Post');
const User = require('../../models/User');
const Profile = require('../../models/Profile');
const auth = require('../../middleware/auth');


//@route   POST api/posts
//@desc    Create post
//@access  Private
router.post('/', [ auth, [ check('text', 'Text is required to post').not().isEmpty() ] ], async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    try{
        const user = await User.findById(req.user.id).select('-password');

        const newPost = new Post({
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id
        });

        const post = await newPost.save();

        res.json(post);

    }
    catch(err){
        console.error(err.nessage);
        res.status(500).send('Server Error');
    }

});

//@route   GET api/posts
//@desc    Retrieve posts
//@access  Private
router.get('/', auth, async (req, res) => {
    try{
        const posts = await Post.find().sort({ date: -1 });

        res.json(posts);

    }
    catch(err){
        console.error(err.nessage);
        res.status(500).send('Server Error');
    }

});

//@route   GET api/posts/:id
//@desc    Retreive singular post
//@access  Private
router.get('/:id', auth, async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);

        if(!post){
            return res.status(404).json({ msg: 'Post does not exist' });
        }

        res.json(post);

    }
    catch(err){
        console.error(err.nessage);
        if(err.kind === 'ObjectId'){
            return res.status(404).json({ msg: 'Post does not exist' });
        }
        res.status(500).send('Server Error');
    }

});

//@route   DELETE api/posts/:id
//@desc    Delete singular post
//@access  Private
router.delete('/:id', auth, async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);

        if(!post){
            return res.status(404).json({ msg: 'Post does not exist' });
        }

        if(post.user.toString() !== req.user.id){
            return res.status(401).json({ msg: 'User not authorized' });
        }

        await post.remove();

        res.json({ msg: 'Post removed' });

    }
    catch(err){
        console.error(err.nessage);
        if(err.kind === 'ObjectId'){
            return res.status(404).json({ msg: 'Post does not exist' });
        }
        res.status(500).send('Server Error');
    }

});

//@route   PUT api/posts/like/:id
//@desc    Adds like to array of likes
//@access  Private

router.put('/like/:id', auth, async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);

        if(post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
            return res.status(400).json({ msg: 'Post already liked by user' });
        }

        post.likes.unshift({ user: req.user.id });

        await post.save();

        res.json(post.likes);
    }
    catch(err){

    }
});

//@route   PUT api/posts/unlike/:id
//@desc    Removes like to array of likes
//@access  Private

router.put('/unlike/:id', auth, async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);

        if(post.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
            return res.status(400).json({ msg: 'Post not liked by user' });
        }

        const removeIndex = post.likes.map(like => like.user.toString()).indexOf(req.user.id);

        post.likes.splice(removeIndex, 1);

        await post.save();

        res.json(post.likes);
    }
    catch(err){

    }
});

//@route   PUT api/posts/comment/:id
//@desc    Adds comment to array of comments
//@access  Private

router.put('/comment/:id', [ auth, [ check('text', 'Text is required in a comment').not().isEmpty() ] ], async (req, res) => {
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    try{
        const user = await User.findById(req.user.id).select('-password');

        const post = await Post.findById(req.params.id);

        const newComment = {
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id
        }

        post.comments.unshift(newComment);

        post.save();

        res.json(post.comments);

    }
    catch(err){
        console.error(err.nessage);
        res.status(500).send('Server Error');
    }
});

//@route   DELETE api/posts/comment/:id/:comment_id
//@desc    Removes comment from array of comments
//@access  Private

router.DELETE('/comment/:id/:comment_id', auth, async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);

        const comment = post.comments.find(comment => comment.id === req.params.comment_id);

        if(!comment) {
            return res.status(404).json({ msg: 'Comment not found' });
        }

        if(comment.user.toString() !== req.user.id){
            return res.status(401).json({ msg: 'User is not authorized' });
        }

        const removeIndex = post.comments.map(comment => comment.user.toString()).indexOf(req.user.id);

        post.comments.splice(removeIndex, 1);

        await post.save();

        res.json(post.comments);
    }
    catch(err){

    }
});

module.exports = router;