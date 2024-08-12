import React from 'react';
import styled from 'styled-components';
import { Bio } from '../../Data/constants';
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import EarthCanvas from '../canvas/Rh';
const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 10;
`;

const FootWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  cursor: pointer;
  font-size: 1.5rem;

  font-weight: 600;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const SocialMedia = styled.div`
display: flex;
margin-top: 1rem;
/* background-color: red; */
`

const SocialMediaIcon = styled.a`

display: inline-block;
margin: 0 1rem;
font-size: 1.5rem;
color: ${({ theme }) => theme.text_primary};
transition: color 0.2s ease-in-out;
&:hover{
    color: ${({ theme }) => theme.primary};
}



`

const FacebookRounded = styled.div`
`



function Footer() {
  return (
    <FooterContainer>
      <FootWrapper>
        <Logo>

      <EarthCanvas/>
        </Logo>
        <Nav>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Achievements">Achievements</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
        </Nav>
        <SocialMedia>
            <SocialMediaIcon href={Bio.facebook} target="_blank">
            <FaFacebook size={30}/>
        </SocialMediaIcon>

        <SocialMediaIcon href={Bio.linkedin} target="_blank">
            <FaLinkedin size={30}/>
        </SocialMediaIcon>

        <SocialMediaIcon href={Bio.instagram} target="_blank">
            <FaInstagram size={30}/>
        </SocialMediaIcon>

        <SocialMediaIcon href={Bio.github} target="_blank">
            <FaGithub size={30}/>
        </SocialMediaIcon>

        </SocialMedia>
      </FootWrapper>
    </FooterContainer>
  );
}

export default Footer;
