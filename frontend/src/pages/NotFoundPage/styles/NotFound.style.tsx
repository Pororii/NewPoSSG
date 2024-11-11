import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Section = styled.section`
  background-color: #ffffff;
  color: #333;
  &.dark {
    background-color: #1a202c;
  }
`

export const Container = styled.div`
  padding: 2rem 1rem;
  margin: 0 auto;
  max-width: 1200px;

  @media (min-width: 1024px) {
    padding: 4rem 1.5rem;
  }
`

export const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`

export const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 1.2;
  color: #2563eb;
  &.dark {
    color: #3b82f6;
  }

  @media (min-width: 1024px) {
    font-size: 6rem;
  }
`

export const Message = styled.p`
  margin-bottom: 1rem;
  font-size: 1.875rem;
  font-weight: 700;
  color: #1f2937;
  &.dark {
    color: #ffffff;
  }

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`

export const Description = styled.p`
  margin-bottom: 1rem;
  font-size: 1.125rem;
  font-weight: 300;
  color: #6b7280;
  &.dark {
    color: #9ca3af;
  }
`

export const StyledLink = styled(Link)`
  color: #2563eb;
  display: inline-flex;
  background-color: #2563eb;
  &:hover {
    background-color: #1e3a8a;
  }
  focus:ring-4 {
    outline: none;
  }
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.375rem;
  padding: 0.625rem 1.25rem;
  margin-top: 1rem;

  &.dark:focus {
    background-color: #1e40af;
  }
`
