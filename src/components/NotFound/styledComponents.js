import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f5f5f5;
  font-family: 'Roboto';
  min-height: 89vh;
`

export const Heading = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  color: #000000;
  margin-top: 30px;

  @media screen and (max-width: 767px) {
    font-size: 17px;
  }
`

export const Description = styled.p`
  color: #000000;
  font-size: 14px;
  margin-top: 0px;

  @media screen and (max-width: 767px) {
    font-size: 12px;
    width: 60%;
  }
`

export const Image = styled.img`
  width: 420px;

  @media screen and (max-width: 767px) {
    width: 90%;
  }
`
