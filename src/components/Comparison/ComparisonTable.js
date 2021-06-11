import { useEffect, useState, useContext } from 'react';

import classes from './ComparisonTable.module.css';
import ComparisonItem from './ComparisonItem';
import MatrixContext from '../../store/matrix-context';

function ComparisonTable() {
	const matrixCtx = useContext(MatrixContext);
	const [pairs, setPairs] = useState([]);

	const titles = matrixCtx.titles;

	useEffect(() => {
		let comparisonPairs = [];
		if (!titles || titles.length < 2) {
			return;
		}

		for (let i = 0; i < titles.length; i++) {
			for (let j = i + 1; j < titles.length; j++) {
				comparisonPairs.push([
					{ id: `${i}${j}`, title: titles[i] },
					{ id: `${j}${i}`, title: titles[j] },
				]);
			}
		}
		setPairs(comparisonPairs);
	}, [titles]);

	return (
		<div>
			<h2 className={classes.title}>Compare items</h2>
			<div>
				{pairs.map((pair) => (
					<div className={classes.pair}>
						<ComparisonItem id={pair[0].id} title={pair[0].title} />
						<ComparisonItem id={pair[1].id} title={pair[1].title} />
					</div>
				))}
			</div>
		</div>
	);
}

export default ComparisonTable;
