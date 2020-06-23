import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import logo from '../../../shared/img/logo.png'

export function MenuHome () {

    const LinkTo = styled.span`
  background-color: ${({ theme }) => theme.backgroundOpacity};
  }`;

    return (
        <nav className="c-menu">
            <div className="c-menu__logo">
            <LinkTo className="c-menu__logo"><Link to="/"> 
            <img src={logo} alt="/"/>
            </Link></LinkTo>
            </div>
        </nav>
    );
}

