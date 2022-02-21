import { useState } from 'react'
import { Form } from 'antd';
import { useHistory } from 'react-router-dom';
import { SInput } from 'components/Input/styled';
import { SButton } from 'components/Button/styled';
import { notification } from 'antd';
import * as S from './styled'

const Login = () => {
    const history = useHistory();
    const [form] = Form.useForm();
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const onFinish = (values: any) => {
        if (userName === 'redberry' && password === 'password') {
            notification.success({
                placement: 'bottomLeft',
                message: 'Login successful',
            });
            history.push('/tableview')
        }
        else {
            notification.error({
                placement: 'bottomLeft',
                message: 'Wrong username or password',
            });
        }
    }
    return (
        <Form
            form={form}
            onFinish={onFinish}
        >
            <S.Wrapper className='--------------'>
                <S.LoginContainer>
                    <S.LoginTitle>
                        Log In
                    </S.LoginTitle>
                    <S.LoginSubtext>Fill in required fields to sign in</S.LoginSubtext>
                    <Form.Item name='username' label='Username' className='username' rules={[{ required: true }]}>
                        <SInput
                            placeholder='Username'
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item name='password' label='Password' className='password' rules={[{ required: true }]}>
                        <SInput
                            type='password'
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Item>
                    <SButton htmlType={'submit'}>LOG IN</SButton>
                </S.LoginContainer>
            </S.Wrapper>
        </Form>
    )
}

export default Login