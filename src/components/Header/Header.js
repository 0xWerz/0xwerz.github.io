import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillTwitterSquare, AiFillShopping } from 'react-icons/ai';
import Head from 'next/head'
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const prefix = '/';

const Header = () =>  (

  <Container>
      <Head>
        <title>Werz | Cybersecurity</title>
        <meta content="Werz         Cybersecurity content, And more" property="og:title" />
        <meta content="Posts about Cybersecurity, Pentesting, CTF writeups, and more" property="og:description" />
        <meta content="https://0xwerz.github.io/" property="og:url" />
        <meta content="https://0xwerz.github.io/images/icon.jpg" property="og:image" />
        <meta content="#2f186e" data-react-helmet="true" name="theme-color" />
      </Head>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
        </a>
      </Link>
    </Div1>
    <Div2>
    <li>
        <Link href="/" >
          <NavLink>./Home</NavLink>
        </Link>
      </li>
      <li>
        <a href="ctf" as={'/ctf'} >
          <NavLink>./CTF's</NavLink>
        </a>
      </li>
      <li>
        <Link href="https://0xwerz.github.io/#projects" passHref >
          <NavLink>./projects</NavLink>
        </Link>
      </li>
        
      <li>
        <Link href="https://0xwerz.github.io/#whoami" passHref>
          <NavLink>./whoami</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/0xWerz">
          <AiFillGithub size="3rem" />
        </SocialIcons>

        <SocialIcons href="https://twitter.com/cyberwerz">
          
          <AiFillTwitterSquare size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.buymeacoffee.com/werz">
          <AiFillShopping size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
