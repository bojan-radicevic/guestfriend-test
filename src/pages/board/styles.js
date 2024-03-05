import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100vw - 32px);
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100vw - 32px);
  height: calc(100vh - 104px);
`;

export { Wrapper, Container };
