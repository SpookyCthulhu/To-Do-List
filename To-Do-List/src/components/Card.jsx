import DelButton from './DelButton';

function Card({ title, description, onDelete }) {
  return (
    <div className='card'>
    	<h2>{title}</h2>
    	<p>{description}</p>
    	<DelButton onDelete={onDelete} />
    </div>
  );
};

export default Card;
