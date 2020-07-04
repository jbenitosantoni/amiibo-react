import React from 'react';
import './style.scss';
import {useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";

export function Contact(props) {
    const {register, handleSubmit, watch, errors} = useForm();
    const onSubmit = data => console.log(data);
    const {t, i18n} = useTranslation();
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="firstName" id="firstName" placeholder={t('name')} ref={register({required: true})}/><br/>
            <input name="surName" id="surName" placeholder={t('surname')} ref={register({required: true})}/><br/>
            <input name="email" placeholder="Email" ref={register({
                required: true,
                pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
            })}/><br/>
            <textarea name="message" id="message" placeholder={t('message')} ref={register({required: true})}/><br/>
            <input type="submit" value={t('submit')}/>
        </form>
    );
}
