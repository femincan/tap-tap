import { styled } from 'styled-components';

const StyledLogo = styled.h1.attrs({ translate: 'no' })`
  font-family: 'Bangers', cursive;
  font-size: 5rem;
  user-select: none;
`;

const Logo = () => <StyledLogo>Tap Tap</StyledLogo>;

export { Logo };
