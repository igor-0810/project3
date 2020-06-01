import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';


const Card = (props) => {
    
    return (
        <Link className="link-to-card" to={`/game${props.cardId}`}  >
            <div className='single-card'>
                <div className="picture-div" style={{
                    backgroundImage: "url(" + require(`../Photos/card-pic/${props.image}.png`) + ")",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}></div>
                <div className="card-content">
                    <p>{props.naslov}</p>
                    <span>Категорија:</span> <span className='colored-span'>{props.categorija}</span>
                    <div className="icon-card">
                        <img src={props.icona} alt="" />
                    </div>
                    <p className="vreme-traenje"><i className="far fa-clock"></i>Време траење</p>
                    <span className="span-vreme">{props.vremeTraenje}</span>
                </div>


            </div>
        </Link>
    )
}

export default Card;