import React, { useState, FormEvent, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Wrapper,
  Section,
  ContentWrapper,
  InfoText,
  Image,
  FormWrapper,
  FormContainer,
  Input,
  Button,
  LinkText,
  ForgotPassword,
} from './styles/Login.style'
import { login } from '../../api/user/postLogin'

const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (email.trim() !== '' && password.trim() !== '') {
      const loginResult = await login(email, password)

      if (loginResult) {
        navigate('/')
        localStorage.setItem('token', loginResult.data.token)
      } else {
        console.error('login fail')
      }
    }
  }

  return (
    <Wrapper>
      <Section>
        <ContentWrapper>
          <InfoText>
            <div>
              <p>
                걱정하지 마세요,
                <br />
                포트폴리오는 간단합니다.
              </p>
              <p>
                <span>포트폴리오를 한 번에 쓱!</span>
                <br />
                POSSG과 함께 나만의 멋진 포트폴리오를 만들어 보세요.
              </p>
            </div>
            <Image src={`/img/charactor.png`} alt='possg-charactor' />
          </InfoText>

          <FormWrapper>
            <FormContainer onSubmit={handleSubmit}>
              <h2>로그인</h2>
              <Input
                id='email'
                name='email'
                type='email'
                placeholder='Type your email'
                value={email}
                onChange={handleEmailChange}
                required
              />
              <Input
                id='password'
                name='password'
                type='password'
                placeholder='Type your password'
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <ForgotPassword href='/'>비밀번호 찾기</ForgotPassword>
              <Button type='submit'>로그인</Button>
              <LinkText>
                계정이 없으신가요? <a href='/register'>회원가입하기</a>
              </LinkText>
            </FormContainer>
          </FormWrapper>
        </ContentWrapper>
      </Section>
    </Wrapper>
  )
}

export default Login
