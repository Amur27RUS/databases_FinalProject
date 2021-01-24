import React, {useState} from 'react';
import '../App.css';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

function BasesChangeCommanderDone(baseId){
    //Можно попробовать с помощью глобальных переменных указывать, с какого командира на какого мы переписали.

    return(
        <div>
            <div className="piece output">
                <div>
                    <h1>Новый командир успешно назначен!</h1>
                </div>
            <br/>
            <h2>Командир получит уведомление в течении 1 земных суток. Желаем ему удачного командования :)</h2>
            <Link to={'/'}><Button variant="outlined" color="secondary">Отключиться</Button></Link>
            </div>

            <div className="piece scanlines noclick"></div>
        </div>
    )
}

export default BasesChangeCommanderDone;