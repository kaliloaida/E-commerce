import styled, { createGlobalStyle } from 'styled-components'
import { useState } from 'react'
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
   const navigate = useNavigate()
   const firstName = useInput(validNameRegex)
   const lastName = useInput(validNameRegex)
   const visaCard = useInput(visaCardRegex)
   const CVC = useInput(CVCRegex)
   const ExpirationDate = useInput(ExpirationDateRegex)
   const [showModal, setShowModal] = useState(false)

   let formIsValid = false
   formIsValid =
      firstName.inputValidRegex &&
      lastName.inputValidRegex &&
      visaCard.inputValidRegex &&
      CVC.inputValidRegex &&
      ExpirationDate.inputValidRegex
   const error = {
      firstNameError: '',
      lastNameError: '',
      visaCardError: '',

      CVC: '',
      ExpirationDate: '',
   }
   if (firstName.nameInputIsValid) {
      error.firstName = 'Enter your Firstname'
   } else if (firstName.validateRejex) {
      error.firstName = 'Firstname must not contain numbers'
   }
   if (lastName.nameInputIsValid) {
      error.lastName = 'Enter your Lastname'
   } else if (lastName.validateRejex) {
      error.lastName = 'LastName must not contain numbers'
   }
   if (visaCard.nameInputIsValid) {
      error.visaCard = 'Enter your visaCard '
   } else if (visaCard.validateRejex) {
      error.visaCard = 'visaCard number must not be empty'
   }

   if (CVC.nameInputIsValid) {
      error.CVC = 'Enter your CVC '
   } else if (CVC.validateRejex) {
      error.CVV = 'CVC number must not be empty'
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

   const CVCInputClasses =
      CVC.nameInputIsValid || CVC.validateRejex
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
      CVC.onClear()
      ExpirationDate.onClear()
      setShowModal(true)
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
         <Container>
            <form onSubmit={formSubmitHandler}>
               <div className="control-group">
                  <div className={firstNameInputClasses}>
                     <span>
                        <label htmlFor="Firstname">First Name</label>
                        <input
                           className="slide-up"
                           value={firstName.values}
                           type="text"
                           id="Firstname"
                           placeholder="First Name"
                           onBlur={firstName.onBlur}
                           onChange={firstName.onChange}
                        />
                        {error.firstName && <p>{error.firstName}</p>}
                     </span>
                  </div>

                  <div className={lastNameInputClasses}>
                     <span>
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
                        {error.lastName && <p>{error.lastName}</p>}
                     </span>
                  </div>
               </div>
               <div className={visaCardInputClasses}>
                  <span>
                     <label htmlFor="visaCard">Visa Card</label>
                     <input
                        maxLength="16"
                        className="slide-up"
                        value={visaCard.values}
                        type="number"
                        id="visaCard"
                        onBlur={visaCard.onBlur}
                        onChange={visaCard.onChange}
                        placeholder="0000 0000 0000 0000"
                     />
                     {error.visaCard && <p>{error.visaCard}</p>}
                  </span>
               </div>

               <div className={CVCInputClasses}>
                  <span>
                     <label htmlFor="CVC">CVC</label>
                     <input
                        placeholder="000"
                        className="slide-up"
                        value={CVC.values}
                        type="number"
                        id="CVC"
                        onBlur={CVC.onBlur}
                        onChange={CVC.onChange}
                     />
                     {error.CVC && <p>{error.CVC}</p>}
                  </span>
               </div>
               <div className={ExpirationDateInputClasses}>
                  <span>
                     <label htmlFor="ExpirationDate">Expiration Date</label>
                     <input
                        placeholder="MM/YY"
                        className="slide-up"
                        value={ExpirationDate.values}
                        id="ExpirationDate"
                        onBlur={ExpirationDate.onBlur}
                        onChange={ExpirationDate.onChange}
                     />
                     {error.ExpirationDate && <p>{error.ExpirationDate}</p>}
                  </span>
               </div>
               <div className="form-actions">
                  <button type="submit" disabled={!formIsValid}>
                     Submit
                  </button>
               </div>
            </form>
         </Container>
      </>
   )
}

export default Checkout

const Container = styled.div`
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

   span {
      position: relative;
      display: inline-block;
      margin: 10px 10px 10px 10px;
   }
`
