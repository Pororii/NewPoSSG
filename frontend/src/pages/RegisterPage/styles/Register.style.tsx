import styled from 'styled-components'

export const Form = styled.form`
  max-width: 500px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`

export const Button = styled.button`
  margin-top: 10px;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`

export const SubmitButton = styled(Button)`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
`

export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 8px;
`

// Tag
export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
`

export const Tag = styled.div`
  background-color: #007bff;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
`

export const RemoveButton = styled.button`
  margin-left: 8px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
`
