import React, {useEffect, useState} from 'react';
import './style.scss';
import axios from "axios";

export function GameSeries(props) {
    const [amiibos, setAmiibo] = useState(0);
    let draw = [];
    useEffect(() => {
        axios.get('https://www.amiiboapi.com/api/gameseries').then(res => {
            setAmiibo(res.data.amiibo);
        })
    }, []);
    let array = [];
    for (let i = 0; i < amiibos.length; i++) {
        array.push(amiibos[i].name)
    }
    let uniq = [...new Set(array)];
    for (let i = 0; i < uniq.length; i++) {
        if (amiibos[i])
            draw.push(
                <div key={(i)} className="col-md-4 image">
                    <div className="thumbnail">
                        <div className="caption"><p>{uniq[i]}</p></div>
                    </div>
                </div>
            );
    }
    return (
        <div className="container">
            <div className="row">
                {draw}
            </div>
        </div>
    );
}
