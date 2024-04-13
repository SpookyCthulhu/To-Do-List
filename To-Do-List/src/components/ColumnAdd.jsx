import { useState } from 'react';
import Card from './Card';
import AddButton from './AddButton';

function ColumnAdd(){

	const [cards, setCards] = useState([<Card key={0} />]);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	
	const addCard = () => {
		const newCard = <Card key={cards.length} title={title} description={description} />
		setCards([...cards, newCard]);
		setTitle('');
		setDescription('');
	};

	return (
		<div className='column'>
			<div className='input-fields'>
				<input
					type='text'
					placeholder='task title'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<textarea
					placeholder='Text Description'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				></textarea>
			</div>
			{cards.map((card, index) => card)}
			<AddButton onClick={addCard} />
		</div>
	)
}

export default ColumnAdd;
