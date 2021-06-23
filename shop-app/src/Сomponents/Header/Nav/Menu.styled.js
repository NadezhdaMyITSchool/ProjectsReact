import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  z-index:9;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;    
    text-align: center;
  }

  a {
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: 10px 0;
    font-weight: bold;
    display: inline-block;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    position: relative;
    font-family: ${({ theme }) => theme.secondFont};
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
    }

    &:hover {
     
        &::after {
          width:100%;
        }
    }
    
    &::after {
      background-color: ${({ theme }) => theme.primaryDark};
      opacity: 0.5;
      bottom: 0;
      content: "";
      display: block;
      height: 1px;
      margin: auto 0;
      position: absolute;
      top: 0;
      transition: width 0.5s;
      width: 0;
      left: -3px;
    }
  }
`;