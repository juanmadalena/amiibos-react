import React from 'react';
import mario from '../../img/mario.png';
import './Home.scss'


export function Home () {
    return (

        <div className="c-home">
            <div className="c-home__title">
        <h1 className="b-text-primary d-flex justify-content-center">WELCOME TO <br/>AMIIBO APP</h1>
            </div>
        <img src={mario} alt="/" className="c-home__img" />
        </div>
    );
}

