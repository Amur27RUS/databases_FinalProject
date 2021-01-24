import React, {useState} from 'react';
import '../App.css';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

function LaunchesDeleteDone(){
    //Можно попробовать с помощью глобальных переменных указывать, с какого командира на какого мы переписали.

    return(
        <div>
            <div className="piece output">
                <div>
                    <h1>Запуск успешно удалён!</h1>
                </div>
                <br/>
                <h2>Вы можете назначить новые запуски в панеле 'Запуски'.</h2>
                <Link to={'/'}><Button variant="outlined" color="secondary">Отключиться</Button></Link>
            </div>

            <div className="piece scanlines noclick"></div>
        </div>
    )
}

export default LaunchesDeleteDone;