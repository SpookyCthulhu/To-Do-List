import React from 'react';

function AddButton({ onClick }) {
	return (
		<div class='addbutton' onClick={onClick}>
			Add task
		</div>
	);
}

export default AddButton; 
