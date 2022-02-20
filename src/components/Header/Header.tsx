import CIcon from 'components/Icon/Icon'
import { useLocation } from 'react-router-dom';
import * as S from './styled'

const Header = () => {
    const location = useLocation();

    return (
        <S.Header>
            <CIcon filename='logo' onClick={{}} />
            {location.pathname !== '/' && <h2>Recruitement Pipeline</h2>}
        </S.Header>
    )
}

export default Header