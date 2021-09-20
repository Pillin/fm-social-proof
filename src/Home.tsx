import React from "react";
import styled from "@emotion/styled";
import { H1, P } from "src/components/Typography";
import ReviewStar from "./components/ReviewStar";
import ReviewCard from "./components/ReviewCard";

const Container = styled.main``;

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
      <H1>{props.title}</H1>
      <P>{props.description}</P>
      {props.ratingList &&
        props.ratingList.map((elem, index) => (
          <ReviewStar {...elem} key={`review-star-${index}`} />
        ))}
      {props.reviewList &&
        props.reviewList.map((elem, index) => (
          <ReviewCard {...elem} key={`review-card-${index}`} />
        ))}
    </Container>
  );
};

export default Home;
