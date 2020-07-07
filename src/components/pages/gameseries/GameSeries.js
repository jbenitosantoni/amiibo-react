import React, {useEffect, useState} from 'react';
import './style.scss';
import axios from "axios";
import {useTranslation} from "react-i18next";

export function GameSeries(props) {
    const [uniq, setUnique] = useState([]);
    const [list, setList] = useState([]);
    const {t, i18n} = useTranslation();

    useEffect(() => {
        axios.get('https://www.amiiboapi.com/api/gameseries').then(res => {
            let localUniq = [];
            for (let i = 0; i < res.data.amiibo.length; i++) {
                localUniq.push(res.data.amiibo[i].name)
            }
            localUniq = [...new Set(localUniq)].sort();
            push(localUniq);
            setUnique(localUniq);
        })
    }, []);

    function reverseSort() {
        setUnique(uniq.reverse());
        push(uniq);
    }

    function push(uniq) {
        let array = [];
        for (let i = 0; i < uniq.length; i++) {
            array.push(
                <div key={(i)} className="col-md-4 image">
                    <div className="thumbnail">
                        <div className="caption"><p>{uniq[i]}</p></div>
                    </div>
                </div>
            );
            setList(array);
        }
    }

    return (
        <div className="container">
            <button onClick={reverseSort}>{t('reverseOrder')}</button>
            <div className="row">
                {list}
            </div>
        </div>
    );
}
