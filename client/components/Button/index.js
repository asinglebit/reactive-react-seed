/**
* Libraries
*/

import React from 'react';

/**
* Button component definition and export
*/

export const Button = props => 
  	<button onClick={props.click}>
  		props.title
	</button>