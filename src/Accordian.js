import React, {useState} from 'react';
import {BiPlusMedical} from 'react-icons/bi';
import { IconContext } from "react-icons";

export default function Accordian({title, info, category}) {
    const [showInfo, setShowInfo] = useState(true);
    return (
        <article className="article">
            <div className="accordian">
                <h4 className="accordian__headline">{title}</h4>
                <IconContext.Provider value={{className: "react-icons" }}>
                <i className={`${showInfo ? "accordian__open" : "accordian__close"}`} onClick={() => setShowInfo(!showInfo)}><BiPlusMedical /></i>
                </IconContext.Provider>
            </div>
            <div className={`${showInfo ? "unset" : "active"}`}><hr /><p className="description">{info}</p></div>
        </article>
    )
}
