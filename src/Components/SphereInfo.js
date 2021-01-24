import React, {useEffect, useState} from 'react';
import '../App.css';
import axios from "axios";

function SphereInfo(){
    const [sphereInfo, setSphereInfo] = useState({});

    useEffect(() => {
        axios.get('https://localhost:8080/sphere').then(res => {
            setSphereInfo(res.data);
        });
    }, []);

    return(
        <div>
            <div className="piece output">
                <div>
                    <h1>____Sphere_INF0____</h1>
                </div>
                <br/>
                <h1 className={'energyDisplay'}>{`3N3rGy: ${sphereInfo.energyAmount}`}</h1>
                <div className="energy"><div className="bolt"/><div className="bolt"/></div>
                <h1 className={'energyDisplay'}>{`Syst3m: ${sphereInfo.system}`}</h1>
                <h1 className={'energyDisplay'}>{`Nam3: ${sphereInfo.name}`}</h1>


            </div>
            <div className="piece scanlines noclick"></div>
        </div>
    )
}

export default SphereInfo;