import { useContext } from 'react';

import classes from './ComparisonItem.module.css';
import MatrixContext from '../../store/matrix-context';

function ComparisonItem(props) {
	const matrixCtx = useContext(MatrixContext);

	const [i, j] = props.id.split('').map(Number);

	const onClickHandler = (event) => {
		console.log(event.target.id);
		matrixCtx.changeRelation(event.target.id);
	};

	return (
		<button
			id={props.id}
			type='button'
			className={
				matrixCtx.relationMatrix[i][j] ? classes.checked : classes.button
			}
			onClick={onClickHandler}
		>
			{props.title}
		</button>
	);
}

export default ComparisonItem;
