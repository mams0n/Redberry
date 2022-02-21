import { useState, useEffect } from 'react'
import { Input, notification } from 'antd'
import * as S from './styled'
import CIcon from 'components/Icon/Icon'

const EditableInput = (props) => {
    const [value, setValue] = useState(props.value)
    const [mode, setMode] = useState<'view' | 'edit'>('view')
    const fieldValue = props.value

    useEffect(() => {
        setValue(fieldValue)
    }, [fieldValue])

    const onTickClick = () => {
        setMode('view')
        notification.success({
            placement: 'bottomLeft',
            message: 'Input updated successfully',
        });
    }

    return (
        <S.EditableInput>
            <Input
                className={mode === 'edit' ? 'card-field-input-edit' : 'card-field-input-view'}
                readOnly={mode === 'view'}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                suffix={mode === 'view' ?
                    <>
                        <CIcon filename='edit' className='edit-icon' onClick={() => setMode('edit')} />
                    </>
                    :
                    <S.IconsContainer>
                        <CIcon filename='close' onClick={() => { setMode('view') }} />
                        <CIcon filename='tick' onClick={onTickClick} />
                    </S.IconsContainer>
                }
            />
        </S.EditableInput>
    )
}

export default EditableInput