import React from 'react';
import '../App.css';
import {Route} from "react-router-dom";
import Groups from "./Groups";
import Bases from "./Bases";
import Launches from "./Launches";
import SphereInfo from "./SphereInfo";
import GroupInfo from "./GroupInfo";
import LaunchInfo from "./LaunchInfo";
import LaunchEdit from "./LaunchEdit";
import LaunchesAddNew from "./LaunchesAddNew";
import TerminalStartScreen from "./TerminalStartScreen";
import BasesChangeCommanders from "./BasesChangeCommanders";
import BasesChangeCommanderDone from "./BasesChangeCommanderDone";
import BasesAddNewSat from "./BasesAddNewSat";
import BasesAddNewSatDone from "./BasesAddNewSatDone";
import LaunchesDeleteDone from "./LaunchesDeleteDone";
import LaunchEditDone from "./LaunchEditDone";
import LaunchesAddNewDone from "./LaunchesAddNewDone";

function Monitor(){
    return(
        <div className={'monitor'}>
        <div className="frame">

            <Route path={'/'} exact component={TerminalStartScreen}/>
            <Route path={'/groups'} exact component={Groups}/>
            <Route path={'/groups/:id'} render={
                ({match}) =>{
                    const {id} = match.params;
                    return <GroupInfo groupId={id}/>
            }}/>

            <Route path={'/bases'} exact component={Bases}/>
            <Route path={'/bases/changeCommanders/:id'} exact render={
                ({match}) =>{
                    const {id} = match.params;
                    return <BasesChangeCommanders baseId={id}/>
                }}/>
            <Route path={'/bases/changeComDone'} exact component={BasesChangeCommanderDone}/>
            <Route path={'/bases/addNewSat/:id'} exact render={
                ({match}) =>{
                    const {id} = match.params;
                    return <BasesAddNewSat baseId={id}/>
            }}/>
            <Route path={'/bases/AddNewSatDone'} exact component={BasesAddNewSatDone}/>

            <Route path={'/launches'} exact component={Launches}/>
            <Route path={'/launches/:id'} exact render={
                ({match}) =>{
                    const {id} = match.params;
                    return <LaunchInfo launchId={id}/>
                }}/>
            <Route path={'/launches/edit/:id'} exact render={
                ({match}) =>{
                    const {id} = match.params;
                    return <LaunchEdit launchId={id}/>
                }}/>
            <Route path={'/launchesDeleteDone'} exact component={LaunchesDeleteDone}/>
            <Route path={'/editLaunchDone'} exact component={LaunchEditDone}/>
            <Route path={'/addNewLaunch'} exact component={LaunchesAddNew}/>
            <Route path={'/launchesAddNewDone'} exact component={LaunchesAddNewDone}/>

            <Route path={'/sphere_info'} exact component={SphereInfo}/>

        </div>
        </div>
    )
}

export default Monitor;