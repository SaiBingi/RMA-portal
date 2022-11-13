import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px 15px 40px;
  border-bottom: 2px #d7dfe9 solid;

  @media screen and (max-width: 767px) {
    padding: 7px 25px 7px 25px;
  }
`

export const IconButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 40px;
  border: none;
  background-color: transparent;

  @media screen and (max-width: 767px) {
    width: 50px;
    height: 30px;
  }
`

export const PageIcon = styled.img`
  width: 70px;

  @media screen and (max-width: 767px) {
    width: 50px;
  }
`

export const ProfileButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: ${props => (props.showLogout ? 'skyblue' : 'transparent')};
  border: none;

  @media screen and (max-width: 767px) {
    width: 30px;
    height: 30px;
  }
`

export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: fixed;

  @media screen and (max-width: 767px) {
    width: 30px;
    height: 30px;
  }
`

export const LogoutButton = styled.button`
  border: none;
  background-color: #6366f1;
  border-radius: 4px;
  padding: 8px 22px;
  font-family: 'Roboto';
  font-size: 14px;
  color: #ffffff;
  font-weight: 500;
  cursor: pointer;
  margin-right: 180px;

  @media screen and (max-width: 767px) {
    padding: 5px 15px;
    font-size: 11px;
    margin-right: 120px;
  }
`
