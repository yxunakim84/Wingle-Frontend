import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Text, Margin } from "@/src/components/ui";
const Style = {
  Wrapper: styled.div`
    display: flex;
    margin-top: 9px;
    margin-bottom: 24px;
  `,
  GenderWrapper: styled.div`
    display: flex;
    text-align: center;
    margin-right: 24px;
  `,
};
export default function GenderSelectBox() {
  const [gender, setGender] = useState(true);

  return (
    <>
      <Text.Body1 color="gray700">성별</Text.Body1>
      <Style.Wrapper>
        <Margin direction="column" size={9} />
        <Style.GenderWrapper>
          <img
            onClick={() => {
              setGender(true);
            }}
            src={gender === true ? "/auth/normal.svg" : "/auth/disable.svg"}
          ></img>
          <Margin direction="row" size={8} />
          <Text.Body3 color="gray900">여성 </Text.Body3>
        </Style.GenderWrapper>
        <Style.GenderWrapper>
          <img
            onClick={() => {
              setGender(false);
            }}
            src={gender === false ? "/auth/normal.svg" : "/auth/disable.svg"}
          ></img>
          <Margin direction="row" size={8} />
          <Text.Body3 color="gray900">남성 </Text.Body3>
        </Style.GenderWrapper>
      </Style.Wrapper>
    </>
  );
}
