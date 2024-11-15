import React, { useState } from 'react'

import * as L from './styles/Register.style'
import { postCheckEmailNumber } from '../../api/user/postCheckEmailNumber'
import { postCheckEmailSend } from '../../api/user/postCheckEmailSend'
import { register } from '../../api/user/postRegister'

// Define types for tags
type Tags = string[]

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [verificationCode, setVerificationCode] = useState<string>('')
  const [isEmailVerified, setIsEmailVerified] = useState<boolean>(false)
  const [password, setPassword] = useState<string>('')
  const [nickname, setNickname] = useState<string>('')
  const [university, setUniversity] = useState<string>('')
  const [major, setMajor] = useState<string>('')
  const [secondMajor, setSecondMajor] = useState<string>('')
  const [period, setPeriod] = useState<number>(1)
  const [semesterOff, setSemesterOff] = useState<boolean>(false)
  const [job, setJob] = useState<string>('')
  const [tags, setTags] = useState<string>('')

  const handleEmailVerificationSend = async () => {
    try {
      const response = await postCheckEmailSend(email)
      if (response) {
        alert('인증번호가 이메일로 전송되었습니다.')
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error Message:', error.message)
      }
    }
  }

  const handleVerifyCode = async () => {
    try {
      const response = await postCheckEmailNumber(email, verificationCode)
      if (response) {
        setIsEmailVerified(true)
        alert('인증번호가 확인되었습니다.')
      }
    } catch (error) {
      console.error(error)
      alert('Failed to verify code.')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isEmailVerified) {
      alert('이메일 인증을 먼저 진행해주세요.')
      return
    }

    const tagsArray: Tags = tags.split(',').map(tag => tag.trim())

    try {
      const response = await register(
        email,
        password,
        nickname,
        university,
        major,
        secondMajor,
        period,
        semesterOff,
        job,
        tagsArray,
      )
      if (response) {
        alert('Sign-up successful!')
      }
    } catch (error) {
      console.error(error)
      alert('Sign-up failed.')
    }
  }

  return (
    <L.Form onSubmit={handleSubmit}>
      <L.InputContainer>
        <L.Label>Email:</L.Label>
        <L.Input
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <L.Button type='button' onClick={handleEmailVerificationSend}>
          Send Verification Code
        </L.Button>
      </L.InputContainer>

      <L.InputContainer>
        <L.Label>Verification Code:</L.Label>
        <L.Input
          type='string'
          value={verificationCode}
          onChange={e => setVerificationCode(e.target.value)}
        />

        <L.Button type='button' onClick={handleVerifyCode}>
          Verify Code
        </L.Button>
      </L.InputContainer>

      <L.InputContainer>
        <L.Label>Password:</L.Label>
        <L.Input
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </L.InputContainer>

      <L.InputContainer>
        <L.Label>Nickname:</L.Label>
        <L.Input
          type='text'
          value={nickname}
          onChange={e => setNickname(e.target.value)}
          required
        />
      </L.InputContainer>

      <L.InputContainer>
        <L.Label>University:</L.Label>
        <L.Input
          type='text'
          value={university}
          onChange={e => setUniversity(e.target.value)}
          required
        />
      </L.InputContainer>

      <L.InputContainer>
        <L.Label>Major:</L.Label>
        <L.Input
          type='text'
          value={major}
          onChange={e => setMajor(e.target.value)}
          required
        />
      </L.InputContainer>

      <L.InputContainer>
        <L.Label>Second Major (optional):</L.Label>
        <L.Input
          type='text'
          value={secondMajor}
          onChange={e => setSecondMajor(e.target.value)}
        />
      </L.InputContainer>

      <L.InputContainer>
        <L.Label>Period (Semester):</L.Label>
        <L.Input
          type='number'
          value={period}
          onChange={e => setPeriod(parseInt(e.target.value))}
          required
        />
      </L.InputContainer>

      <L.InputContainer>
        <L.Label>Semester Off:</L.Label>
        <L.Select
          value={semesterOff ? 'yes' : 'no'}
          onChange={e => setSemesterOff(e.target.value === 'yes')}
          required
        >
          <option value='no'>No</option>
          <option value='yes'>Yes</option>
        </L.Select>
      </L.InputContainer>

      <L.InputContainer>
        <L.Label>Preferred Job Role:</L.Label>
        <L.Input
          type='text'
          value={job}
          onChange={e => setJob(e.target.value)}
          required
        />
      </L.InputContainer>

      <L.InputContainer>
        <L.Label>Desired Tags (comma-separated):</L.Label>
        <L.Input
          type='text'
          value={tags}
          onChange={e => setTags(e.target.value)}
        />
      </L.InputContainer>

      <L.SubmitButton type='submit'>Sign Up</L.SubmitButton>
    </L.Form>
  )
}

export default Register
