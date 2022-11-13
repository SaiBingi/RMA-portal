import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9dc1c7;
  min-height: 100vh;
`

export const Container = styled.div`
  text-align: center;
  padding: 45px 40px;
  border-radius: 6px;
  background-color: #1e2326;
  width: 400px;
  font-family: 'Roboto';

  @media screen and (max-width: 767px) {
    padding: 30px 22px;
    width: 90%;
  }
`

export const LoginHeading = styled.h1`
  font-size: 20px;
  color: #ffffff;
`

export const Form = styled.form`
  padding-top: 40px;
  text-align: left;

  @media screen and (max-width: 767px) {
    padding-top: 25px;
  }
`

export const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: #ffffff;
`

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: 1px solid #475569;
  outline: none;
  color: #f8fafc;
  border-radius: 3px;
  padding: 9px 15px;
  font-size: 13px;
  font-weight: 500;
  margin-top: 6px;
  margin-bottom: 20px;
`

export const LoginButton = styled.button`
  border: none;
  background-color: #9dc1c7;
  width: 100%;
  border-radius: 6px;
  padding: 10px;
  font-family: 'Roboto';
  font-size: 14px;
  color: #ffffff;
  font-weight: 600;
  margin-top: 12px;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    margin-top: 9px;
  }
`

export const ErrMsg = styled.p`
  color: #ff0b37;
  text-align: left;
  font-size: 13px;
  margin-top: 4px;
`
