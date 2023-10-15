import React from 'react';
import DaumPostcode, { useDaumPostcodePopup } from 'react-daum-postcode';
import { postcodeScriptUrl } from 'react-daum-postcode/lib/loadPostcode';
import Button from '../../../components/Button/Button';

const DaumPostCode = props => {
  const open = useDaumPostcodePopup(postcodeScriptUrl); // 우편번호 검색 팝업을 띄우는 함수

  const handelComplete = data => {
    let fullAddress = data.address; // 최종 주소 변수
    let extraAddress = ''; // 추가될 주소 변수

    if (data.addressType === 'R') {
      // 주소 타입이 도로명 주소일 경우
      if (data.bname !== '') {
        // 법정동명이 있을 경우
        extraAddress += data.bname; // 법정동, 법정리
      }
      if (data.buildngName !== '') {
        // 건물명이 있을 경우
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildngName}` : data.buildngName; // 건물명
      }
      // 지역 주소 제외 전체 주소 치환
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    props.onAddressSelect(data); // 주소 선택 시 실행할 함수
  };

  const handelClick = () => {
    open({
      // 팝업창 옵션
      q: '', // 검색창에 키워드 넣기
      left: window.screen.width / 2 - 400, // 왼쪽 위치
      top: window.screen.height / 2 - 300, // 위쪽 위치
      popupName: 'postcodePopup', // 팝업창 이름
    });
  };

  return (
    <Button onClick={handelClick} {...props}>
      우편번호 찾기
    </Button>
  );
};

export default DaumPostCode;
