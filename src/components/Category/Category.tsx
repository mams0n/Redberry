import CIcon from 'components/Icon/Icon'
import { Categories } from 'database/categories'
import { Link } from 'react-router-dom'
import * as S from './styled'

const Category = () => {
    return (
        <S.Wrapper>
            {Categories.map(item => {
                console.log(item, 'item')
                return (
                    <Link to={`/details/${item.id}`}>
                        <S.CategoryContainer>
                            <S.CategoryPhoto>
                                <CIcon filename={`${item.name}`} />
                            </S.CategoryPhoto>
                            <S.CategoryName>{item.name}</S.CategoryName>
                            <S.CategoryCount>{item.count}</S.CategoryCount>
                        </S.CategoryContainer>
                    </Link>
                )
            })}

        </S.Wrapper>
    )
}

export default Category