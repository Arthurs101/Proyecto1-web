import React , {useState , setState} from 'react'
import './store.scss';
import blackPants from '../../asssets/blackone.png';
import sweater from '../../asssets/Tshirt.png';
import shirt from '../../asssets/shirt.png';
import greyPants from '../../asssets/sweaterpants.png';
import messi from '../../asssets/messi.png';
export default function StoreBanner () {
    return (
        <div className="super-wrapper">
        <div className='store-banner'>
           <video autoPlay muted loop playsInline className='promotional-video'>
                <source src= 'https://static.messi.com/wp-content/uploads/2023/03/Messi_Green_23_Messicom_T.mp4' type="video/mp4"/> 
            </video>
            <div className='store-products'>
                <p className='messi-grafiti'>
                    The Messi Store
                </p>
                <div className='messi-products'>
                    <img src= {sweater} className='product-item'></img>
                    <img src= {greyPants} className='product-item'></img>
                    <img src= {shirt} className='product-item'></img>
                    <img src= {blackPants} className='product-item'></img>
                </div>
                <img src= {messi} className='messibanner'></img>
                <div className='apps'>
                    <img className='app-icon' id='PlayStore' src= 'https://static.messi.com/wp-content/uploads/2021/07/GooglePlayApple-e1626199406718.png'></img>
                    <img className='app-icon' id='Ios'src= 'https://static.messi.com/wp-content/uploads/2021/07/GooglePlayApple-1-e1626199729352.png'></img>
                </div>
            </div>
        </div>
        <div className='messi-brand'>
            <div className='messi-description'>
                <h2 className='messi-title-description'>
                LA MARCA MESSI
                </h2>
                <p className='messi-brand-description'>
                El objetivo principal de nuestra marca es trascender los valores, la visión y el espíritu deportivo de Leo desde el campo a la ropa. La Marca Messi es un reflejo directo de las cualidades que demuestra Leo Messi dentro y fuera del campo de juego. Nos especializamos en crear ropa innovadora y de alta calidad con detalle y precisión en cada punto. Nos esforzamos por la excelencia y perfección en todo lo que hacemos
                </p>
            </div>
            <video className='store-video' controls='controls'>
                <source type='video/mp4' src="https://static.messi.com/wp-content/uploads/2023/05/The-Messi-Collection-by-The-Messi-Store.mp4?_=1"></source>
            </video>
        </div>
        </div>
    )
}