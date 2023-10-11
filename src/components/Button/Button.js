import styled, { css } from 'styled-components';

function Button({ type, shape, content, disabled, color }) {
  return (
    <>
      {shape === 'a' && (
        <DefaultButton
          type={type}
          data-color={color}
          disabled={disabled}
          aria-label={content}
          tabIndex={0}
        >
          {content}
        </DefaultButton>
      )}
    </>
  );
}

/**
 * Button props list
 * @property {string} type - button, submit, reset
 * @property {string} content
 * @property {string} color - ?, ?, ?
 * @property {boolean} disabled
 */

Button.defaultProps = {
  type: 'button',
  disabled: false,
  content: '버튼',
  shape: 'a',
};

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DefaultButton = styled.button`
  ${FlexCenter};
  color: #f00;
  // background-color: ${props => (props.theme === 'dark' ? '#fff' : '#000')};
`;

const OutlinedButton = styled(DefaultButton)`
  border: 1px red solid;
`;

export default Button;
