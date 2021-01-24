import React, {useEffect, useState} from 'react';
import '../App.css';
import {Cell} from "@vkontakte/vkui";
import {Link} from "react-router-dom";
import {Grid} from "@material-ui/core";
import axios from "axios";

function Groups(){
    const [groups, setGroups] = useState([]);

    useEffect(()=>{
        axios.post('https://dyson3.herokuapp.com/groups', {"sphre_id": 1}).then(res =>{
            setGroups(res.data);
        });

    }, [])

    return(
        <div>
            <div className="piece output">
                <div>
                    <h1>Группы_</h1>
                </div>
                <div className={'groupsDiv'}>

                    <Grid container spacing={3}>
                {groups.map(group => {
                    return <Link className={'link'} exact to={'/groups/' + group.id}><Cell className={'groupCell'} id={group.groupId} key={group.groupId}
                                 description={'Зона: ' + group.zone}
                                 after={'Вырабатывает энергии: ' + group.energyAmount}>ГРУППА {group.id}
                           </Cell></Link>
                })}
                    </Grid>

                </div>

                {/*<p><a href="http://loremgibson.com/">text from lorem gibson</a></p>*/}
            </div>

            <div className="piece scanlines noclick"></div>
        </div>
    )
}

export default Groups;