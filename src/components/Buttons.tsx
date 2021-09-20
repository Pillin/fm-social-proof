import styled from "@emotion/styled";

export const WhiteButton = styled.button<{ color: string }>`
  border-style: solid;
  border: 0px;
  border-radius: 20px;
  padding: 16px 8px;
  width: 120px;
  font-weight: 600;
  font-family: "Big Shoulders Display", cursive;
  color: ${({ color }) => color};
`;
