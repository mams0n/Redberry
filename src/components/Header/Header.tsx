import CIcon from 'components/Icon/Icon'
import { useLocation } from 'react-router-dom';
import * as S from './styled'

const Header = () => {
    const location = useLocation();

    return (
        <S.HeaderContainer>
            <S.Header>
                {/* <CIcon filename='logo' onClick={{}} /> */}
                <img src='https://instashop.com/assets/images/logos/Splash02.png' alt='' />
                <S.Moto>
                    Shop Here / Be Cool
                </S.Moto>
                <S.SocialContainer>
                    <S.FacebookBox>
                        <CIcon filename='facebook' />
                    </S.FacebookBox>
                    <S.InstagramBox>
                        <CIcon filename='instagram' />
                    </S.InstagramBox>
                </S.SocialContainer>
            </S.Header>
        </S.HeaderContainer>
    )
}

export default Header