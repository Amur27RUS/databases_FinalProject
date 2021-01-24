import React, {useState} from 'react';
import '../App.css';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

function BasesAddNewSatDone(){
    //Можно попробовать с помощью глобальных переменных указывать, с какого командира на какого мы переписали.

    return(
        <div>
            <div className="piece output">
                <div>
                    <h1>Запрос на создание спутника отправлен!</h1>
                </div>
                <br/>
                <h2>Если необходимо, вы можете назначить запуск для этого спутника на ближайшее число.</h2>
                <Link to={'/'}><Button variant="outlined" color="secondary">Отключиться</Button></Link>
            </div>

            <div className="piece scanlines noclick"></div>
        </div>
    )
}

export default BasesAddNewSatDone;