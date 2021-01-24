import React, {useEffect, useState} from 'react';
import '../App.css';
import axios from "axios";
import {Button, Input, MenuItem, Select} from "@material-ui/core";
import {Redirect} from "react-router-dom";

function BasesAddNewSat(baseID){

    const [groups, setGroups] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState(-1);
    const [selectedName, setSelectedName] = useState(-1);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        axios.post('https://localhost:8080/groups', {"sphre_id": 1}).then(res =>{
            setGroups(res.data);
        });
    }, []);

    const handleGroupSelect = (event) => {
        setSelectedGroup(event.target.value);
    }

    const handleNameSelect = (event) => {
        setSelectedName(event.target.value)
    }

    return(
        <div>
            {redirect &&
            <Redirect to={'/bases/AddNewSatDone'}/>
            }
            <div className="piece output">
                <div>
                    <h1>СОЗДАНИЕ СПУТНИКА_</h1>
                    <h2>Внимание! Вы собираетесь отправить запрос базе {baseID.baseId} на создание нового спутника! Проверьте номер базы для предотвращения ошибок!</h2>
                    <p>На данный момент наши технологии позволяют спутнику собирать 11 ед. энергии за цикл работы.</p>
                </div>
                <h2>Заполните все поля для создания нового спутника:</h2>

                <p>Выберите группу прибытия:</p>
                <Select className={'inputForTerminal'} onChange={handleGroupSelect}>
                    {groups.map(group => {
                        return <MenuItem value={group.id} key={group.id}>Группа {group.id}</MenuItem>
                    })}
                </Select>
                <br/>

                <p>Введите название спутника:</p>
                <Input className={'inputForTerminal'} onChange={handleNameSelect}/>

                <br/>
                <br/>

                <Button variant="outlined" color="secondary" onClick={() =>{
                    if(selectedGroup !== -1 && selectedName !== -1){
                        console.log(baseID.baseId);
                        console.log(selectedGroup);
                        console.log(selectedName);
                        axios.post('https://localhost:8080/satellite/add', {base_id: baseID.baseId, group_id: selectedGroup, energy_amount: 11, status: 'not active', name: selectedName, lifetime: 11}).then(res =>{
                            if(res.status === 200){
                                setRedirect(true);
                            }
                        })
                    }
                }}>Добавить спутник</Button>
            </div>
            <div className="piece scanlines noclick"></div>
        </div>
    )
}

export default BasesAddNewSat;