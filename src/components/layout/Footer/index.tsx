import styled from "styled-components";
import { Margin, Text } from "../../ui";

export default function Footer() {
  return (
    <>
      <S.Wrapper>
        <S.Content>
          <S.WingleLogo src="footer-logo.png" alt="wingle-logo" />
          <Margin direction="column" size={32} />
          <Text.Caption2 color="gray500">
            공식 노션 바로가기 | 윙글 SNS 바로가기
          </Text.Caption2>
          <Margin direction="column" size={11} />
          <Text.Caption2 color="gray500">
            문의 | wingle.kr@gmail.com
          </Text.Caption2>
          <Margin direction="column" size={11} />
          <Text.Caption2 color="gray500">
            이용약관 | 개인정보처리방침
          </Text.Caption2>
        </S.Content>
      </S.Wrapper>
    </>
  );
}

const S = {
  Wrapper: styled.div`
    width: 500px;
    height: 270px;
    position: fixed;
    bottom: 0;
    background-color: #fcfcfc;
    border-top: 1px solid #eeeef2;
  `,
  Content: styled.div`
    padding: 32px 24px;
  `,
  WingleLogo: styled.img`
    width: 80px;
    height: 30px;
  `,
};
