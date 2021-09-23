import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Header.css"

export default function Header(props) {
    const [state, setstate] = useState({
        activeObject: 'dashboard'
    })
    const changeState = (id) => {
        setstate({
            activeObject: id.target.id
        })
    }
    const toogleActive = (id) => {
        if (id == state.activeObject)
            return 'button__head--active'
        else
            return 'button__head'
    }
    return (
        <div className="head" >
            <Link to="/dashboard" className={toogleActive("dashboard")} id="dashboard" onClick={(e) => changeState(e)} >
                Dashboard
            </Link>
            <Link to="/history" className={toogleActive("history")} id="history" onClick={(e) => changeState(e)}>
                History
            </Link>
            <Link to="/cardInfo" className={toogleActive("cardInfo")} id="cardInfo" onClick={(e) => changeState(e)} >
                Card Store
            </Link>
            <Link to="/map" className={toogleActive("map")} id="map" onClick={(e) => changeState(e)} >
                Map
            </Link>
        </div>
    )
}