/**
 * Libraries
 */

import React from 'react';

/**
 * Styles
 */

import './style.scss';

/**
 * Button component definition and export
 */

export const Button = props =>
    <button onClick={props.handleClick}>{props.title}</button>;

/**
 * Prop types
 */

Button.propTypes = {
    handleClick: React.PropTypes.func,
    title: React.PropTypes.string
};
