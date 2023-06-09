import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const[enteredNameIsValid , setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched , setEnteredNameTouched] = useState(false)
  const [formisValid , setFormIsValid] = useState(false)


  useEffect(() => {
      if (enteredNameIsValid) {
        setFormIsValid(true) ;
      }else{
        setFormIsValid(false)
      }
} , [enteredNameIsValid])


  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched


  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    if (enteredName.trim() !== "") {
      setEnteredNameIsValid(true);
    }
  };

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
    }
  }


  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true)

    if(enteredName.trim() === ''){
      setEnteredNameIsValid(false)
     return ; 
    }

    setEnteredNameIsValid(true)


    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    // nameInputRef.current.value = '' ;
    setEnteredName('')
  };

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control ' ;

 

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
          onBlur={nameInputBlurHandler}
        />
      </div>
      {!nameInputIsInvalid && (
        <p className="error-text">Name must not be empty</p>
      )}
      <div className="form-actions">
        <button disabled={!formisValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
