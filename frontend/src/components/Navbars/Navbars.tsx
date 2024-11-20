import { Icon } from '@iconify/react'
import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import {
  Navbar,
  Brand,
  LinksContainer,
  NavbarLink,
  UserContainer,
  Avatar,
  Nickname,
  IconWrapper,
  LoginButton,
} from './styles/Navbars.style'
import { user } from '../../api/user/getUser'
import { useUserStore } from '../../stores/useUserStore'
import {
  getUserFromLocalStorage,
  saveUserToLocalStorage,
  removeUserFromLocalStorage,
} from '../../utils/localStorage'

const Navbars: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeLink, setActiveLink] = useState<string>('')
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  const { user: userInfo, setUser: setUserInfo } = useUserStore()

  const token = localStorage.getItem('token')

  const handleLoginButtonClick = () => {
    if (loggedIn) {
      // 로그아웃
      localStorage.removeItem('token')
      removeUserFromLocalStorage()
      setUserInfo(null)
      setLoggedIn(false)
    } else {
      // 로그인 페이지로 이동
      navigate('/login')
    }
  }

  const getUserNickname = async () => {
    if (token && !userInfo) {
      try {
        const userInfoResult = await user(token)
        if (userInfoResult?.data) {
          setUserInfo(userInfoResult.data)
          saveUserToLocalStorage(userInfoResult.data)
        }
      } catch (error) {
        console.error('Error fetching user info:', error)
        // 로그아웃 처리
        handleLoginButtonClick()
      }
    }
  }

  useEffect(() => {
    setActiveLink(location.pathname)

    const storedUser = getUserFromLocalStorage()

    if (token) {
      setLoggedIn(true)
      if (storedUser) {
        setUserInfo(storedUser)
      } else {
        getUserNickname() // 사용자 닉네임 가져오기
      }
    } else {
      setLoggedIn(false)
    }
  }, [location.pathname, token])

  return (
    <Navbar>
      <LinksContainer>
        <Brand href='/'>
          <img alt='Logo' src='/img/logo_black.png' />
          <span>PoSSG</span>
        </Brand>
        <NavbarLink active={activeLink === '/'}>
          <a href='/'>로드맵</a>
        </NavbarLink>
        <NavbarLink active={activeLink === '/project'}>
          <a href='/project'>프로젝트</a>
        </NavbarLink>
        <NavbarLink active={activeLink === '/portfolio'}>
          <a href='/portfolio'>포트폴리오</a>
        </NavbarLink>
        <UserContainer>
          {loggedIn ? (
            <div className='flex items-center'>
              <Avatar>
                <svg fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 12c2.28 0 4-1.72 4-4s-1.72-4-4-4-4 1.72-4 4 1.72 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'></path>
                </svg>
              </Avatar>
              <Nickname>{userInfo?.nickname}</Nickname>
              <IconWrapper>
                <Icon icon='ri:arrow-drop-down-line' />
              </IconWrapper>
            </div>
          ) : null}
          <LoginButton onClick={handleLoginButtonClick}>
            {loggedIn ? '로그아웃' : '로그인'}
          </LoginButton>
        </UserContainer>
      </LinksContainer>
    </Navbar>
  )
}

export default Navbars
