import classes from './ScoreHeader.module.css';

function ScoreHeader() {
    return (
        <thead>
            <tr className={classes.row}>
                <th className={classes.head}>Item</th>
                <th className={classes.head}>Score</th>
                <th></th>
            </tr>
        </thead>
    );
}

export default ScoreHeader;
