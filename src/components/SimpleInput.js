import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const[enteredNameIsValid , setEnteredNameIsValid] = useState(true);
  const [enteredNameTouched , setEnteredNameTouched] = useState(false)


  useEffect(() => {
    if(enteredNameIsValid){
      console.log('Name Input is valid!');
    }
  } , [enteredNameIsValid])


  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched


  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

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
        />
      </div>
      {!nameInputIsInvalid && (
        <p className="error-text">Name must not be empty</p>
      )}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
