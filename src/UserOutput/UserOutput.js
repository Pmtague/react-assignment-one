import React from 'react';

const UserOutput = ( props ) => {
	props.user.map(user => {
		console.log(user)
		return (
			<div>
				<p>{user.username}</p>
			</div>
		)
		})
	
	
};

export default UserOutput;