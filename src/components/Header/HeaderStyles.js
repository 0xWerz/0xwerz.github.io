import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: fr;
  grid-column-gap: 0rem;
  padding: 0rem;
  padding-top: 4rem;
  padding-left: 16rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    padding-left: 0rem;

    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;

  
  display: flex;
  margin-left: -19rem;
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-content: center;
    margin-left: 0rem;
    grid-area: 2 / 2 / 3 / 5;
  }
`;
export const Div3 = styled.div`
  display: flex;
  padding-left: 29rem;
  @media ${(props) => props.theme.breakpoints.sm} {
		align-items: baseline;
    padding-left: 0rem;

	}
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 55px;
  
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
    &:hover {
      color: #ffff
      opacity: 1;
      cursor: pointer;
      padding: 0.25em;
      font-size: 2.1;
      
    }
    @media ${(props) => props.theme.breakpoints.sm} {
      padding: 0.5rem;
    }
  `;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 

export const SocialIcons = styled.a`
transition: 0.3s ease;
color: white;
border-radius: 50px;
  padding: 8px;
&:hover {
    transform: scale(1.2);
    
  }
`