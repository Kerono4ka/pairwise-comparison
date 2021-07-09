import { useContext, useRef } from 'react';

import classes from './InputForm.module.css';
import MatrixContext from '../../store/matrix-context';
import useInput from '../../hooks/useInput';

function InputForm() {
    const matrixCtx = useContext(MatrixContext);
    const titleInputRef = useRef();

    const isNonRepeating = (value) => !matrixCtx.titles.includes(value);
    const {
        value: itemValue,
        isValid: itemIsValid,
        hasError: itemHasError,
        valueChangeHandler: itemChangeHandler,
        inputBlurHandler: itemBlurHandler,
        reset: resetItem
    } = useInput(isNonRepeating);

    const submitHandler = (event) => {
        event.preventDefault();
        if (!itemIsValid || !titleInputRef.current.value) {
            return;
        }

        matrixCtx.addItem(titleInputRef.current.value);
        resetItem();
    };

    return (
        <div>
            <form className={classes.form} onSubmit={submitHandler}>
                <div>
                    <input
                        className={classes.input}
                        placeholder="New item"
                        ref={titleInputRef}
                        type="text"
                        value={itemValue}
                        onChange={itemChangeHandler}
                        onBlur={itemBlurHandler}
                    />
                    <button className={classes.button}>Add</button>
                    {itemHasError && <p className={classes.error}>This item is already in use.</p>}
                </div>
            </form>
        </div>
    );
}

export default InputForm;
