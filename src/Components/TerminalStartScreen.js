import React from 'react';
import '../App.css';

function TerminalStartScreen(){

    return(
        <div>
            <div className="piece output">
                <div>
                    <h1 className={'energyDisplay'}>{'Питание подключено.'}</h1>
                </div>
                <h2>Нажмите на кнопки слева, чтобы приступить к работе...</h2>

            </div>

            <div className="piece scanlines noclick"></div>
        </div>
    )
}

export default TerminalStartScreen;