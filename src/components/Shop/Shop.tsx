import * as S from './styled'
import React, { useState, useEffect } from 'react'
import { Categories } from 'database/categories'
import { useParams } from 'react-router-dom'
import { useCategories } from 'context/Categories'
import CIcon from 'components/Icon/Icon'
import ShopName from './ShopName'

const Shop = () => {
    const { id } = useParams()

    const { state, getCategoryById } = useCategories()

    const [copied, setCopied] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setCopied(false)
        }, 3500)
    }, [copied])

    React.useEffect(() => {
        getCategoryById(id)
    }, [id])

    return (
        <S.Wrapper>
            {state?.category?.shops?.map((shop) => {
                return (
                    <S.ShopContainer>
                        <S.ShopWallpaper>
                            <img src={shop?.shop_url} alt='' />
                        </S.ShopWallpaper>
                        <S.ShopDetails>
                            <S.ShopName>
                                {shop?.shop_name}
                                <ShopName shop={shop} />
                                {/* <CIcon
                                    filename={copied ? 'success-tick' : 'copy'}
                                    onClick={() => {
                                        setTimeout(() => {
                                            <CIcon filename='copy' />
                                        }, 1000)
                                        setCopied(true)
                                        navigator.clipboard.writeText(shop?.shop_name)
                                    }}
                                /> */}
                            </S.ShopName>
                            <S.ShopStat>
                                <S.Posts>
                                    1254 Posts
                                </S.Posts>
                                <S.Followers>
                                    3728 Followers
                                </S.Followers>
                            </S.ShopStat>
                            <S.About>
                                SamoSale - Women's clothing store 🛍️
                            </S.About>
                        </S.ShopDetails>
                    </S.ShopContainer>
                )
            })}
        </S.Wrapper>
    )
}

export default Shop