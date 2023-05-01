import { useRouter } from "next/router";
import styled from "styled-components";
import { Text } from "../../ui";

export default function Header({ currentTab }: { currentTab: string }) {
  const router = useRouter();

  return (
    <S.Wrapper>
      <S.Header>
        <S.BackArrow
          src="/community/arrow-back.svg"
          onClick={() => router.back()}
        />
        <Text.Title2 color="gray900">{currentTab}게시판</Text.Title2>
      </S.Header>
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    width: 100%;
    max-width: 500px;
    background-color: #fff;
    position: fixed;
  `,

  Header: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 14px 24px;
  `,

  BackArrow: styled.img`
    margin-right: 14.5px;
  `,
};
