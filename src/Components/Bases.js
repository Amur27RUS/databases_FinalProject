import React, {useState} from 'react';
import '../App.css';
import {Grid} from "@material-ui/core";
import {Link} from "react-router-dom";
import {Cell, Group, Header} from "@vkontakte/vkui";
import axios from "axios";

function Bases(){
    const [planets, setPlanets] = useState([])

    const changeCommander = (baseId) => <><Link to={'/bases/changeCommanders/' + baseId}>Сменить командира</Link><br/><br/><Link to={'/bases/addNewSat/' + baseId}>Добавить спутник</Link></>;

    useState(async ()=>{
        await axios.get('http://localhost:8080/planets').then(res => {
            setPlanets(res.data);
        })
    }, []);

    return(
        <div>
            <div className="piece output">
                <div>
                    <h1>БАЗЫ_</h1>
                </div>
                    {planets.map(planet =>{
                        return <div><Group
                            header={<Header>{`Планета ${planet.name}: (${planet.distanceToTheSun} световых секунд до Солнца)`}</Header>}>

                            <Grid container spacing={3}>
                                {planet.bases.map(base =>{
                                        return <Cell className={'baseCell'}
                                                     mode={'outline'} description={'Командир: ' + base.commander.name} after={changeCommander(base.base_id)}>
                                            {`База ${base.name} (id: ${base.base_id})`}
                                        </Cell>
                                    })}
                            </Grid>
                        </Group>
                            <br/>
                            <br/>
                        </div>
                    })}
            </div>
            <div className="piece scanlines noclick"></div>
        </div>
    )
}

export default Bases;