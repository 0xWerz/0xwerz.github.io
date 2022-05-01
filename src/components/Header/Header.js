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
        <meta name="description" content="Posts about Cybersecurity, and more"></meta>

        <meta name="author" content="Werz"></meta>

        <meta property="og:type" content="website"></meta>
        <meta property="og:locale" content="en_US"></meta>
        <meta property="og:site_name" content="Werz | Cybersecurity"></meta>
        <meta property="og:title" content="         Werz      Cybersecurity"></meta>
        <meta property="og:url" content="https://0xwerz.github.io/"></meta>

        <meta name="robots" content="index, follow"></meta>


        <meta property="og:description" content="Posts about Cybersecurity, And more"></meta>
        <meta property="og:image" content="https://0xwerz.github.io/images/bmo.jpg"></meta>
        <link rel="canonical" href="https://0xwerz.github.io/"></link>
      </Head>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
        </a>
      </Link>
    </Div1>
    <Div2>
    <li>
        <Link href="/">
          <NavLink>./Home</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/ctf">
          <NavLink>./CTF's</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>./projects</NavLink>
        </Link>
      </li>
        
      <li>
        <Link href="#whoami">
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
