import React from "react";
import './app.scss'
import StoreBanner from "../components/storeBanner/store";
import CountDownClock from "../components/countDown/clock";
import FrontCover from "../components/wellcomeBanner/cover";
import MessiStats from "../components/messiStats/stats";
import Bottom from "../components/footers/Bottom";
import News from '../components/newsBanner/news';
const today = new Date();
const threeDaysFromNow = new Date(today.getTime() + (3 * 24 * 60 * 60 * 1000));

export default function APP(){
    return (
        <div className="messi-page-react">
            <FrontCover></FrontCover>
            <CountDownClock targetDate={threeDaysFromNow}></CountDownClock> 
            <News></News>
            <StoreBanner></StoreBanner>
            <MessiStats></MessiStats>
            <Bottom></Bottom>
        </div>
    );
} 