import classes from './ScoreTable.module.css';
import ScoreHeader from './ScoreHeader';
import ScoreItem from './ScoreItem';

function ScoreTable() {
    return (
        <div className={classes.overflow}>
            <div className={classes.background}>
                <div className={classes.width}>
                    <div className={classes.bgtable}>
                        <table className={classes.table}>
                            <ScoreHeader />
                            <ScoreItem />
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScoreTable;
