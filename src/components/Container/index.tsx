import { styled } from 'styled-components';
import { PropsWithChildren } from 'react';

const OuterContainer = styled.div`
  height: 100%;
  background-color: var(--oxford-blue);
  padding: 4rem 0 2rem;
`;

const InnerContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  text-align: center;
`;

const Container = ({ children }: PropsWithChildren) => (
  <OuterContainer>
    <InnerContainer>{children}</InnerContainer>
  </OuterContainer>
);

export { Container };
