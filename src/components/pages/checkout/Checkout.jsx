import { useDispatch } from 'react-redux'
import styled, { createGlobalStyle } from 'styled-components'
import { useState } from 'react'
import InputMask from 'react-input-mask'
import { useNavigate } from 'react-router-dom'
import {
   visaCardRegex,
   validNameRegex,
   CVCRegex,
   ExpirationDateRegex,
} from '../../../utils/helpers/regex'
import useInput from '../../../hooks/useInput'
import smartcard from '../../../assets/checkout/smartcard.jpg'
import Modal from '../../UI/modalka/Modal'
import { clearCart } from '../../../store/cartSlice'

export const GlobalStyle = createGlobalStyle`
  body{
    height: 100vh;
 background-image: url(${smartcard});
 background-size: 1500px;
    background-position-x: center; 
    background-position-y: center;
  }
`

const Checkout = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const firstName = useInput(validNameRegex)
   const lastName = useInput(validNameRegex)
   const visaCard = useInput(visaCardRegex)
   const securityCode = useInput(CVCRegex)
   const ExpirationDate = useInput(ExpirationDateRegex)
   const [showModal, setShowModal] = useState(false)

   let formIsValid = false
   formIsValid =
      firstName.inputValidRegex &&
      lastName.inputValidRegex &&
      visaCard.inputValidRegex &&
      securityCode.inputValidRegex &&
      ExpirationDate.inputValidRegex
   const error = {
      firstNameError: '',
      lastNameError: '',
      visaCardError: '',
      securityCode: '',
      ExpirationDate: '',
   }
   const inputMonth = new Date().getMonth().toString()
   const inputYear = new Date().getFullYear().toString()

   const date = ExpirationDate.values.split('/')

   if (Number(date[0]) < +inputMonth + 1 || date[1] < inputYear) {
      error.ExpirationDate = ExpirationDate.enteredInputTouched && 'error'
   }

   if (firstName.nameInputIsValid) {
      error.firstName = 'Enter your First Name'
   } else if (firstName.validateRejex) {
      error.firstName = 'First Name must not contain numbers'
   }
   if (lastName.nameInputIsValid) {
      error.lastName = 'Enter your Last Name'
   } else if (lastName.validateRejex) {
      error.lastName = 'Last Name must not contain numbers'
   }
   if (visaCard.nameInputIsValid) {
      error.visaCard = 'Enter your visaCard '
   } else if (visaCard.validateRejex) {
      error.visaCard = 'visaCard number must not be empty'
   }

   if (securityCode.nameInputIsValid) {
      error.securityCode = 'Enter your CVC '
   } else if (securityCode.validateRejex) {
      error.securityCode = 'CVC number must not be empty'
   }
   if (ExpirationDate.nameInputIsValid) {
      error.ExpirationDate = 'Enter your ExpirationDate '
   } else if (ExpirationDate.validateRejex) {
      error.ExpirationDate = 'ExpirationDate number must not be empty'
   }
   const firstNameInputClasses =
      firstName.nameInputIsValid || firstName.validateRejex
         ? 'form-control invalid'
         : 'form-control'
   const lastNameInputClasses =
      lastName.nameInputIsValid || lastName.validateRejex
         ? 'form-control invalid'
         : 'form-control'
   const visaCardInputClasses =
      visaCard.nameInputIsValid || visaCard.validateRejex
         ? 'form-control invalid'
         : 'form-control'

   const securityCodeInputClasses =
      securityCode.nameInputIsValid || securityCode.validateRejex
         ? 'form-control invalid'
         : 'form-control'
   const ExpirationDateInputClasses =
      ExpirationDate.nameInputIsValid || ExpirationDate.validateRejex
         ? 'form-control invalid'
         : 'form-control'

   const formSubmitHandler = (event) => {
      event.preventDefault()
      firstName.onClear()
      lastName.onClear()
      visaCard.onClear()
      securityCode.onClear()
      ExpirationDate.onClear()
      setShowModal(true)
      dispatch(clearCart())
   }
   const toggleSowHandler = () => {
      return navigate('/Home')
   }

   return (
      <>
         {showModal && (
            <Modal onConfirm={toggleSowHandler} yes={toggleSowHandler} />
         )}
         <GlobalStyle />
         <DivBox>
            <Container>
               <form onSubmit={formSubmitHandler}>
                  <div className="control-group">
                     <Inputs className={firstNameInputClasses}>
                        <label htmlFor="Firstname">First Name</label>
                        <input
                           className="slide-up"
                           value={firstName.values}
                           type="text"
                           id="Firstname"
                           placeholder="First Name"
                           onBlur={firstName.onBlur}
                           onChange={firstName.onChange}
                           required
                        />
                        {error.lastName && <Error>{error.firstName}</Error>}
                     </Inputs>

                     <Inputs className={lastNameInputClasses}>
                        <label htmlFor="Lastname">Last Name</label>
                        <input
                           placeholder="Last Name"
                           className="slide-up"
                           value={lastName.values}
                           type="text"
                           id="Lastname"
                           onBlur={lastName.onBlur}
                           onChange={lastName.onChange}
                        />

                        {error.lastName && <Error>{error.lastName}</Error>}
                     </Inputs>
                  </div>
                  <Inputs className={visaCardInputClasses}>
                     <label htmlFor="visaCard">Visa Card</label>
                     <InputMask
                        mask={
                           (/[1-9]/,
                           /\d/,
                           /\d/,
                           /\d/,
                           ' ',
                           /\d/,
                           /\d/,
                           /\d/,
                           /\d/,
                           ' ',
                           /\d/,
                           /\d/,
                           /\d/,
                           /\d/,
                           ' ',
                           /\d/,
                           /\d/,
                           /\d/,
                           /\d/)
                        }
                        className="slide-up"
                        value={visaCard.values}
                        maxLength="16"
                        id="visaCard"
                        type="number"
                        onBlur={visaCard.onBlur}
                        onChange={visaCard.onChange}
                        placeholder="0000 0000 0000 0000"
                     />
                     {error && error.visaCard && error.visaCard.length > 1 && (
                        <Error>{error.visaCard}</Error>
                     )}
                  </Inputs>

                  <Inputs className={securityCodeInputClasses}>
                     <label htmlFor="CVC">CVC</label>

                     <InputMask
                        mask={(/[0-9]/, /\d/, /\d/, /\d/)}
                        placeholder="000"
                        className="slide-up"
                        value={securityCode.values}
                        id="CVC"
                        maxLength="3"
                        onBlur={securityCode.onBlur}
                        onChange={securityCode.onChange}
                        type="number"
                     />

                     {error &&
                        error.securityCode &&
                        error.securityCode.length > 1 && (
                           <Error>{error.securityCode}</Error>
                        )}
                  </Inputs>
                  <Inputs className={ExpirationDateInputClasses}>
                     <label htmlFor="ExpirationDate">Expiration Date</label>
                     <InputMask
                        mask={(/[0-9]/, /\d/, '/', /\d/, /\d/)}
                        maxLength="7"
                        placeholder="MM/YY"
                        className="slide-up"
                        value={ExpirationDate.values}
                        id="ExpirationDate"
                        onBlur={ExpirationDate.onBlur}
                        onChange={ExpirationDate.onChange}
                     />
                     {error &&
                        error.ExpirationDate &&
                        error.ExpirationDate.length > 1 && (
                           <Error>{error.ExpirationDate}</Error>
                        )}
                  </Inputs>
                  <div className="form-actions">
                     <button type="submit" disabled={!formIsValid}>
                        Submit
                     </button>
                  </div>
               </form>
            </Container>
         </DivBox>
      </>
   )
}

