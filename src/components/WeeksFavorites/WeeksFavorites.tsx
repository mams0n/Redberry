import { FavoriteShops } from 'database/favoriteShops'
import * as S from './styled'

const WeeksFavorites = () => {
    return (
        <S.FavoritesAndGiftsContainer>
            <S.WeeksFavoritesInner>
                <S.WeeksFavoritesSpan>
                    Week's Favorite Shops
                </S.WeeksFavoritesSpan>
                <S.WeeksFavoriteShopsList>
                    {FavoriteShops.map((shop) => {
                        console.log(shop)
                        return (
                            <S.FavoriteShop>
                                <S.ShopImage><img src={shop.shop_url} alt='' /></S.ShopImage>
                                <S.ShopDescription>
                                    <S.ShopName>{shop.shop_name}</S.ShopName>
                                    <S.ShopCategory>Category: {shop.name}</S.ShopCategory>
                                </S.ShopDescription>
                            </S.FavoriteShop>
                        )
                    })}
                </S.WeeksFavoriteShopsList>
            </S.WeeksFavoritesInner>
            <S.GiftsInner>
                <img width='300px' src='https://www.pngall.com/wp-content/uploads/5/Dua-Lipa-Singer.png' alt='' />
            </S.GiftsInner>
        </S.FavoritesAndGiftsContainer>
    )
}

export default WeeksFavorites