import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  min-height: 93vh;
  font-family: 'Roboto';
`

export const HomeContainer = styled.div`
  width: 85%;
  max-height: 87vh;
  overflow: auto;
`

export const TabsList = styled.ul`
  padding: 0;
  margin-top: 40px;
  margin-bottom: 30px;
  text-align: center;
  list-style-type: none;

  @media screen and (max-width: 767px) {
    margin-top: 30px;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #d7dfe9;
  border-radius: 3px;
  padding: 10px 14px 10px 14px;
  max-width: 55%;
  margin-bottom: 28px;

  @media screen and (max-width: 767px) {
    min-width: 100%;
    margin-bottom: 10px;
  }
`

export const Search = styled.input`
  outline: none;
  border: none;
  color: grey;
  padding-left: 15px;
  font-size: 14px;
  width: 100%;

  @media screen and (max-width: 767px) {
    font-size: 13px;
    padding-left: 8px;
  }
`

export const LoadingView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  padding-bottom: 64px;

  @media screen and (min-width: 768px) {
    margin-left: 30px;
    padding-bottom: 0;
  }
`

export const FailureImage = styled.img`
  width: 250px;
  height: 200px;

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 350px;
  }
`

export const FailureHeading = styled.h1`
  color: #171f46;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const FailureDescription = styled.p`
  text-align: center;
  color: #64748b;
  font-family: 'Roboto';
  font-size: 14px;
  width: 90%;
  max-width: 288px;
  line-height: 1.3;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 60%;
    max-width: 466px;
  }
`

export const ResourcesList = styled.ul`
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;

  @media screen and (max-width: 767px) {
    max-height: 60vh;
  }
`

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
`
