import styled from 'styled-components'

export const FavoritesAndGiftsContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  margin-top: 30px;
`

export const WeeksFavoritesInner = styled.div`
  width: 50%;
  height: 100%;
`

export const GiftsInner = styled.div`
  width: 50%;
  height: 100%;
  padding-left: 70px;
`

export const WeeksFavoritesSpan = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
  border-bottom: 2px solid #ee305e;
  display: inline-block;
  margin-left: 100px;
`

export const WeeksFavoriteShopsList = styled.div`
  font-size: 60px;
  width: 100%;
  height: 80%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  padding: 20px 0px 20px 100px;
  gap: 20px;
  ::-webkit-scrollbar {
    width: 0.375vw;
  }
  ::-webkit-scrollbar-track {
    border-radius: 0.625vw;
  }
  ::-webkit-scrollbar-thumb {
    width: 0.438vw;
    height: 0.438vw;
    border-radius: 2.5vw;
    background-color: #8542b7;
    filter: blur(10px);
  }
`

export const FavoriteShop = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  gap: 20px;
`

export const ShopImage = styled.div`
  width: 80px;
  height: 80px;
  img {
    width: 80px;
    height: 80px;
    vertical-align: unset;
    border-radius: 50%;
    padding: 2px;
    background: linear-gradient(#fff, #fff) padding-box,
      linear-gradient(45deg, #ffeb3b 5%, #ff0065, #f900ff) border-box;
    border: 3.5px solid transparent;
  }
`

export const ShopDescription = styled.div`
  width: calc(100% - 80px);
  height: 100%;
`

export const ShopName = styled.div`
  font-size: 14px;
  font-weight: bold;
`

export const ShopCategory = styled.div`
  font-size: 14px;
  font-style: italic;
  margin-top: 10px;
`
