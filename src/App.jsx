import React, { useState } from 'react';
import './App.scss';
import { Amiibos } from "./pages/Amiibos/Amiibos";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GameSeries } from "./pages/GameSeries/GameSeries";
import { Menu } from './shared/components/Menu/Menu';
import { Home } from "./pages/Home/Home";
import { AmiibosContext } from "./shared/contexts/AmiibosContext";
import { LanguageContext } from "./shared/contexts/LanguageContext";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./shared/styles/globalStyles";
import { darkTheme, lightTheme } from "./shared/styles/themes";
import ToggleTheme from "./shared/components/ToogleTheme/ToogleTheme";
import { useDarkMode } from "./shared/hooks/useDarkMode";
import { AmiiboDetail } from "./pages/Amiibos/AmiiboDetail/AmiiboDetail";
import { MenuHome } from './shared/components/MenuHome/MenuHome';
import { NavHome } from './shared/components/NavHome/NavHome';

function App () {
    const [amiibos, setAmiibos] = useState([]);
    const [language, setLanguage] = useState('es');

    /* Theme
       ****************************************************************************/
    const [theme, themeToggler] = useDarkMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <Router>
            <LanguageContext.Provider value={language}>
                <ThemeProvider theme={themeMode}>
                    <GlobalStyles/>
                    <ToggleTheme theme={theme} toggleTheme={themeToggler}/>

                    <div>

                        <AmiibosContext.Provider value={[amiibos, setAmiibos]}>
                          
                            <Switch>
                                <Route path="/amiibos/:tail">
                                    <AmiiboDetail/>
                                </Route>
                                <Route path="/amiibos">
                                <Menu/>
                                    <Amiibos/>
                                </Route>
                                <Route path="/gameseries">
                                <Menu/>
                                    <GameSeries/>
                                </Route>
                                <Route path="/">
                                <MenuHome/>
                                    <Home/>
                                    <NavHome/>
                                </Route>
                            </Switch>
                        
                        </AmiibosContext.Provider>
                    </div>
                </ThemeProvider>
            </LanguageContext.Provider>
        </Router>
    );
}

export default App;
