import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Context } from '../Context/userContext';
import { useContext } from 'react';
import Popup from './Popup';



const Filtering = () => {

    const { filterCards, isTeam,isEnergizes,
        isInovation,
        isLeader,
        isAction,
        allCards,
        isTimeFrame1,
        isTimeFrame2,
        isTimeFrame3,
        isTimeFrame4,
        isGroupSize1,
        isGroupSize2,
        isGroupSize3,
        isGroupSize4,
        popUp
    } = useContext(Context)


    return (

        <div className="filter-div">
            {popUp ? <Popup text="there are no such a game" /> :
                <Row>
                    <Col md={6} xs={12}>
                        <p>Browse to Category</p>
                        <div className='filter-category'>
                            <button onClick={filterCards} tag="category" className={isEnergizes ? "selected" : "unselected"} name="energizes">energizes<span></span></button>
                            <button onClick={filterCards} tag="category" className={isInovation ? "selected" : "unselected"} name="иновации">innovation <span></span></button>
                            <button onClick={filterCards} tag="category" className={isLeader ? "selected" : "unselected"} name="лидерство">selfleadership <span></span></button>
                            <button onClick={filterCards} tag="category" className={isAction ? "selected" : "unselected"} name="акција">action <span></span></button>
                            <button onClick={filterCards} tag="category" className={isTeam ? "selected" : "unselected"} name="тим">team <span></span></button>
                            <button onClick={filterCards} className={allCards ? "selected" : "unselected"} name="all">all <span></span></button>
                        </div>

                    </Col>
                    <Col md={3} xs={12}>
                        <p>Time in frame(minutes)</p>
                        <div className="time-in-frame">
                            <button onClick={filterCards} tag="timeFrame" className={isTimeFrame1 ? "selected" : "unselected"} name="5-30">5-30 </button>
                            <button onClick={filterCards} tag="timeFrame" className={isTimeFrame2 ? "selected" : "unselected"} name="30-60">30-60</button>
                            <button onClick={filterCards} tag="timeFrame" className={isTimeFrame3 ? "selected" : "unselected"} name="60-120">60-120</button>
                            <button onClick={filterCards} tag="timeFrame" className={isTimeFrame4 ? "selected" : "unselected"} name="120-240">120-240</button>
                        </div>


                    </Col>
                    <Col md={3} xs={12}>
                        <p>Group Size</p>
                        <div className="group-size">
                            <button onClick={filterCards} tag="groupSize" className={isGroupSize1 ? "selected" : "unselected"} name="2-10">2-10</button>
                            <button onClick={filterCards} tag="groupSize" className={isGroupSize2 ? "selected" : "unselected"} name="2-40">2-40</button>
                            <button onClick={filterCards} tag="groupSize" className={isGroupSize3 ? "selected" : "unselected"} name="3-40">3-40</button>
                            <button onClick={filterCards} tag="groupSize" className={isGroupSize4 ? "selected" : "unselected"} name="2-40+">2-40+</button>
                        </div>


                    </Col>

                </Row>
            }
        </div>
    )

}

export default Filtering;


