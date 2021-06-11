import { useContext, useState, useEffect } from 'react';

import classes from './ScoreItem.module.css';
import WinnerIcon from './WinnerIcon';
import MatrixContext from '../../store/matrix-context';

function ScoreItem() {
	const matrixCtx = useContext(MatrixContext);
	const [maxScore, setMaxScore] = useState(-1);
	const [itemsScore, setItemsScore] = useState([]);

	useEffect(() => {
		setItemsScore(
			matrixCtx.relationMatrix.map((itemScore, idx) =>
				itemScore.reduce((a, b) => a + b, 0)
			)
		);
		setMaxScore(Math.max(...itemsScore));
	}, [matrixCtx.relationMatrix, itemsScore]);

	return (
		<tbody className={classes.body}>
			{matrixCtx.titles.map((item, idx) => (
				<tr className={classes.row}>
					<td className={classes.text}>
						<span>{item}</span>
					</td>
					<td className={classes.text}>
						<span>{itemsScore[idx]}</span>
					</td>
					<td className={classes.winner}>
						{itemsScore[idx] === maxScore && (
							<>
								<WinnerIcon />
								<span> The Winner</span>
							</>
						)}
					</td>
				</tr>
			))}
		</tbody>
	);
}

export default ScoreItem;
