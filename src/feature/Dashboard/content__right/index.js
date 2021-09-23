import React, { useState } from "react";
export default function Box__Right(props) {
    const [state, setstate] = useState({
        timeIn: '',
        timeOut: '',
        price: '',
        carNumber: '',
        cardId: ''
    })
    const onChange = (e) => {
        const target = e.target;
        const name = target.id
        const value = target.value
        setstate({
            ...state,
            [name]: value
        })
        console.log(state)
    }
    return (
        <div className="box__content box__content--right">
            <div className="box__name">
                Exit
            </div>
            <div className="form">
                <div className="form__row ">
                    <h5 className="form__title">Time In</h5>
                    <input className="form__input" type="text" id="timeIn" onChange={onChange} />
                </div>
                <div className="form__row ">
                    <h5 className="form__title">Time Out</h5>
                    <input className="form__input" type="text" id="timeOut" onChange={onChange} />
                </div>
                <div className="form__row ">
                    <h5 className="form__title">Car Number Plate</h5>
                    <input className="form__input" type="text" id="carNumber" onChange={onChange} />
                </div>
                <div className="form__row ">
                    <h5 className="form__title">Card ID</h5>
                    <input className="form__input" type="text" id="cardId" onChange={onChange} />
                </div>
                <div className="form__row ">
                    <h5 className="form__title">Price</h5>
                    <input className="form__input" type="text" id="price" onChange={onChange} />
                </div>
            </div>
            <div className="submit__button">
                <div className="submit__button--content button__open">
                    <h5 className="head__text">Open Barie</h5>
                </div>
                <div className="submit__button--content button__close">
                    <h5 className="head__text">Close Barie</h5>
                </div>
                <div className="submit__button--content button__enter">
                    <h5 className="head__text">Enter</h5>
                </div>
            </div>
        </div>
    )
}