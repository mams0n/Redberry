import Category from 'components/Category/Category'
import Footer from 'components/Footer/Footer'
import Slider from 'components/Slider/Slider'
import WeeksFavorites from 'components/WeeksFavorites/WeeksFavorites'
import * as S from './styled'

const MainPage = () => {

    return (
        <S.Wrapper>
            <WeeksFavorites />
            <Slider />
            <Category />
        </S.Wrapper>
    )
}

export default MainPage