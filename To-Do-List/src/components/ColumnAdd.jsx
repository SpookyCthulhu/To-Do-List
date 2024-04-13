import React, { useState } from 'react';
import Card from './Card';
import AddButton from './AddButton';

function ColumnAdd({children}){

	const [cards, setCards] = useState([<Card key={0} />]);
	
	const addCard = () => {
		const newCard = <Card key={cards.length} />;
		setCards([...cards, newCard]);
	};

	return (
		<div class='column'>
			{cards.map((card, index) => card)}
			<AddButton onClick={addCard} />
		</div>
	)
}

export default ColumnAdd;
