import React, {useEffect, useState} from 'react';
import '../App.css';
import {Button, Input} from "@material-ui/core";
import axios from "axios";
import { Redirect } from "react-router-dom";

function BasesChangeCommanders(baseId){
    const [bases, setBases] = useState([{}]);
    const [newCommander, setNewCommander] = useState(-1);
    const [redirect, setRedirect] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8080/bases').then(res =>{
            setBases(res.data);
        })
    }, []);

    const changeCommanderhandler = (event) =>{
        setNewCommander(event.target.value);
    }

    return(
        <div>
            <div className="piece output">
                <div>
                    {redirect &&
                        <Redirect to={'/bases/ChangeComDone'}/>
                    }
                    <h1>Переназначение командира базы {baseId.baseId}_</h1>
                </div>
                {bases.map(base =>{

                    if(Number(base.base_id) === Number(baseId.baseId)){
                        return <h2>Текущий командир: {base.commander.name}</h2>
                    }
                })}
                <h2>Изменить на:</h2>
                <Input className={'inputForTerminal'} onChange={changeCommanderhandler}/> <Button variant="outlined" color="secondary" onClick={() =>{
                    if(newCommander !== -1 && newCommander.trim() !== ''){
                        axios.post('http://localhost:8080/newCommander', {baseId: baseId.baseId, name: newCommander}).then(res => {
                            if(res.status === 200){
                                setRedirect(true);
                            }
                        })
                    }
            }}>Изменить</Button>
            </div>

            <div className="piece scanlines noclick"></div>
        </div>
    )
}

export default BasesChangeCommanders;