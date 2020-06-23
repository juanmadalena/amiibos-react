import React from "react";
import { useForm } from "react-hook-form";
import "./AmiiboSearchStyle.scss"

export function AmiiboSearch (props) {
    
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => props.fnSubmit(data);

    return(
    <div className="amiiboSearch-container">
        <form onSubmit={handleSubmit(onSubmit)} className="amiiboSearch-form">
            <label htmlFor="name" className="amiiboSearch-form__item">
                <span className="amiiboSearch-form__text">Name</span>
                <input className="amiiboSearch-form__input" name="name" id="name" ref={register}/>
            </label>

            <label htmlFor="amiiboSeries" className="amiiboSearch-form__item">
                <span  className="amiiboSearch-form__text">Amiibo Serie</span>
                <input className="amiiboSearch-form__input" name="amiiboSeries" id="amiiboSeries" ref={register} />
            </label>

            <label htmlFor="character" className="amiiboSearch-form__item">
                <span className="amiiboSearch-form__text">Character</span>
                <input className="amiiboSearch-form__input" name="character" id="character" ref={register} />
            </label>

            <label htmlFor="gameSeries" className="amiiboSearch-form__item">
                <span className="amiiboSearch-form__text">Game Series</span>
                <input className="amiiboSearch-form__input" name="gameSeries" id="gameSeries" ref={register} />
            </label>

            <label htmlFor="type" className="amiiboSearch-form__item">
                <span className="amiiboSearch-form__text">Type</span>
                <select name="type" id="type" >
                    <option value=""></option>
                    <option value="figure">Figure</option>
                    <option value="card">Card</option>
                </select>
            </label>

            <input type="submit" />
        </form>
    </div>

    )
}