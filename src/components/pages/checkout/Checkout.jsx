import {
  visaCardRegex,
  validNameRegex,
  postalCodeRegex,
  CVVRegex,
  ExpirationDateRegex,
} from "../../../utils/helpers/regex";
import useInput from "../../../hooks/useInput";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    background-image: url("https://abrakadabra.fun/uploads/posts/2021-12/1639968521_1-abrakadabra-fun-p-fon-dlya-prezentatsii-psikhologa-1.jpg") no-repeat top center;
  width: 100%;
  height: 100vh;
  background-size: cover;
  }
`;

const Checkout = () => {
  const firstName = useInput(validNameRegex);
  const lastName = useInput(validNameRegex);
  const visaCard = useInput(visaCardRegex);
  const postalCode = useInput(postalCodeRegex);
  const CVV = useInput(CVVRegex);
  const ExpirationDate = useInput(ExpirationDateRegex);

  let formIsValid = false;
  formIsValid =
    firstName.inputValidRegex &&
    lastName.inputValidRegex &&
    visaCard.inputValidRegex &&
    postalCode.inputValidRegex &&
    CVV.inputValidRegex &&
    ExpirationDate.inputValidRegex;
  const error = {
    firstNameError: "",
    lastNameError: "",
    visaCardError: "",
    postalCode: "",
    CVV: "",
    ExpirationDate: "",
  };
  if (firstName.nameInputIsValid) {
    error.firstName = "Enter your Firstname";
  } else if (firstName.validateRejex) {
    error.firstName = "Firstname must not contain numbers";
  }
  if (lastName.nameInputIsValid) {
    error.lastName = "Enter your Lastname";
  } else if (lastName.validateRejex) {
    error.lastName = "LastName must not contain numbers";
  }
  if (visaCard.nameInputIsValid) {
    error.visaCard = "Enter your visaCard ";
  } else if (visaCard.validateRejex) {
    error.visaCard = "visaCard number must not be empty";
  }
  if (postalCode.nameInputIsValid) {
    error.postalCode = "Enter your postalCode ";
  } else if (postalCode.validateRejex) {
    error.postalCode = "postalCode number must not be empty";
  }
  if (CVV.nameInputIsValid) {
    error.CVV = "Enter your CVV ";
  } else if (CVV.validateRejex) {
    error.CVV = "CVV number must not be empty";
  }
  if (ExpirationDate.nameInputIsValid) {
    error.ExpirationDate = "Enter your ExpirationDate ";
  } else if (ExpirationDate.validateRejex) {
    error.ExpirationDate = "ExpirationDate number must not be empty";
  }
  let firstNameInputClasses =
    firstName.nameInputIsValid || firstName.validateRejex
      ? "form-control invalid"
      : "form-control";
  let lastNameInputClasses =
    lastName.nameInputIsValid || lastName.validateRejex
      ? "form-control invalid"
      : "form-control";
  let visaCardInputClasses =
    visaCard.nameInputIsValid || visaCard.validateRejex
      ? "form-control invalid"
      : "form-control";
  let postalCardInputClasses =
    postalCode.nameInputIsValid || postalCode.validateRejex
      ? "form-control invalid"
      : "form-control";
  let CVVInputClasses =
    CVV.nameInputIsValid || CVV.validateRejex
      ? "form-control invalid"
      : "form-control";
  let ExpirationDateInputClasses =
    ExpirationDate.nameInputIsValid || ExpirationDate.validateRejex
      ? "form-control invalid"
      : "form-control";

  const formSubmitHandler = (event) => {
    event.preventDefault();
    firstName.onClear();
    lastName.onClear();
    visaCard.onClear();
    postalCode.onClear();
    CVV.onClear();
    ExpirationDate.onClear();
  };

  return (
    <>
    <GlobalStyle/>
      <Form onSubmit={formSubmitHandler}>
        <div className="control-group">
          <div className={firstNameInputClasses}>
            {console.log(firstName)}
            <label htmlFor="Firstname">First Name</label>
            <input
              value={firstName.values}
              type="text"
              id="Firstname"
              onBlur={firstName.onBlur}
              onChange={firstName.onChange}
            />
            {error.firstName && <p>{error.firstName}</p>}
          </div>

          <div className={lastNameInputClasses}>
            <label htmlFor="Lastname">Last Name</label>
            <input
              value={lastName.values}
              type="text"
              id="Lastname"
              onBlur={lastName.onBlur}
              onChange={lastName.onChange}
            />
            {error.lastName && <p>{error.lastName}</p>}
          </div>
        </div>
        <div className={visaCardInputClasses}>
          <label htmlFor="visaCard">Visa Card</label>
          <input
            value={visaCard.values}
            type="text"
            id="visaCard"
            onBlur={visaCard.onBlur}
            onChange={visaCard.onChange}
          />
          {error.postalCode && <p>{error.postalCode}</p>}
        </div>
        <div className={postalCardInputClasses}>
          <label htmlFor="postalCode">Postal Code</label>
          <input
            value={postalCode.values}
            type="text"
            id="postalCode"
            onBlur={postalCode.onBlur}
            onChange={postalCode.onChange}
          />
          {error.postalCode && <p>{error.postalCode}</p>}
        </div>
        <div className={CVVInputClasses}>
          <label htmlFor="CVV">CVV</label>
          <input
            value={CVV.values}
            type="text"
            id="CVV"
            onBlur={CVV.onBlur}
            onChange={CVV.onChange}
          />
          {error.CVV && <p>{error.CVV}</p>}
        </div>
        <div className={ExpirationDateInputClasses}>
          <label htmlFor="ExpirationDate">Expiration Date</label>
          <input
            value={ExpirationDate.values}
            type="text"
            id="ExpirationDate"
            onBlur={ExpirationDate.onBlur}
            onChange={ExpirationDate.onChange}
          />
          {error.ExpirationDate && <p>{error.ExpirationDate}</p>}
        </div>
        <div className="form-actions">
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </Form>
    </>
  );
};

export default Checkout;

const Form = styled.form`
  top: 150px;
  position: absolute;

  background-color: red;
  height: 250px;
  display: flex;
  align-items: center;
  
`;