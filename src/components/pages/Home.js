import React from 'react';
import {useTranslation} from "react-i18next";

export function Home(props) {
    const {t, i18n} = useTranslation();
    return (
        <div>
            <h1>{t('homeh1')}</h1>
            <img src={"images/163594.png"} alt="Amiibo Zelda"/>
        </div>
    );
}
