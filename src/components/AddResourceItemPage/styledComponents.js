import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #f5f5f5;
  display: flex;
  min-height: 91vh;
  font-family: 'Roboto';

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

export const AddItemContainer = styled.div`
  width: 50%;

  @media screen and (max-width: 767px) {
    order: 1;
    width: 100%;
  }
`

export const Image = styled.img`
  width: 50%;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const LessThanIcon = styled.div`
  transform: rotate(270deg);
  font-size: 26px;
  text-decoration: none;
`

export const UsersText = styled.p`
  font-weight: 400;
  font-size: 13px;
  color: #7e858e;
  text-decoration: none;
`

export const IconAndText = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 20px 45px;
  width: 61px;
  height: 20px;
  text-decoration: none;

  @media screen and (max-width: 767px) {
    margin: 15px 25px;
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
`

export const Form = styled.form`
  width: 70%;
  text-align: center;

  @media screen and (max-width: 767px) {
    width: 80%;
  }
`

export const Heading = styled.h1`
  color: #171f46;
  font-weight: 400;
  font-size: 32px;
  text-align: center;

  @media screen and (max-width: 767px) {
    font-size: 22px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-bottom: 22px;
  text-align: left;

  @media screen and (max-width: 767px) {
    margin-bottom: 15px;
  }
`

export const Label = styled.label`
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 8px;
  text-transform: uppercase;
  color: #7e858e;
`

export const Input = styled.input`
  background-color: #ffffff;
  border: 1px solid #d7dfe9;
  border-radius: 2px;
  padding: 10px;
  outline: none;
  color: ${props => (props.linkActive ? '#0B69FF' : null)};
`

export const LargeInput = styled.textarea`
  background-color: #ffffff;
  border: 1px solid #d7dfe9;
  border-radius: 2px;
  padding: 10px;
  font-family: 'Roboto';
  outline: none;
`

export const Create = styled.button`
  border: none;
  cursor: pointer;
  width: 93px;
  height: 40px;
  font-family: 'Roboto';
  color: #ffffff;
  background-color: #0b69ff;
  border-radius: 4px;

  @media screen and (max-width: 767px) {
    margin-bottom: 30px;
    width: 75px;
    height: 35px;
    font-size: 12px;
  }
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 13px;
  margin-top: 4px;
  text-align: left;
`

export const SuccessMsg = styled.p`
  color: green;
  font-weight: 500;
  font-size: 17px;
`
