import React from "react";
import styled from "@emotion/styled";
import { IMG } from "./Image";
import { H4, P, H5 } from "./Typography";

const Container = styled.section`
  background-color: hsl(300, 43%, 22%);
  border-radius: 10px;
  padding: 24px;
  width: 240px;
`;

const Row = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 70px;
  padding: 0px;
  gap: 0px 16px;
  justify-content: center;
  align-content: flex-start;
`;

const IMGStyle = {
  width: "50px",
  height: "50px",
  borderRadius: "50%"
};

const ReviewCard = (props: {
  img: { mobile: string; desktop: string; alt: string };
  description: string;
  name: string;
  title: string;
}) => {
  return (
    <Container>
      <Row>
        <IMG {...props.img} style={IMGStyle} />
        <H4>{props.name}</H4>
        <H5>{props.title}</H5>
      </Row>
      <P>{`"${props.description}"`}</P>
    </Container>
  );
};

export default ReviewCard;
