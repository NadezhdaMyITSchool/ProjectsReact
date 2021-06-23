import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding-top: 25px;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
  .container{
    max-width: 1366px;
    width: 90%;
    padding: 0 40px;
    margin: 0 auto;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;