import useInput from "hooks/use-input";

const BasicForm = (props) => {

    const {
        value: enteredFName,
        isValid: enteredFNameIsValid,
        hasError: fnameInputHasError,
        valueChangeHandler: fnameChangeHandler,
        inputBlurHandler: fnameBlurHandler,
        reset: resetfnameInput
    } = useInput(value => value.trim() !== "")

    const {
        value: enteredLName,
        isValid: enteredLNameIsValid,
        hasError: lnameInputHasError,
        valueChangeHandler: lnameChangeHandler,
        inputBlurHandler: lnameBlurHandler,
        reset: resetlnameInput
    } = useInput(value => value.trim() !== "")

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(value => value.includes('@'))

    const fnameInputClass = fnameInputHasError
        ? 'form-control invalid'
        : 'form-control';

    const lnameInputClass = lnameInputHasError
        ? 'form-control invalid'
        : 'form-control';

    const emailInputClass = emailInputHasError
        ? 'form-control invalid'
        : 'form-control';

    const formSubmitHandler = (event) => {
        event.preventDefault()
        if (!enteredFNameIsValid || !enteredLNameIsValid || !enteredEmailIsValid) {
            return
        }
        resetfnameInput()
        resetlnameInput()
        resetEmailInput()
    }

    let formValidate = false
    if (enteredFNameIsValid && enteredLNameIsValid && enteredEmailIsValid) {
        formValidate = true
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className='control-group'>
                <div className={fnameInputClass}>
                    <label htmlFor='name'>First Name</label>
                    <input type='text' id='name'
                        value={enteredFName}
                        onChange={fnameChangeHandler}
                        onBlur={fnameBlurHandler}
                    />
                    {fnameInputHasError && (<p className='error-text'>First Name must not be empty.</p>)}
                </div>
                <div className={lnameInputClass}>
                    <label htmlFor='name'>Last Name</label>
                    <input type='text' id='name'
                        value={enteredLName}
                        onChange={lnameChangeHandler}
                        onBlur={lnameBlurHandler}
                    />
                    {lnameInputHasError && (<p className='error-text'>Last Name must not be empty.</p>)}
                </div>
            </div>
            <div className={emailInputClass}>
                <label htmlFor='name'>E-Mail Address</label>
                <input type='text' id='name'
                    value={enteredEmail}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                />
                {emailInputHasError && (<p className='error-text'>Email must not be empty.</p>)}
            </div>
            <div className='form-actions'>
                <button disabled={!formValidate}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;