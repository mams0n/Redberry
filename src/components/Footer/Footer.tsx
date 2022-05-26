import * as S from './styled'

const Footer = () => {
    return (
        <S.FooterContainer>
            <S.Footer>
                <S.AllRights>2022. All rights reserved</S.AllRights>
                <S.CreatedBy>
                    <S.Logo><img height='25px' src='https://instashop.com/assets/images/logos/Splash02.png' alt='' /></S.Logo>
                    <S.Span>Created by Mams0n</S.Span>
                    <S.Date>2022</S.Date>
                </S.CreatedBy>
            </S.Footer>
        </S.FooterContainer>
    )
}

export default Footer