import React from 'react';
import './style.scss';
import {useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";

export function Contact() {
    const {register, handleSubmit, watch, errors} = useForm();
    const onSubmit = data => console.log(data);
    const {t, i18n} = useTranslation();
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div><input name="firstName" id="firstName" placeholder={t('name')}
                        ref={register({required: true})}/>
            </div>
            {errors.firstName && errors.firstName.type === "required" &&
            <span className="error float-left">{t('required')}</span>}
            <div>
                <input name="surName" id="surName" placeholder={t('surname')} ref={register({required: true})}/>
            </div>
            {errors.surName && errors.surName.type === "required" &&
            <span className="error float-left">{t('required')}</span>}
            <div>
                <input name="email" id="email" placeholder="Email" ref={register({
                    required: true,
                    pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
                })}/>
            </div>
            {errors.email && errors.email.type === "required" &&
            <span className="error float-left">{t('required')}</span>}
            {errors.email && errors.email.type === "pattern" &&
            <span className="error float-left">{t('validEmail')}</span>}
            <div>
                <textarea name="message" id="message" placeholder={t('message')} ref={register({required: true})}/>
            </div>
            {errors.message && errors.message.type === "required" &&
            <span className="error float-left">{t('required')}</span>}
            <div>
                <input type="submit" value={t('submit')}/>
            </div>
        </form>
    );
}
