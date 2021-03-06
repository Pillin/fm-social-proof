import styled from "@emotion/styled";

export const P = styled.p<{ isDark?: boolean }>`
  color: ${({ isDark }) =>
    isDark ? "hsl(303, 10%, 53%)" : "hsl(0, 0%, 100%)"};
  margin: 0px;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  font-family: "Lexend Deca", sans-serif;
`;

export const H1 = styled.h1`
  color: hsl(300, 43%, 22%);
  font-weight: 600;
  margin: 0px;
  font-size: 2rem;
`;
export const H2 = styled.h2`
  color: hsla(0, 0%, 100%, 0.75);
  font-weight: 300;
  text-transform: uppercase;
  margin: 8px 0px;
  font-size: 2rem;
`;

export const H3 = styled.h3`
  color: hsl(300, 43%, 22%);
  font-size: 12px;
  margin: 0px;
`;
export const H4 = styled.h4`
  color: hsl(0, 0%, 100%);
  margin: 0px;
`;
export const H5 = styled.h5`
  color: hsl(333, 80%, 67%);
  margin: 0px;
`;
