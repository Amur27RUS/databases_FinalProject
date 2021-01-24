import React, {useEffect, useState} from 'react';
import '../App.css';
import {Link} from "react-router-dom";
import {Cell} from "@vkontakte/vkui";
import {Button} from "@material-ui/core";
import axios from "axios";

function Launches(){
    const [launches, setLaunches] = useState([]);


    const after = (launchID) => <Link exact to={'/launches/' + launchID}>Подробнее</Link>;

    useEffect(()=>{
        // let launchId = new URLSearchParams();
        // launchId.append('id', '1');
        axios.get('http://localhost:8080/launches').then(res =>{
            setLaunches(res.data);
        })
    }, []);

    return(
        <div>
            <div className="piece output">
                <div>
                    <h1>ЗАПУСКИ_ <Link to={'/addNewLaunch'}><Button variant="outlined" color="secondary">Добавить запуск</Button></Link></h1>
                    <h3>Внимание! Все даты указаны в земных измерениях!</h3>
                </div>
                <h2>Ближайшие запуски:</h2>

                {launches.map(launch => {
                    return <Cell className={'groupCell'} id={launch.id} key={launch.id}
                                 description={'Дата : ' + launch.date} after={after(launch.id)}
                                 >Спутник {launch.satelliteId}
                    </Cell>
                })}

            </div>
            <div className="piece scanlines noclick"></div>
        </div>
    )
}

export default Launches;