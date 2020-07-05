import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Amiibos} from "./components/pages/amiibos/Amiibos";
import {GameSeries} from "./components/pages/gameseries/GameSeries";
import {Contact} from "./components/pages/contact/Contact";
import {Home} from "./components/pages/Home";
import {Amiibo} from "./components/pages/amiibo/Amiibo";
import {useTranslation} from "react-i18next";

function App() {
    const {t, i18n} = useTranslation();
    return (
        <Router>
            <div className="App">
                <nav className="">
                    <ul className="b-list">
                        <li className="b-list__lists">
                            <Link className="b-list__link" to="/">{t('home')}</Link>
                        </li>
                        <li className="b-list__lists">
                            <Link className="b-list__link" to="/amiibos">Amiibos</Link>
                        </li>
                        <li className="b-list__lists">
                            <Link className="b-list__link" to="/gameseries">Game Series</Link>
                        </li>
                        <li className="b-list__lists">
                            <Link className="b-list__link" to="/contact">{t('contact')}</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/amiibos">
                        <Amiibos/>
                    </Route>
                    <Route path="/gameseries">
                        <GameSeries/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="/amiibo/:id" component={Amiibo}/>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
        ;
}

export default App;
