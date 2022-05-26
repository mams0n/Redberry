import * as S from './styled'
import { useParams } from 'react-router-dom'
import Shop from 'components/Shop/Shop'

const Details = () => {
    const { id } = useParams()
    console.log(id, 'idddddddd')
    return (
        <S.DetailsWrapper>
            <Shop />
        </S.DetailsWrapper>
    )
}

export default Details