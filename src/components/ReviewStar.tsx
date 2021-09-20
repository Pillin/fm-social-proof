/* eslint-disable prettier/prettier */
import React from "react";
import styled from "@emotion/styled";
import { H3 } from "./Typography";

const Container = styled.section`
  border-radius: 10px;
  background-color: hsl(300, 24%, 96%);
  height: 48px;
  width: 240px;
  display: flex;
  flex-direction: column;
  gap: 8px 0px;
  align-items: center;
  padding: 16px;
`;

const Star = styled.section<{ rating: number }>`
  padding: 0px;
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-family: Times; // make sure ★ appears correctly
  line-height: 1;
  &:before {
    content: "★★★★★";
    letter-spacing: 8px;
    background: ${({ rating }) =>
    `linear-gradient(90deg, #f17f3c ${rating}%, black ${rating}%)`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const ReviewStar = (props: { rating: number; provider: string }) => {
  return (
    <Container>
      <Star rating={props.rating * 20} />
      <H3>{`Rated ${props.rating} Stars in ${props.provider}`}</H3>
    </Container>
  );
};

export default ReviewStar;
