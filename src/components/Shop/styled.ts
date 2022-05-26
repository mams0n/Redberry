import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const ShopContainer = styled.div`
  display: flex;
  width: 32%;
  gap: 10px;
  background: white;
  border-radius: 20px;
  /* :nth-child(6n + 4),
  :nth-child(6n + 5),
  :nth-child(6n + 6) {
    flex-direction: row-reverse;
  } */
`

export const ShopWallpaper = styled.div`
  height: 200px;
  padding: 15px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    padding: 2px;
    background: linear-gradient(#fff, #fff) padding-box,
      linear-gradient(45deg, #ffeb3b 18%, #ff0065, #f900ff) border-box;
    border: 3.5px solid transparent;
  }
`

export const ShopDetails = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  gap: 15px;
  flex-direction: column;
  padding-top: 15px;
`

export const ShopName = styled.div`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  gap: 10px;
  svg {
    cursor: pointer;
  }
`

export const ShopStat = styled.div`
  display: flex;
  gap: 15px;
`

export const Posts = styled.div``

export const Followers = styled.div``

export const About = styled.div`
  font-style: italic;
`

export const Copy = styled.div``
