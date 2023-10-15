import React from 'react';
import { ReactComponent as CartIcon } from '../../svg/icon_cart.svg';
import styled from 'styled-components';

const CartButton = ({ onClick }) => {
  return (
    <CartButtonWrap>
      <button type="button" onClick={onClick}>
        <CartIcon />
      </button>
    </CartButtonWrap>
  );
};

const CartButtonWrap = styled.div`
  button {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px transparent solid;
    background-color: ${props => props.theme.grayscaleB};
    svg {
      fill: ${props => props.theme.grayscaleF};
    }
    &:hover,
    &:active {
      background-color: ${props => props.theme.grayscaleF};
      svg {
        fill: ${props => props.theme.grayscaleB};
      }
    }
  }
`;

export default CartButton;
