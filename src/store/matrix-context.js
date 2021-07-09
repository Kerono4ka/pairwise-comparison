import React from 'react';

const MatrixContext = React.createContext({
    titles: [],
    relationMatrix: [],
    addItem: (title) => {},
    changeRelation: (itemId) => {}
});

export default MatrixContext;