export default Checkout

const DivBox = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 400px;
   background: #fff;
   padding: 40px;
   border: 1px solid rgba(0, 0, 0, 0.1);
   box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
`

const Container = styled.div`
   .slide-up::-webkit-outer-spin-button,
   .slide-up::-webkit-inner-spin-button {
      -webkit-appearance: none;
   }
   .invalid input {
      border: 1px solid #b40e0e;
      background-color: #fddddd;
   }

   .invalid input:focus {
      border-color: #ff8800;
      background-color: #fbe8d2;
   }

   .error-text {
      color: #b40e0e;
   }
   position: absolute;
   top: 50%;
   left: 47%;
   transform: translate(-50%, -50%);
   max-width: 380px;
   width: 100%;
   background: #b2e3af;
   padding: 30px;
   border-radius: 25px;

   label {
      font-family: 'Anek Odia', sans-serif;
      font-family: 'Dancing Script', cursive;
      font-family: 'Lora', serif;
      font-family: 'Rubik', sans-serif;
      font-family: 'Tapestry', cursive;
   }
`
const Error = styled.span`
   font-size: 13px;
   font-weight: bold;
   color: red;
`
const Inputs = styled.div`
   height: 65px;
   width: 90%;
   input {
      width: ${({ inputSize }) => (inputSize === 'small' ? '85%' : '100%')};
      height: 30px;
   }
`
