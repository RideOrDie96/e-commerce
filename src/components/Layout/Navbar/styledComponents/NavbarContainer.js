import styled from 'styled-components';

export const NavbarContainer = styled.div`
  &.container {
    width: 100%;
    position: fixed;
    padding: 0.5em;
    z-index: 1301;
  }
  &.content {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.7) 100%
    );
    display: flex;
    align-items: center;
    z-index: 1301;
    overflow: hidden;
    height: 80px;
  }
`;
