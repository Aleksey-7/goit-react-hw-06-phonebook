import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--backdrop-bg-color);
`;

export const ModalWrapper = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: auto;
  padding: 10px;
  background-color: var(--main-bg-color);
  color: var(--main-text-color);
  @media screen and (min-width: 768px) {
    width: 600px;
    padding: 30px;
  }
  @media screen and (min-width: 1440px) {
    padding: 50px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--accent-bg-color);
  margin-bottom: 35px;
  padding-bottom: 25px;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 900;
  text-transform: uppercase;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--second-bg-color);
  color: var(--second-text-color);
  font-family: inherit;
  border: none;
  cursor: pointer;
  transition: background-color var(--main-hover-animation);
  :hover,
  :focus {
    background-color: var(--accent-bg-color);
  }
`;
