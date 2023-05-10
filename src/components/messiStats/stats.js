import React from 'react';
import './stats.scss'
import Number from './number.js'
import Bar from './bar.js'
import logo from '../../asssets/messi-logo.png'
export default function MessiStats() {
    return (
        <div className='Messi-Stats-Wrapper'>
            <div className='Messi-background'></div>
            <h1 className='total'>TOTAL</h1>
            <p className='messi-stats-text'>MESSI STATS</p>
            <div className='messi-team'>
                <div className='team-name'>
                    BAR
                </div>
                <div className='team-name active'>
                    ARG
                </div>
                <div className='team-name'>
                    PSG
                </div>
                <div className='team-name'>
                    TOTAL
                </div>
            </div>
            <img src={logo}className='messi-logo' id='stats'></img>
            <div className='Messi-Stats-Wrapper'>
                <div className='Messi-Stats-item'>
                <Number clasName='Messi-stats-number'value={102} duration={1000}></Number>
                <Bar type={'BIG'} text={'GOLES'}></Bar>
                </div>
                <div className='Messi-Stats-item'>
                <p className='Static'>0,59</p>
                <Bar type={'SMALL'} text={'PROMEDIO'} ></Bar>
                </div>
                <div className='Messi-Stats-item SPECIAL'>
                <Bar type={'SMALL'} text={'10 DOBLETES'} isEspecial={true} ></Bar>
                <div className='STATIC-STAT'>7 <span>HAT TRICK</span></div>
                <div className='STATIC-STAT' >1 <span>REPOKER</span></div>
                </div>
                <div className='Messi-Stats-item'>
                <Number clasName='Messi-stats-number'value={54} duration={1000}></Number>
                <Bar type={'BIG'} text={'ASISTENCIAS'}></Bar>
                </div>
                <div className='Messi-Stats-item'>
                <p className='Static'> 0,31</p>
                <Bar type={'SMALL'} text={'PROMEDIO'}></Bar>
                </div>
                <div className='Messi-Stats-item'>
                <Number clasName='Messi-stats-number'value={174} duration={1000}></Number>
                <Bar type={'BIG'} text={'PARTIDOS'}></Bar>
                </div>
                <div className='Messi-Stats-item'>
                <Number clasName='Messi-stats-number'value={5} duration={1000}></Number>
                <Bar type={'BIG'} text={'TÍTULOS'}></Bar>
                </div>
            </div>
        </div>
    )
}