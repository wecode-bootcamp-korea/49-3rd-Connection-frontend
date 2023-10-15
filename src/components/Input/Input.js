import React from 'react';
import styled from 'styled-components';

function Input({
  type = 'text',
  name,
  value,
  defaultValue,
  onChange,
  disabled,
  placeholder,
  ...props
}) {
  return (
    // 인풋 Props
    <FlexLabel {...props}>
      <DefaultInput
        type={type}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        {...props}
      />
    </FlexLabel>
  );
}

/**
 * Input Props 정의
 * @property {string} type - 인풋 타입
 * @property {string} dataShape - 인풋 모양 (solid, round)
 * @property {string} dataSize - 인풋 크기 (small, medium)
 * @property {string} dataColor - 인풋 색상 (primary, secondary, neutral)
 * @property {string} dataStatus - 인풋 상태 (default, error, done)
 * @property {boolean} dataFull - 인풋 width 100%
 * @property {string} name - 인풋 이름
 * @property {string} value - 인풋 값 (변경 불가)
 * @property {string} defaultValue - 인풋 기본 값 (변경 가능)
 * @property {function} onChange - 인풋 값 변경 이벤트
 * @property {boolean} disabled - 인풋 비활성화
 * @property {string} placeholder - 인풋 플레이스홀더
 */

const INPUT_SIZE = {
  small: {
    height: '40px',
    fontSize: '16px',
  },
  medium: {
    height: '50px',
    fontSize: '20px',
  },
  large: {
    height: '60px',
    fontSize: '24px',
  },
};

const FlexLabel = styled.label`
  display: flex;
  align-items: center;
  flex: ${({ labelFlex }) => labelFlex || '0'};
`;

const DefaultInput = styled.input`
  opacity: 0.9;
  width: 100%;
  height: ${({ size }) => INPUT_SIZE[size]?.height || INPUT_SIZE.medium.height};
  padding: 0 20px;
  outline: none;
  font-size: ${({ size }) =>
    INPUT_SIZE[size]?.fontSize || INPUT_SIZE.medium.fontSize};
  border: 1px solid transparent;
  border-radius: ${props => props.borderRadius};

  ${props => {
    if (props.status === 'error') {
      return `
        border-color : ${props.theme.secondaryColor};
        color : ${props.theme.secondaryColor};
      `;
    } else if (props.status === 'done') {
      return `
        border-color : ${props.theme.primaryColor};
        color : ${props.theme.primaryColor};
      `;
    } else {
      return `
      border-color : ${props.theme.grayscaleC};
        color : ${props.theme.grayscaleD};
      `;
    }
  }}
`;

export default Input;