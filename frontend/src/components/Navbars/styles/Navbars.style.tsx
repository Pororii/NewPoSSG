import {
  Navbar as FlowbiteNavbar,
  Button as FlowbiteButton,
} from 'flowbite-react'
import styled from 'styled-components'

export const Navbar = styled(FlowbiteNavbar)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: 1rem 2rem;
  background-color: #ffffff; /* 흰색 배경 */
  display: flex;
  justify-content: space-between; /* 로고, 메뉴, 버튼 간격 조정 */
  align-items: center; /* 세로 가운데 정렬 */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* 하단 그림자 */
  border-bottom: 1px solid #e5e7eb; /* 하단 경계선 */
`

export const Brand = styled(FlowbiteNavbar.Brand)`
  display: flex;
  align-items: center;
  margin-right: 20px;

  img {
    height: 24px;

    @media (min-width: 640px) {
      height: 36px;
    }
  }

  span {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.textPrimary || '#000'};
    font-weight: 600;
    margin-left: 8px; /* 로고와 텍스트 간격 */
  }
`

export const LinksContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center; /* 가운데 정렬 */
  gap: 2rem; /* 메뉴 간 간격 */
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1; /* 공간을 확장하여 양쪽 여백 확보 */
`

export const NavbarLink = styled.li<{ active: boolean }>`
  font-weight: 600;
  letter-spacing: -0.5px;
  color: ${({ active, theme }) =>
    active
      ? theme.colors.textPrimary || '#000'
      : theme.colors.textSecondary || '#6b7280'};
  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary || '#000'};
  }

  a {
    text-decoration: none;
    color: inherit; /* 부모 색상 상속 */
  }
`

export const UserContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem; /* 로그인 버튼과 다른 요소 간격 */
`

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background-color: #e5e7eb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
    color: #9ca3af;
  }
`

export const Nickname = styled.div`
  font-weight: 600;
  margin-left: 8px;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 4px;

  svg {
    color: #000;
    font-size: 24px;
  }
`

export const LoginButton = styled(FlowbiteButton)`
  font-weight: 500;
  padding: 0.2rem 0.7rem;
  border-radius: 0.4rem;
  border: 1px solid #ababab;
  / &:hover {
    background-color: #f3f4f6;
  }
`
