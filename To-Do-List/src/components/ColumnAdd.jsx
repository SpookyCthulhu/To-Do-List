import { useState } from 'react';
import Card from './Card';
import AddButton from './AddButton';

function ColumnAdd(){

	const [cards, setCards] = useState([]);
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
			<div className='card'>
				<div className='fieldinputs'>
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
				<AddButton onClick={addCard} />
			</div>
			{cards.map((card, index) => card)}

		</div>
	)
}

export default ColumnAdd;
