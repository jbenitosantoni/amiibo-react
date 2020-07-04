import React, {useEffect, useState} from 'react';
import axios from "axios";

export function Amiibo(props) {
    const {match: {params}} = props;
    const [amiibo, setAmiibo] = useState(0);
    let draw = [];
    useEffect(() => {
        axios.get('https://www.amiiboapi.com/api/amiibo/?tail=' + props.match.params.id).then(res => {
            setAmiibo(res.data.amiibo[0]);
        })
    }, []);
    return (
        <div>
            <h2>{amiibo.character}</h2>
            <h4>{amiibo.amiiboSeries}</h4>
            <img src={amiibo.image}/>

        </div>
    );
}
