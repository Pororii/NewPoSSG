import React, { useState } from 'react'

import * as L from '../styles/Register.style'

interface KeywordInputProps {
  keywords: string[]
  setKeywords: React.Dispatch<React.SetStateAction<string[]>>
}

const KeywordInput: React.FC<KeywordInputProps> = ({
  keywords,
  setKeywords,
}) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [isComposing, setIsComposing] = useState<boolean>(false)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isComposing) return // IME 입력 중에는 동작하지 않음
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      if (inputValue.trim()) {
        setKeywords([...keywords, inputValue.trim()])
        setInputValue('')
      }
    }
  }

  const handleRemoveKeyword = (index: number) => {
    setKeywords(keywords.filter((_, i) => i !== index))
  }

  return (
    <L.InputContainer>
      <L.Label>희망 태그:</L.Label>
      <L.Input
        type='text'
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onCompositionStart={() => setIsComposing(true)} // IME 입력 시작
        onCompositionEnd={() => setIsComposing(false)} // IME 입력 종료
        placeholder='키워드를 입력하고 스페이스바 또는 엔터를 누르세요'
      />
      <L.TagList>
        {keywords.map((keyword, index) => (
          <L.Tag key={index}>
            {keyword}
            <L.RemoveButton onClick={() => handleRemoveKeyword(index)}>
              ×
            </L.RemoveButton>
          </L.Tag>
        ))}
      </L.TagList>
    </L.InputContainer>
  )
}

export default KeywordInput
