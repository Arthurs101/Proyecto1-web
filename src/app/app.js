import React from "react";
import './app.scss'
import StoreBanner from "../components/storeBanner/store";
import CountDownClock from "../components/countDown/clock";
import FrontCover from "../components/wellcomeBanner/cover";
import MessiStats from "../components/messiStats/stats";
import Bottom from "../components/footers/Bottom";
import News from '../components/newsBanner/news';
export default function APP(){
    return (
        <div className="messi-page-react">
            <FrontCover></FrontCover>
            <CountDownClock targetDate='December 31, 2023'></CountDownClock> 
            <News></News>
            <StoreBanner></StoreBanner>
            <MessiStats></MessiStats>
            <Bottom></Bottom>
        </div>
    );
} 