import React from 'react';
import './Menu.scss'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import logo from '../../../shared/img/logo.png'

export function Menu () {

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
            <div className="c-menu__otros">
            <LinkTo className="c-menu__link"><Link to="/amiibos">Amiibos</Link></LinkTo>
            <LinkTo className="c-menu__link"><Link to="/gameseries">Game Series</Link></LinkTo>
            </div>

        </nav>
    );
}

