import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";

function Sidebar(){

    return(
        <div className={'sideBar'}>

            <Link className="cybr-btn" exact to={'/groups'}>
            <button className="cybr-btn">
                Группы<span aria-hidden>_</span>
                <span aria-hidden className="cybr-btn__glitch">Группы_</span>
                <span aria-hidden className="cybr-btn__tag">R25</span>
            </button>
            </Link>

            <Link className="cybr-btn" exact to={'/launches'}>
            <button className="cybr-btn">
                Запуски<span aria-hidden>_</span>
                <span aria-hidden className="cybr-btn__glitch">Запуски_</span>
                <span aria-hidden className="cybr-btn__tag">R25</span>
            </button>
            </Link>

            <Link className="cybr-btn" exact to={'/bases'}>
            <button className="cybr-btn">
                Базы<span aria-hidden>_</span>
                <span aria-hidden className="cybr-btn__glitch">Базы_</span>
                <span aria-hidden className="cybr-btn__tag">R25</span>
            </button>
            </Link>

            <Link className="cybr-btn" exact to={'/sphere_info'}>
            <button className="cybr-btn">
                Sphere_INF<span aria-hidden>_</span>
                <span aria-hidden className="cybr-btn__glitch">Sphere_INF_</span>
                <span aria-hidden className="cybr-btn__tag">R25</span>
            </button>
            </Link>

        </div>
    )
}

export default Sidebar;