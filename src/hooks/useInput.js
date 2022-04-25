import { useState } from 'react'

const useInput = (props) => {
   const [values, setValues] = useState('')

   const [enteredInputTouched, setEnteredInputTouched] = useState(false)

   const enteredInputIsValid = values.trim() !== ''
   const nameInputIsValid = !enteredInputIsValid && enteredInputTouched

   const inputValidRegex = props.test(values)
   const validateRejex = !props.test(values) && enteredInputTouched

   const nameInputBlurHandler = () => {
      setEnteredInputTouched(true)
   }

   const nameInputChangeHandler = (event) => {
      setValues(event.target.value)
   }

   const CVCInputChangeHandler = (event) => {
      if (event.target.value.length > event.target.maxLength) {
         // eslint-disable-next-line no-param-reassign
         event.target.value = event.target.value.slice(
            0,
            event.target.maxLength
         )
      }
      setValues(event.target.value)
   }
   const visaCardInputChangeHandler = (event) => {
      if (event.target.value.length > event.target.maxLength) {
         // eslint-disable-next-line no-param-reassign
         event.target.value = event.target.value.slice(
            0,
            event.target.maxLength
         )
      }
      setValues(event.target.value)
   }
   const expiryInputChangeHandler = (event) => {
      if (event.target.value.length > event.target.maxLength) {
         // eslint-disable-next-line no-param-reassign
         event.target.value = event.target.value.slice(
            0,
            event.target.maxLength
         )
      }
      setValues(event.target.value)
   }
   const inputHandler = () => {
      setValues('')
      setEnteredInputTouched(false)
   }

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
      onCVCChangeHandler: CVCInputChangeHandler,
      onVisaCardChangeHandler: visaCardInputChangeHandler,
      onExpiryInputChangeHandler: expiryInputChangeHandler,
   }
}
export default useInput
