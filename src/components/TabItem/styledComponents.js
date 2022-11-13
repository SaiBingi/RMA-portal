import styled from 'styled-components'

export const Tab = styled.li``

export const TabButton = styled.button`
  cursor: pointer;
  width: 175px;
  height: 38px;
  font-family: 'Roboto';

  border-top-left-radius: ${props =>
    props.tabId === 'resources' ? '4px' : null};

  border-bottom-left-radius: ${props =>
    props.tabId === 'resources' ? '4px' : null};

  border-top-right-radius: ${props => (props.tabId === 'users' ? '4px' : null)};

  border-bottom-right-radius: ${props =>
    props.tabId === 'users' ? '4px' : null};

  color: ${props => (props.isActive ? '#ffffff' : '#171f46')};

  background-color: ${props =>
    props.isActive ? '#0b69ff' : 'rgba(215, 223, 233, 0.24)'};

  font-size: 14px;

  font-weight: 500;

  border: ${props =>
    props.isActive ? '1px solid #0b69ff' : '1px solid #d7dfe9'};

  @media screen and (max-width: 767px) {
    width: 100%;
    font-size: 13px;
  }
`
