import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Gallery} from "./components/Gallery";

export function Amiibos() {
    const [amiibos, setAmiibo] = useState(0);
    useEffect(() => {
        axios.get('https://www.amiiboapi.com/api/amiibo/').then(res => {
            setAmiibo(res.data.amiibo);
        })
    }, []);
    return (
        <Gallery props={amiibos}/>
    );
}
