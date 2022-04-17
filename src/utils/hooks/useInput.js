import { useState } from "react";

const useInput = (props) => {
  const [values, setValues] = useState("");

  const [enteredInputTouched, setEnteredInputTouched] = useState(false);
  

  const enteredInputIsValid = values.trim() !== "";
  const nameInputIsValid = !enteredInputIsValid && enteredInputTouched;

  const inputValidRegex = props.test(values);
  const validateRejex = !props.test(values) && enteredInputTouched;

  const nameInputBlurHandler = (event) => {
    setEnteredInputTouched(true);
  };

  const nameInputChangeHandler = (event) => {
    setValues(event.target.value);
  };

  const inputHandler = () => {
    setValues("");
    setEnteredInputTouched(false);
  };

  return {
    
    enteredInputTouched,
    enteredInputIsValid,
    nameInputIsValid,
    values,
    
    inputValidRegex,
    validateRejex,
    onBlur: nameInputBlurHandler,
    onChange: nameInputChangeHandler,
    onClear: inputHandler,
  };
};
export default useInput;