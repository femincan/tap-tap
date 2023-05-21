import { styled } from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 1.8rem;

  & a {
    color: inherit;
  }
`;

const Footer = () => (
  <FooterContainer>
    <p>
      Made with 💖 by <a href='https://github.com/femincan'>Furkan Emin Can</a>
    </p>
    <p>
      Click <a href='https://github.com/femincan/tap-tap'>here</a> to access
      project&apos;s GitHub repository
    </p>
  </FooterContainer>
);

export { Footer };
