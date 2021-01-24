import React, {useEffect, useState} from 'react';
import '../App.css';
import {Card, Cell, Group, Header} from "@vkontakte/vkui";
import {Grid} from "@material-ui/core";
import axios from "axios";

function Groups(groupId){
    const [group, setGroup] = useState({});
    const [satellites, setSatellites] = useState([]);
    const [offlineSats, setOfflineSats] = useState([]);
    const [onlineSats, setOnlineSats] = useState([]);


    useEffect(()=>{
        axios.post('http://localhost:8080/satellites', {"id": groupId.groupId}).then(res => {
            setSatellites(res.data);
        })

        let offlineSatsCount = 0;
        satellites.map(sat =>{
            if(sat.status === 'not active'){
                offlineSatsCount++;
            }
        });
        setOfflineSats(offlineSatsCount);
        setOnlineSats(satellites.length - offlineSatsCount);

        axios.post('http://localhost:8080/group', {"id": groupId.groupId}).then(res =>{
            setGroup(res.data);
        });
    }, [satellites]);

    return(
        <div>
            <div className="piece output">
                <div>
                    <h1>{'Группа ' + groupId.groupId + '_'}</h1>
                </div>
                    <Group
                        header={<Header>{`Активные спутники: (${onlineSats})`}</Header>}>

                        <Grid container spacing={3}>
                            {satellites.map(sat =>{
                                if(sat.status === 'active') {
                                    return <Card className={'groupCell'} mode={'outline'}>{`Спутник ${sat.id} (${sat.name})`}</Card>
                                }
                            })}
                        </Grid>
                    </Group>

                    <Group
                        header={<Header>{`Спящие спутники: (${offlineSats})`}</Header>}>
                        <Grid container spacing={3}>
                            {satellites.map(sat =>{
                                if(sat.status === 'not active'){
                                    return <Card className={'groupCell'} mode={'outline'}>{`Спутник ${sat.id} (${sat.name})`}</Card>
                                }
                            })}
                        </Grid>
                    </Group>

                <br/>
                    <Group
                        header={<Header>Дополнительная информация:</Header>}>
                        <Cell>{`Максимальное кол-во спутников: ${group.maxSatAmount}`}</Cell>
                        <Cell>{`Кол-во добываемой энергии: ${group.energyAmount}`}</Cell>
                        <Cell>{`Зона работы: ${group.zone}`}</Cell>
                    </Group>


                {/*<p><a href="http://loremgibson.com/">text from lorem gibson</a></p>*/}
            </div>

            <div className="piece scanlines noclick"></div>
        </div>
    )
}

export default Groups;