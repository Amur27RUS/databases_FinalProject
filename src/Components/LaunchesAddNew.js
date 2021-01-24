import React, {useEffect, useState} from 'react';
import '../App.css';
import {Button, MenuItem, Select} from "@material-ui/core";
import {Input} from "@vkontakte/vkui";
import axios from "axios";

function LaunchesAddNew(){
    const[basesAndSats, setBasesAndSats] = useState([]);
    const[groups, setGroups] = useState([]);

    const[selectedBase, setSelectedBase] = useState(-1);
    const[selectedSatellite, setSelectedSatellite] = useState(-1);
    const[selectedDate, setSelectedDate] = useState(-1);
    const[selectedGroup, setSelectedGroup] = useState(-1);

    const now = new Date().toLocaleDateString();
    const today = new Date(now);

    useEffect(()=>{
        axios.get('https://dyson3.herokuapp.com/bases/freeSatt').then(res =>{
            setBasesAndSats(res.data);
        })

        axios.post('https://dyson3.herokuapp.com/groups', {"sphre_id": 1}).then(res =>{
            setGroups(res.data);
        });
    }, []);

    const handleBaseSelect = (event) => {
        setSelectedBase(event.target.value);
        setSelectedSatellite(-1);
    }

    const handleSatelliteSelect = (event) => {
        setSelectedSatellite(event.target.value);
    }

    const handleDateSelect = (event) => {
        setSelectedDate(event.target.value);
        console.log(event.target.value);
    }

    const handleGroupSelect = (event) => {
        setSelectedGroup(event.target.value);
    }

    return(
        <div>
            <div className="piece output">
                <div>
                    <h1>Добавление нового запуска:</h1>
                    <h3>Внимание! Все даты указывайте в земных измерениях!</h3>
                </div>
                <p>Выберите базу запуска:</p>
                <Select className={'inputForTerminal'} onChange={handleBaseSelect}>
                    {basesAndSats.map(base => {
                        return <MenuItem value={base.base_id} key={base.base_id}>База {base.base_id}</MenuItem>
                    })}
                </Select>

                <br/>


                <p>Выберите спутник:</p>

                    {basesAndSats.map(base => {
                        if (base.base_id === selectedBase) {
                            return <Select className={'inputForTerminal'} onChange={handleSatelliteSelect}>
                            {base.satellites.map(sat => {
                                console.log(sat);
                                return <MenuItem value={sat} key={sat}>Спутник {sat}</MenuItem>
                            })}
                            </Select>
                        }
                    })}

                <p>Выберите дату запуска:</p>
                <Input type={'date'} min={today} onChange={handleDateSelect}/>
                <br/>

                <p>Выберите группу, куда прибудет спутник:</p>
                <Select className={'inputForTerminal'} onChange={handleGroupSelect}>
                    {groups.map(group => {
                        return <MenuItem value={group.id} key={group.id}>Группа {group.id}</MenuItem>
                    })}
                </Select>
                <br/>
                <br/>
                <Button variant="outlined" color="secondary" onClick={()=>{
                    if(selectedBase !== -1 && selectedSatellite !== -1 && selectedDate !== -1 && selectedGroup !== -1){
                        axios.post('https://dyson3.herokuapp.com/launch/add', {date: selectedDate, satelliteId: selectedSatellite, baseId: selectedBase, groupId: selectedGroup}).then(res =>{
                            console.log(res);
                        })
                    }
                }}>Добавить запуск</Button>

            </div>

            <div className="piece scanlines noclick"></div>
        </div>
    )
}

export default LaunchesAddNew;