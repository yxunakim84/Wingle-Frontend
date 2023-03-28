import FreeTab from "@/src/components/community/list/freeTab";
import Header from "@/src/components/community/list/header";
import InteractTab from "@/src/components/community/list/interactTab";
import NoticeTab from "@/src/components/community/list/noticeTab";
import { getImageUrl } from "@/src/modules/utils";
import { useRouter } from "next/router";
import { useMemo } from "react";
import styled from "styled-components";
import Navigation from "@/src/components/layout/Navigation";

type Tab = {
  tab: string;
};

export default function Community(props: { tab: string }) {
  const router = useRouter();

  const onClickMoveToWrite = () => {
    router.push({ pathname: `/community/create`, query: { tab: props.tab } });
  };

  const currentTab: string = useMemo(() => {
    if (!router.query.tab) {
      return "자유";
    }
    return String(router.query.tab);
  }, [router.query.tab]);

  const onClickTab = (event: any) => {
    router.push({ query: { tab: event.target.textContent } });
  };

  return (
    <Style.Wrapper>
      <Header tab={currentTab} onClickTab={onClickTab} />
      {currentTab === "교류" && (
        <InteractTab imgUrl={getImageUrl(currentTab)} />
      )}
      {currentTab === "공지" && <NoticeTab imgUrl={getImageUrl(currentTab)} />}
      {currentTab === "자유" && <FreeTab imgUrl={getImageUrl(currentTab)} />}
      <Style.Box>
        <Style.CreateIcon
          tab={props.tab}
          src="community/list/new-write.svg"
          onClick={onClickMoveToWrite}
        />
      </Style.Box>
      <Navigation tab={currentTab} />
    </Style.Wrapper>
  );
}

const Style = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    padding-bottom: 72px;
  `,

  Box: styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-right: 30px;
  `,

  CreateIcon: styled.img<Tab>`
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: 94px;
    display: ${({ tab }) => (tab === "공지" ? "none" : "block")};
  `,
};
