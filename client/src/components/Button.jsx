import React from 'react';
import './comp-css/button.css';

const STYLES = [ 'btn--primary', 'btn--outline' ];
const SIZES = [ 'btn--medium', 'btn--large' ];

const Button = ({ children, type, onClick, style, size, cName }) => {
    const btnStyle = STYLES.includes(style) ? style : STYLES[0];
    const btnSize = SIZES.includes(size) ? size : SIZES[0];

    return (
        <button className={`button ${btnSize} ${btnStyle} ${cName}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
};


export default Button;
