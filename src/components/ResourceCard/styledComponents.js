import styled from 'styled-components'

export const ResourceItem = styled.li`
  background-color: #ffffff;
  border: 1px solid #d7dfe9;
  border-radius: 4px;
  width: 360px;
  margin-right: 30px;
  margin-bottom: 35px;
  padding: 25px;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin: 0;
    margin-bottom: 20px;
    padding: 20px;
  }
`

export const IconTitleCategory = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 26px;

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`

export const ResourceIcon = styled.img`
  width: 44px;
  height: 44px;
  padding: 7px;
  background-color: #ffffff;
  border: 2px solid #d7dfe9;
  border-radius: 4px;
  margin-right: 18px;
`

export const TitleCategory = styled.div``

export const ResourceTitle = styled.h1`
  font-weight: 500;
  font-size: 16px;
  color: #171f46;
  margin-top: 0;

  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`

export const ResourceCategory = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #7e858e;
  margin-bottom: 0;
  margin-top: 0;
`

export const ResourceItemLink = styled.a`
  font-weight: 400;
  font-size: 14px;
  color: #0b69ff;
  text-decoration: none;
`

export const ResourceItemDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #7e858e;
  margin-bottom: 0;

  @media screen and (max-width: 767px) {
    font-size: 13px;
  }
`
