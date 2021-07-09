import { useReducer } from 'react';
import MatrixContext from './matrix-context';

const defaultMatrixState = {
    titles: [],
    relationMatrix: []
};

const matrixReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTitles = [...state.titles, action.title];
        const updatedRelationMatrix = [...state.relationMatrix];
        updatedRelationMatrix.forEach((row) => (row[updatedTitles.length - 1] = 0));
        updatedRelationMatrix.push(Array(updatedTitles.length).fill(0));

        return {
            titles: updatedTitles,
            relationMatrix: updatedRelationMatrix
        };
    }
    if (action.type === 'CHANGE_RELATION') {
        const [i, j] = action.itemId.split('').map(Number);
        const updatedRelationMatrix = JSON.parse(JSON.stringify(state.relationMatrix));
        updatedRelationMatrix[i][j] = 1;
        updatedRelationMatrix[j][i] = 0;

        return {
            titles: [...state.titles],
            relationMatrix: updatedRelationMatrix
        };
    }

    return defaultMatrixState;
};

const MatrixProvider = (props) => {
    const [matrixState, dispatchMatrixAction] = useReducer(matrixReducer, defaultMatrixState);

    const addItemToMatrixHandler = (title) => {
        dispatchMatrixAction({ type: 'ADD', title });
    };

    const changeMatrixRelationHandler = (itemId) => {
        dispatchMatrixAction({ type: 'CHANGE_RELATION', itemId });
    };

    const matrixContext = {
        titles: matrixState.titles,
        relationMatrix: matrixState.relationMatrix,
        addItem: addItemToMatrixHandler,
        changeRelation: changeMatrixRelationHandler
    };

    return <MatrixContext.Provider value={matrixContext}>{props.children}</MatrixContext.Provider>;
};

export default MatrixProvider;
