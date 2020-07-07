import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Gallery} from "./components/gallery/Gallery";
import {SearchBar} from "./components/searchbar/Searchbar";

export function Amiibos() {
    const [amiibos, setAmiibo] = useState([]);
    const [filteredAmiibos, setFilteredAmiibos] = useState([]);
    useEffect(() => {
        axios.get('https://www.amiiboapi.com/api/amiibo/').then(res => {
            setAmiibo(res.data.amiibo);
            setFilteredAmiibos(res.data.amiibo);
        })
    }, []);

    const filterAmiibos = (filterValues) => {
        let arrayAmiibos = [];

        let consulta = [];

        if (filterValues.amiiboName === "") {
            consulta.push('filterValues.amiiboName === ""');
        } else {
            consulta.push("amiibos[i].character === filterValues.amiiboName");
        }
        if (filterValues.gameSeries === "") {
            consulta.push('filterValues.gameSeries === ""');
        } else {
            consulta.push("amiibos[i].gameSeries === filterValues.gameSeries");
        }
        if (filterValues.type === "") {
            consulta.push('filterValues.type === ""');
        } else {
            consulta.push("amiibos[i].type === filterValues.type");
        }

        consulta = consulta.join(" && ");

        for (let i = 0; i < amiibos.length; i++) {
            if (eval(consulta)) {
                arrayAmiibos.push(amiibos[i]);
            }
        }

        setFilteredAmiibos(arrayAmiibos);
    }

    return (
        <div>
            <SearchBar props={amiibos} fnSubmit={filterAmiibos}/><br/>
            <Gallery props={filteredAmiibos}/>
        </div>
    );
}
