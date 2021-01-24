import React, {useEffect, useState} from 'react';
import '../App.css';
import {Link, Redirect} from "react-router-dom";
import axios from "axios";
import {Button, Input, MenuItem, Select} from "@material-ui/core";

function Launches(launchId){

    const [redirect, setRedirect] = useState(false);
    const [launch, setLaunch] = useState({});
    const [groups, setGroups] = useState([]);

    const [newDate, setNewDate] = useState(-1);
    const [newGroup, setNewGroup] = useState(-1);

    const after = (launchID) => <Link exact to={'/launches/' + launchID}>Подробнее</Link>;


    useEffect(()=>{
        axios.post('https://localhost:8080/launch', {id: launchId.launchId}).then(res =>{
            setLaunch(res.data);
        });

        axios.post('https://localhost:8080/groups', {"sphre_id": 1}).then(res =>{
            setGroups(res.data);
        });
    }, []);

    const handleDateSelect = (event) => {
        setNewDate(event.target.value);
    }

    const handleGroupSelect = (event) => {
        setNewGroup(event.target.value);
    }

    return(
        <div>
            {redirect &&
            <Redirect to={'/editLaunchDone'}/>}
            <div className="piece output">
                <div>
                    <h1>Редактирование запуска {launchId.launchId}_</h1>
                    <h3>Внимание! Все даты указаны в земных измерениях!</h3>
                </div>
                <h3>Важно! Спутник {launch.satelliteId} будет осуществлён с базы {launch.baseId}, которая находится на планете {launch.planetName}</h3>
                <br/>
                <h2>Редактируйте информацию:</h2>
                <p>Изменить дату запуска: (текущая дата: {launch.date})</p>
                <Input className={'inputForTerminal'} type={'date'} onChange={handleDateSelect}/>

                <br/>

                <p>Изменить группу прибытия: (текущая группа: Группа {launch.groupId})</p>
                <Select className={'inputForTerminal'} onChange={handleGroupSelect}>
                    {groups.map(group => {
                        return <MenuItem value={group.id} key={group.id}>Группа {group.id}</MenuItem>
                    })}
                </Select>
                <br/>
                <br/>
                <Button variant="outlined" color="secondary" onClick={()=>{
                    if(newDate !== -1 && newGroup !== -1){
                        axios.post('https://localhost:8080/launch/update', {id: launchId.launchId, baseId: launch.baseId, satelliteId: launch.satelliteId, date: newDate, groupId: newGroup}).then(res =>{
                            setRedirect(true);
                        })
                    }else if(newDate === -1 && newGroup !== -1){
                        axios.post('https://localhost:8080/launch/update', {id: launchId.launchId, baseId: launch.baseId, satelliteId: launch.satelliteId, groupId: newGroup, date: launch.date}).then(res =>{
                            setRedirect(true);
                        })
                    }else if(newGroup === -1 && newDate !== -1){
                        axios.post('https://localhost:8080/launch/update', {id: launchId.launchId, baseId: launch.baseId, satelliteId: launch.satelliteId, date: newDate, groupId: launch.groupId}).then(res =>{
                            setRedirect(true);
                        })
                    }else{
                        console.log('Вы не сделали изменений!');
                    }
                }}>Изменить запуск</Button>

            </div>
            <div className="piece scanlines noclick"></div>
        </div>
    )
}

export default Launches;