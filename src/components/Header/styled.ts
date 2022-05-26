import styled from 'styled-components'

export const HeaderContainer = styled.div`
  border-bottom: 1px solid #f6f6f7;
  background: #13171e;
`

export const Header = styled.div`
  width: 1124px;
  max-width: 100%;
  margin: auto;
  height: 80px;
  display: flex;
  justify-content: space-between;
  gap: 90px;
  img {
    padding: 18px 0px;
    cursor: pointer;
  }
  h2 {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #010414;
    margin: 0;
    align-self: center;
  }
`

export const Moto = styled.div`
  align-self: center;
  color: #fff;
  font-size: 20px;
`

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  svg {
    padding: 0;
    width: 25px;
    height: 25px;
    margin-top: 3px;
    color: #fff;
    path {
      fill: #fff;
    }
  }
`

export const FacebookBox = styled.div`
  width: 35px;
  height: 35px;
  display: inline-block;
  border: 1px solid #272f3c;
  text-align: center;
  line-height: 35px;
  color: #fff;
  border-radius: 4px;
  margin-right: 3px;
  transition: background-color 0.15s;
  cursor: pointer;
  :hover {
    background: #2b323f;
  }
`

export const InstagramBox = styled.div`
  width: 35px;
  height: 35px;
  display: inline-block;
  border: 1px solid #272f3c;
  text-align: center;
  line-height: 35px;
  color: #fff;
  border-radius: 4px;
  margin-right: 3px;
  transition: background-color 0.15s;
  cursor: pointer;
  :hover {
    background: #2b323f;
  }
`
