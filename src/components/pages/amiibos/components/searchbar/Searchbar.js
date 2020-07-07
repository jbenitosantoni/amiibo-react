import React from 'react';
import {useForm} from 'react-hook-form';
import {useTranslation} from "react-i18next";

export function SearchBar(props) {
    let gameSeries = [];
    let options = [];
    const {t, i18n} = useTranslation();
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => props.fnSubmit(data);
    console.log(errors);

    for (let i = 0; i < props.props.length; i++) {
        gameSeries.push(props.props[i].gameSeries);
    }

    gameSeries = [...new Set(gameSeries)];

    for (let i = 0; i < gameSeries.length; i++) {
        options.push(<option value={gameSeries[i]}>{gameSeries[i]}</option>);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input type="text" placeholder={t('amiiboName')} name="amiiboName" ref={register}/>
            </div>
            <div>
                <select name="gameSeries" ref={register}>
                    <option value=""></option>
                    {options}
                </select>
            </div>
            <div>
                <select name="type" ref={register}>
                    <option value=""></option>
                    <option value="Figure">Figure</option>
                    <option value="Card">Card</option>
                </select>
            </div>
            <div>
                <input type="submit" value={t('submit')}/>
            </div>
        </form>
    );
}
