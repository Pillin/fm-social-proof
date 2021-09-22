/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React from "react";
import styled from "@emotion/styled";
import { H1, P } from "src/components/Typography";
import ReviewStar from "./components/ReviewStar";
import ReviewCard from "./components/ReviewCard";

const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 1440px;
  width: 100%;
  gap: 16px 0px;

  flex-direction: column;
  > section:first-child {
    max-width: 100%;
  }
 
  @media (min-width: 769px) {
    flex-direction: row;
    > section:first-child {
      max-width: 360px;
      width: 100%;
    }
  }
`;

const Ladder = styled.section<{ direction?: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px 0px;
  width: 100%;

  @media (min-width: 769px){
    flex-direction: ${({ direction }) => (direction === "ld" ? "row" : "column")};
    width: ${({ direction }) => (direction === "ld" ? "100%" : "50%")};
    gap: ${({ direction }) => (direction === "ld" ? "0px 16px" : "16px 0px")};

    > section:nth-child(2) {
      margin: ${({ direction }) =>
    direction === "ld" ? "16px 0px 0px 0px" : "0px 0px 0px 32px"};
    }

    > section:nth-child(3) {
      margin: ${({ direction }) =>
    direction === "ld" ? "32px 0px 0px 0px" : "0px 0px 0px 64px"};
    }
  }
`;

const Home = (props: {
  title: string;
  description: string;
  ratingList?: { rating: number; provider: string }[];
  reviewList: {
    img: { mobile: string; desktop: string; alt: string };
    description: string;
    name: string;
    title: string;
  }[];
}) => {
  return (
    <Container>
      <section>
        <H1>{props.title}</H1>
        <P isDark>{props.description}</P>
      </section>
      <Ladder direction="cd">
        {props.ratingList &&
          props.ratingList.map((elem, index) => (
            <ReviewStar {...elem} key={`review - star - ${index} `} />
          ))}
      </Ladder>
      <Ladder direction="ld">
        {props.reviewList &&
          props.reviewList.map((elem, index) => (
            <ReviewCard {...elem} key={`review - card - ${index} `} />
          ))}
      </Ladder>
    </Container>
  );
};

export default Home;
