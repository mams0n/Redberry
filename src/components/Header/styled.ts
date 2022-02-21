import styled from 'styled-components'

export const HeaderContainer = styled.div`
  border-bottom: 1px solid #f6f6f7;
`

export const Header = styled.div`
  width: 1124px;
  max-width: 100%;
  margin: auto;
  height: 80px;
  padding: 25px 0px;
  display: flex;
  gap: 90px;
  svg {
    cursor: pointer;
    margin-top: 3px;
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
