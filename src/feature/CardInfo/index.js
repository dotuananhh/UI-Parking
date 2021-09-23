import React, { useState } from "react";
import Box__Left from "../Dashboard/content__left";
import BoxRight from "./boxRight";
import './CardInfo.css'
export default function CardInfo(props) {
    const [display, setDisplay] = useState({
        display: false
    }
    )
    const [stateEdit, setStateEdit] = useState({
        message: "",
        pick: false,
        data: {
            id: "",
            time: "",
            status: "",
        }
    })
    const [initial, setInitial] = useState([
        {
            id: 1,
            time: 2021,
            status: "free"
        },
        {
            id: 12,
            time: 2021,
            status: "free"
        },
        {
            id: 3,
            time: 2020,
            status: "free"
        },
        {
            id: 4,
            time: 2021,
            status: 'busy'
        }

    ])
    const [rowClick, setRowClick] = useState({
        activeRow: null
    })
    const toggleActive = (index) => {
        console.log(rowClick.activeRow == index)
        if (rowClick.activeRow == index)
            return "row__active table__hover"
        else
            return "table__hover"
    }
    const onClickTable = (data, index) => {
        console.log(index)
        setStateEdit({
            ...stateEdit,
            pick: true,
            data: {
                id: data.id,
                time: data.time,
                status: data.status
            }
        })
        setRowClick({
            activeRow: index
        })
    }
    const closeBox = () => {
        setDisplay({
            display: false
        })
        setStateEdit({
            message: "",
            pick: false,
            data: {
                id: "",
                time: "",
                status: "",
            }
        })

    }
    const removeElement = () => {
        if (stateEdit.pick == false)
            alert("Chọn đối tượng")
        else {
        }

    }
    const editElement = (mess) => {
        if (stateEdit.pick == false)
            alert("Chọn đối tượng")
        else {
            setDisplay({
                display: true,
            })
            setStateEdit({
                ...stateEdit,
                message: mess
            })
        }
    }
    const addElement = (mess) => {
        setDisplay({
            display: true,
        })
        setStateEdit({
            ...stateEdit,
            message: mess
        })
    }
    const buttonClick = (mess) => {
        console.log(mess)
        if (mess == "Remove")
            removeElement()
        else {
            if (mess == "Edit")
                editElement(mess)
            else
                addElement(mess)
        }
    }
    const submitAdd = (data) => {
        console.log('Add')
        setStateEdit({
            message: "Add",
            pick: true,
            data: {
                id: "",
                time: "",
                status: "",
            }
        })
        setRowClick({
            activeRow: null
        })
    }
    const submitEdit = (data) => {
        console.log('Edit')
        setStateEdit({
            message: "Edit",
            pick: true,
            data: {
                id: "",
                time: "",
                status: "",
            }
        })
        setRowClick({
            activeRow: null
        })
    }
    const onSubmit = stateEdit.message == "Edit" ? submitEdit : submitAdd
    const verticalLine = display.display ? <div className="verticalLine"></div> : "";
    const boxLeft = display.display ? <BoxRight closeBox={closeBox} display={display} stateEdit={stateEdit} onSubmit={onSubmit} /> : "";
    return (

        <div className="box">
            <div className={display.display ? "box__left" : "box__left--alone"}>
                <div className="box__name">
                    Active Cards
                </div>
                <div className="box__table">
                    <table className="table table-bordered table-hover " >
                        <tr>
                            <th className="text-center" >Stt</th>
                            <th className="text-center">ID</th>
                            <th className="text-center">Time Create</th>
                            <th className="text-center">Status</th>
                        </tr>
                        {
                            initial.map((data, index) => {
                                return (
                                    <tr className={toggleActive(index)} onClick={() => onClickTable(data, index)}>
                                        <td className="text-center">{index + 1}</td>
                                        <td className="text-center">{data.id}</td>
                                        <td className="text-center">{data.time}</td>
                                        <td className="text-center">{data.status}</td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
                <div className="box__button">
                    <div className="submit__button--content button__ button__open" name="Edit" onClick={() => buttonClick("Edit")}>
                        Edit
                    </div>
                    <div className="submit__button--content button__ button__close" name="Remove" onClick={() => buttonClick("Remove")}>
                        Remove
                    </div>
                    <div className="submit__button--content button__ button__enter" name="Add Card" onClick={() => buttonClick("Add Card")}>
                        Add
                    </div>

                </div>
            </div>
            {verticalLine}
            {boxLeft}

        </div >
    )
}