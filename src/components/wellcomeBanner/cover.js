import React , {useState , useEffect }from "react";
import './cover.scss';
import messiletters from '../../asssets/messi-lletres.png';
import messilogo from '../../asssets/messi-logo.png';
import messilogofont from '../../asssets/messilogo.png';
export default function FrontCover(){
    const [isZoomedOut, setIsZoomedOut] = useState(false);
        useEffect(() => {
            setIsZoomedOut(true);
        }, []);
        return (
        <div className="cover-wrapper">
            <div className={`cover`}></div>
            <img src={messiletters} className='messi-letters'></img>
            <p className="lionel-letters">LIONEL</p>
            <div className="nav-banner">
                <img src={messilogo} className="messi-logo">
                </img>
                <img src={messilogofont} className="messi-logo-font"></img>
                <div className="nav-languejes">
                    <div>CAT</div>
                    <div>ENG</div>
                    <div>ESP</div>
                </div>
            </div>
        </div>
    )
}