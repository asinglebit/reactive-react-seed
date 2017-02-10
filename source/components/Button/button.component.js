/* @flow */

/**
 * Libraries
 */

import React from 'react';

/**
 * Styles
 */

import './button.style.scss';

/**
 * Button component definition and export
 */

export const Button = (props: ButtonPropsType) => (
    <button onClick={props.handleClick}>{props.title}</button>
);

/**
 * Prop types
 */

export type ButtonPropsType = {
    handleClick ? : () => void,
    title: string
};
