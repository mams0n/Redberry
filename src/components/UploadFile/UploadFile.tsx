import Dragger from 'antd/lib/upload/Dragger';
import { SButton } from 'components/Button/styled';
import * as S from './styled'

const UploadFile = () => {
    return (
        <S.UploadFileContainer>
            <Dragger className='---------------'>
                <S.DraggerInner>
                    <S.DragInfoText>
                        Drag files here to upload
                    </S.DragInfoText>
                    <S.OrSeparator>
                        or
                    </S.OrSeparator>
                    <SButton className='upload_button'>
                        CHOOSE FILE TO UPLOAD
                    </SButton>
                </S.DraggerInner>
            </Dragger>
            <S.Required>Required</S.Required>
            <S.Download>
                Download
            </S.Download>
        </S.UploadFileContainer>
    )
}

export default UploadFile