import React from "react"
import "./Dashboard.css"
import Box__Left from "./content__left"
import Box__Right from "./content__right"
export default function Dashboard(props) {

    return (
        <div className="box">
            <Box__Left />
            <div className="verticalLine"></div>
            <Box__Right />
        </div>
    )
}