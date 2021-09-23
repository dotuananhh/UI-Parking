import React, { useState } from "react";

export default function BoxRight(props) {

    return (
        < div className="box__right" >
            <div className="box__name box__">
                <div className="tittle">{props.stateEdit.message}</div>
                <div className="button_close" onClick={props.closeBox}>X</div>
            </div>
            <div className="form form__create">
                <div className="form__row ">
                    <h5 className="form__title"  >ID</h5>
                    <input className="form__input" type="text" id="timeIn" value={props.stateEdit.data.id} />
                </div>
                <div className="form__row ">
                    <h5 className="form__title" >Time Create</h5>
                    <input className="form__input" type="text" id="carNumber" value={props.stateEdit.data.time} />
                </div>
                <div className="form__row ">
                    <h5 className="form__title">Status</h5>
                    <input className="form__input" type="text" id="cardId" value={props.stateEdit.data.status} />
                </div>
            </div>
            <div className="box__button">
                <div className="submit__button--content button__ button__open" name={props.stateEdit.message} onClick={props.onSubmit}>
                    {props.stateEdit.message}
                </div>
            </div>
        </div >
    )


}