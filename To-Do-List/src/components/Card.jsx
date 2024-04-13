import DelButton from './DelButton';

function Card({ title, description }) {
  return (
    <div className='card'>
    	<h2>{title}</h2>
    	<p>{description}</p>
    	<DelButton />
    </div>
  );
};

export default Card;
