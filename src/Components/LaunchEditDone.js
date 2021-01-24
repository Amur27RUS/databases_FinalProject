import React, {useState} from 'react';
import '../App.css';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

function LaunchEditDone(){

    return(
        <div>
            <div className="piece output">
                <div>
                    <h1>Запуск успешно изменён!</h1>
                </div>
                <br/>
                <h2>Удачных полётов!</h2>
                <Link to={'/launches'}><Button variant="outlined" color="secondary">К запускам</Button></Link>
            </div>

            <div className="piece scanlines noclick"></div>
        </div>
    )
}

export default LaunchEditDone;