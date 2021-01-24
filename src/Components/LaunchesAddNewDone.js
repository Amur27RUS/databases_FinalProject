import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

function LaunchesAddNewDone(){

    return(
        <div>
            <div className="piece output">
                <div>
                    <h1>Запуск успешно добавлен!</h1>
                </div>
                <br/>
                <h2>Ваш спутник долетит в полной сохранности :)</h2>
                <Link to={'/launches'}><Button variant="outlined" color="secondary">К запускам</Button></Link>
            </div>

            <div className="piece scanlines noclick"></div>
        </div>
    )
}

export default LaunchesAddNewDone;