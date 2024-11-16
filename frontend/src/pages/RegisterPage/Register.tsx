import React, { useState } from 'react'

import KeywordInput from './components/KeywordInput'
import * as L from './styles/Register.style'
import { postCheckEmailNumber } from '../../api/user/postCheckEmailNumber'
import { postCheckEmailSend } from '../../api/user/postCheckEmailSend'
import { register } from '../../api/user/postRegister'

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
  const [tags, setTags] = useState<string[]>([])
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleEmailVerificationSend = async () => {
    try {
      const response = await postCheckEmailSend(email)
      if (response) {
        alert('인증번호가 이메일로 전송되었습니다.')
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('오류 메시지:', error.message)
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
      alert('인증번호 확인에 실패했습니다.')
    }
  }

  const validate = () => {
    const newErrors: { [key: string]: string } = {}
    if (!email) newErrors.email = '* 필수 항목입니다.'
    if (!verificationCode || !isEmailVerified)
      newErrors.verificationCode = '* 이메일 인증이 필요합니다.'
    if (!password) newErrors.password = '* 필수 항목입니다.'
    if (!nickname) newErrors.nickname = '* 필수 항목입니다.'
    if (!university) newErrors.university = '* 필수 항목입니다.'
    if (!major) newErrors.major = '* 필수 항목입니다.'
    if (!job) newErrors.job = '* 필수 항목입니다.'
    if (tags.length < 1) newErrors.tags = '* 최소 1개의 태그를 입력해야 합니다.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    const payload = {
      email,
      password,
      nickname,
      university,
      major,
      secondMajor,
      period,
      semesterOff,
      job,
      tags,
    }

    console.log('Payload for backend:', payload)

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
        tags,
      )
      if (response) {
        alert('회원가입이 성공적으로 완료되었습니다!')
      }
    } catch (error) {
      console.error(error)
      alert('회원가입에 실패했습니다.')
    }
  }
  const convertPeriodToNumber = (selectedPeriod: string): number => {
    const mapping: { [key: string]: number } = {
      '1-1': 1,
      '1-2': 2,
      '2-1': 3,
      '2-2': 4,
      '3-1': 5,
      '3-2': 6,
      '4-1': 7,
      '4-2': 8,
      기타: 9,
    }
    return mapping[selectedPeriod]
  }

  return (
    <L.Form onSubmit={handleSubmit}>
      <L.InputContainer>
        <L.Label>이메일:</L.Label>
        <L.Input
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        {errors.email && <L.ErrorMessage>{errors.email}</L.ErrorMessage>}
        <L.Button type='button' onClick={handleEmailVerificationSend}>
          인증번호 전송
        </L.Button>
      </L.InputContainer>

      <L.InputContainer>
        <L.Label>인증번호:</L.Label>
        <L.Input
          type='string'
          value={verificationCode}
          onChange={e => setVerificationCode(e.target.value)}
        />
        {errors.verificationCode && (
          <L.ErrorMessage>{errors.verificationCode}</L.ErrorMessage>
        )}
        <L.Button type='button' onClick={handleVerifyCode}>
          인증번호 확인
        </L.Button>
      </L.InputContainer>

      <L.InputContainer>
        <L.Label>비밀번호:</L.Label>
        <L.Input
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        {errors.password && <L.ErrorMessage>{errors.password}</L.ErrorMessage>}
      </L.InputContainer>

      <L.InputContainer>
        <L.Label>닉네임:</L.Label>
        <L.Input
          type='text'
          value={nickname}
          onChange={e => setNickname(e.target.value)}
          required
        />
        {errors.nickname && <L.ErrorMessage>{errors.nickname}</L.ErrorMessage>}
      </L.InputContainer>

      <L.InputContainer>
        <L.Label>대학교:</L.Label>
        <L.Input
          type='text'
          value={university}
          onChange={e => setUniversity(e.target.value)}
          //required
        />
        {errors.university && (
          <L.ErrorMessage>{errors.university}</L.ErrorMessage>
        )}
      </L.InputContainer>

      <L.InputContainer>
        <L.Label>전공:</L.Label>
        <L.Input
          type='text'
          value={major}
          onChange={e => setMajor(e.target.value)}
          //required
        />
        {errors.major && <L.ErrorMessage>{errors.major}</L.ErrorMessage>}
      </L.InputContainer>

      <L.InputContainer>
        <L.Label>복수 전공:</L.Label>
        <L.Input
          type='text'
          value={secondMajor}
          onChange={e => setSecondMajor(e.target.value)}
        />
      </L.InputContainer>

      <L.InputContainer>
        <L.Label>학기:</L.Label>
        <L.Select
          value={period}
          onChange={e => setPeriod(convertPeriodToNumber(e.target.value))}
          //required
        >
          <option value='1-1'>1학년 1학기</option>
          <option value='1-2'>1학년 2학기</option>
          <option value='2-1'>2학년 1학기</option>
          <option value='2-2'>2학년 2학기</option>
          <option value='3-1'>3학년 1학기</option>
          <option value='3-2'>3학년 2학기</option>
          <option value='4-1'>4학년 1학기</option>
          <option value='4-2'>4학년 2학기</option>
          <option value='기타'>기타</option>
        </L.Select>
      </L.InputContainer>

      <L.InputContainer>
        <L.Label>휴학 여부:</L.Label>
        <L.Select
          value={semesterOff ? 'yes' : 'no'}
          onChange={e => setSemesterOff(e.target.value === 'yes')}
          //required
        >
          <option value='no'>아니요</option>
          <option value='yes'>예</option>
        </L.Select>
      </L.InputContainer>

      <L.InputContainer>
        <L.Label>희망 직무:</L.Label>
        <L.Input
          type='text'
          value={job}
          onChange={e => setJob(e.target.value)}
          //required
        />
        {errors.job && <L.ErrorMessage>{errors.job}</L.ErrorMessage>}
      </L.InputContainer>

      <KeywordInput keywords={tags} setKeywords={setTags} />
      {errors.tags && <L.ErrorMessage>{errors.tags}</L.ErrorMessage>}

      <L.SubmitButton type='submit'>회원가입</L.SubmitButton>
    </L.Form>
  )
}

export default Register
