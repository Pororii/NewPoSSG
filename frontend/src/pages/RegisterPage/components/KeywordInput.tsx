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

  // 태그 색상 팔레트
  const colors = [
    '#eaf7fb',
    '#e8f5e9',
    '#fef9e7',
    '#fde9f1',
    '#fff4e5',
    '#f5e8ff',
  ]

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

  // 색상을 인덱스에 따라 순환적으로 할당
  const getColorForIndex = (index: number) => colors[index % colors.length]

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
        placeholder='키워드를 입력하고 엔터를 누르세요'
      />
      <L.TagList>
        {keywords.map((keyword, index) => (
          <L.Tag
            key={index}
            style={{
              backgroundColor: getColorForIndex(index),
              color: '#000',
            }}
          >
            {keyword}
            <L.RemoveButton
              style={{ color: '#000' }} // 검은색 텍스트 적용
              onClick={() => handleRemoveKeyword(index)}
            >
              ×
            </L.RemoveButton>
          </L.Tag>
        ))}
      </L.TagList>
    </L.InputContainer>
  )
}

export default KeywordInput
