import styled from 'styled-components';

export const Container = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 50px 10px 50px 10px;
  @media screen and (min-width: 768px) {
    width: 768px;
  }
`;

export const Title = styled.h2`
  font-size: 26px;
  text-transform: uppercase;
  font-weight: 900;
  color: var(--main-text-color);
  margin-bottom: 30px;
`;
