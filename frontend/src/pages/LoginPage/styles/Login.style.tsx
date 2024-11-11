import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #2563eb;
  width: 100vw;
  min-height: 100vh;
`

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 2rem 5rem;
`

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const InfoText = styled.div`
  color: white;
  font-size: 1.875rem;
  line-height: 1.3;
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    padding: 0 2.5rem;
  }

  p {
    font-weight: 600;
  }

  span {
    font-size: 2rem;
    font-weight: 600;
  }
`

export const Image = styled.img`
  width: 20rem;
  padding-left: 2.5rem;
  margin-top: 2.5rem;
`

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1.5rem 3rem;
`

export const FormContainer = styled.form`
  background-color: #ffffff;
  border-radius: 0.375rem;
  max-width: 24rem;
  padding: 1.5rem;
  color: #1f2937;

  h2 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background-color: #f9fafb;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.3);
  }
`

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  background-color: #2563eb;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1e3a8a;
  }
`

export const ForgotPassword = styled.a`
  display: block;
  text-align: right;
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.5rem;
`

export const LinkText = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.875rem;
  color: #6b7280;

  a {
    color: #2563eb;
    font-weight: 600;
    text-decoration: none;
  }

  a:hover {
    color: #1e3a8a;
  }
`
