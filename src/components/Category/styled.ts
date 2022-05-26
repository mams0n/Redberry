import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  justify-content: space-between;
  grid-gap: 20px;
  padding: 40px 0;
`

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  width: 200px;
  height: 250px;
  cursor: pointer;
  :nth-child(6) {
    svg {
      height: 200px;
    }
  }
  svg {
    width: 100px;
    height: 200px;
  }
`

export const CategoryPhoto = styled.div`
  width: 100%;
  height: 200px;
  background: #c4c4c4;
  display: flex;
  justify-content: center;
  border-radius: 5px;
`

export const CategoryName = styled.div`
  font-weight: bold;
  font-style: italic;
`

export const CategoryCount = styled.div`
  /* font-weight: bold; */
`
