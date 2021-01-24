import React, {useEffect, useState} from 'react';
import '../App.css';
import {Link, Redirect} from "react-router-dom";
import {Button} from "@material-ui/core";
import axios from "axios";

function LaunchInfo(launchId){
    const [launch, setLaunch] = useState({});
    const [redirect, setRedirect] = useState(false);

    useEffect(()=>{
        axios.post('http://localhost:8080/launch', {"id": launchId.launchId}).then(res => {
            setLaunch(res.data);
        });
    }, []);

    return(
        <div>
            <div className="piece output">
                {redirect &&
                <Redirect to={'/launchesDeleteDone'}/>
                }
                <div>
                    <h1>{'Запуск спутника ' + launch.satelliteId + '_'} <Link exact to={'/launches/edit/' + launchId.launchId}><Button variant="outlined" color="secondary">Изменить</Button></Link></h1>
                </div>
                <h2>Полная информация о запуске:</h2>

                <p>{`Номер запуска: ${launchId.launchId}`}</p>
                <p>{`Дата запуска: ${launch.date}`}</p>
                <p>{`База запуска: ${launch.baseId}`}</p>
                <p>{`Планета запуска: ${launch.planetName}`}</p>
                <p>{`Запуск в группу: ${launch.groupId}`}</p>
                <br/>
                <Button variant="outlined" color="secondary" onClick={()=>{
                    axios.post('http://localhost:8080/launch/delete', {id: launchId.launchId, date: launch.date, satelliteId: launch.satelliteId, baseId: launch.baseId, groupId: launch.groupId}).then(res => {
                        if(res.status === 200){
                            setRedirect(true);
                        }
                    })
                }}>Удалить запуск</Button>

                {/*<p><a href="http://loremgibson.com/">text from lorem gibson</a></p>*/}
            </div>

            <div className="piece scanlines noclick"></div>
        </div>
    )
}

export default LaunchInfo;