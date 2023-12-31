import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ProductText = ({ productId, productName, originalPrice, totalPrice }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/detail/${productId}`, {
      state: { productId: productId },
    });
  };

  return (
    <ProductProductTextWrap>
      <button type="button" onClick={goToDetail}>
        <h2>{productName}</h2>
        <strong>
          <span>{originalPrice?.toLocaleString()}원</span>
          <span>{totalPrice?.toLocaleString()}원</span>
        </strong>
      </button>
    </ProductProductTextWrap>
  );
};

const ProductProductTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  button {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px;
    h2,
    strong {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: ${props => props.theme.grayscaleF};
    }
    h2 {
      font-size: 24px;
      font-weight: 700;
    }
    strong {
      font-size: 16px;

      span:first-child {
        color: ${props => props.theme.grayscaleD};
        text-decoration: line-through;
        & + span {
          margin-left: 8px;
          font-size: 20px;
        }
      }
    }
  }
`;

export default ProductText;
