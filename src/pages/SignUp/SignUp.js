import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../../components/Input/Input';

const SignUp = props => {
  // userInfo state 정의 (회원가입 정보)
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    name: '',
    phone: '',
    zipCode: '',
    address: '',
    addressDetail: '',
  });

  // userInfo state 구조분해할당
  const {
    email,
    password,
    passwordCheck,
    name,
    phone,
    zipCode,
    address,
    addressDetail,
  } = userInfo;

  // userInfo state onChange 핸들러 함수 정의
  const handleUserInfo = e => {
    const { name, value } = e.target; // e.target으로 각 name에 맞는 value를 가져온다.
    setUserInfo({ ...userInfo, [name]: value }); // userInfo를 카피하여 각각 name에 맞는 곳에 value 값을 넣어준다.
  };

  console.log(userInfo);

  return (
    <main>
      <SignUpContainer>
        <SignUpLeftSection>
          <span>회원가입</span>
        </SignUpLeftSection>
        <SignUpRightSection>
          <SignUpForm onChange={handleUserInfo}>
            <fieldset>
              <SignUpLegend>회원가입</SignUpLegend>
            </fieldset>
            <SignUpInputWrap>
              <Input
                placeholder="이메일을 입력하세요."
                borderRadius="4px"
                name="email"
              />
              <span>에러입니다.</span>
            </SignUpInputWrap>
            <SignUpInputWrap>
              <Input
                placeholder="패스워드를 입력하세요."
                borderRadius="4px"
                name="email"
              />
              <span>에러입니다.</span>
            </SignUpInputWrap>
            <SignUpInputWrap>
              <Input
                placeholder="패스워드를 다시 한번 입력하세요."
                borderRadius="4px"
                name="email"
              />
              <span>에러입니다.</span>
            </SignUpInputWrap>
            <SignUpInputWrap>
              <Input
                placeholder="이름을 입력하세요."
                borderRadius="4px"
                name="email"
              />
              <span>에러입니다.</span>
            </SignUpInputWrap>
            <SignUpInputWrap>
              <Input borderRadius="4px" name="email" />
              <span>에러입니다.</span>
            </SignUpInputWrap>
            <SignUpInputWrap>
              <Input borderRadius="4px" name="email" />
              <span>에러입니다.</span>
            </SignUpInputWrap>
            <SignUpInputWrap>
              <Input
                placeholder="상세주소를 입력하세요."
                borderRadius="4px"
                name="email"
              />
              <span>에러입니다.</span>
            </SignUpInputWrap>
            <SignUpInputWrap>
              <Input
                placeholder="휴대폰번호를 입력하세요."
                borderRadius="4px"
                name="email"
              />
              <span>에러입니다.</span>
            </SignUpInputWrap>
          </SignUpForm>
        </SignUpRightSection>
      </SignUpContainer>
    </main>
  );
};

export default SignUp;

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SignUpLeftSection = styled.section`
  flex: 1;
`;

const SignUpRightSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 25%;
`;

const SignUpLegend = styled.legend`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const SignUpInputWrap = styled.div`
  padding: 10px 0;
`;
