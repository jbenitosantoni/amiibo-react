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
        for (let i = 0; i < amiibos.length; i++) {
            if (amiibos[i].character === filterValues.amiiboName && amiibos[i].type === filterValues.type && amiibos[i].gameSeries === filterValues.gameSeries) {
                arrayAmiibos.push(amiibos[i]);
            }
            if (amiibos[i].character === filterValues.amiiboName && amiibos[i].gameSeries === filterValues.gameSeries && filterValues.type === "") {
                arrayAmiibos.push(amiibos[i]);
            }
            if (amiibos[i].character === filterValues.amiiboName && filterValues.gameSeries === "" && amiibos[i].type === filterValues.type) {
                arrayAmiibos.push(amiibos[i]);
            }
            if (filterValues.amiiboName === "" && amiibos[i].gameSeries === filterValues.gameSeries && filterValues.type === "") {
                arrayAmiibos.push(amiibos[i]);
            }
            if (filterValues.amiiboName === "" && filterValues.gameSeries === "" && amiibos[i].type === filterValues.type) {
                arrayAmiibos.push(amiibos[i]);
            }
            if (filterValues.gameSeries === amiibos[i].gameSeries && filterValues.amiiboName === "" && filterValues.type === "") {
                arrayAmiibos.push(amiibos[i]);
            }
            if (filterValues.gameSeries === amiibos[i].gameSeries && filterValues.amiiboName === "" && filterValues.type === amiibos[i].type) {
                arrayAmiibos.push(amiibos[i]);
            }
            if (filterValues.type === amiibos[i].type && filterValues.amiiboName === amiibos[i].character && filterValues.gameSeries === "") {
                arrayAmiibos.push(amiibos[i]);
            }
            if (filterValues.type === amiibos[i].type && filterValues.amiiboName === "" && filterValues.gameSeries === amiibos[i].gameSeries) {
                arrayAmiibos.push(amiibos[i]);
            }
            if (filterValues.character === amiibos[i].amiiboName && filterValues.gameSeries === "" && filterValues.type === "") {
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
