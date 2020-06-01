import React, { Fragment } from 'react';
import Nav from './Nav';
import "./single-page.css"
import useFetch from '../hook/useFetch';
import Footer from './Footer';
import logo from "../Photos/logo.png"

const SingleCard = (props) => {
    let myId = props.match.params.id


    // const { varData } = useContext(Context)
    const mainData = useFetch(`https://brainsterboxapi.herokuapp.com/games/${myId}`)



    const stepDescirption = (desc) => {
        if (desc.includes("\n")) {
            let l = desc.indexOf("\n")
            let p = desc.slice(0, l);
            return(
       <div>
                <p>{p}</p>
            {desc.slice(l).split("\n").map((i,inx) => (
                <p style={{marginLeft:"20px"}} key={inx}>{i}</p>
            ))}
       </div>
            )
        } else {
            return (
            <p>{desc}</p>
            )
        }
    }




    return (
        <div className="single-page">
            {mainData && (
                <Fragment>
                        <Nav logo={logo}/>

                    <div className="page-bg" style={{
                        backgroundImage: "url(" + require(`../Photos/card-pic/${mainData.id}.png`) + ")",
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    }}>
                    </div>
                    <div className="div-info">
                        <h1>{mainData.title}</h1>
                        <div className="results">
                            <div className="div-icons">
                                <p><i className="far fa-clock"></i>Time Frame</p>
                                <span>{mainData.timeFrame}</span>
                            </div>
                            <div className="div-icons">
                                <p><i className="fas fa-user-friends"></i>Group Size</p>
                                <span>{mainData.groupSize}</span>
                            </div>
                            <div className="div-icons">
                                <p><i className="fas fa-university"></i>Facilitation Level</p>
                                <span>{mainData.level}</span>
                            </div>
                            <div className="div-icons">
                                <p><i className="fas fa-university"></i>Comfort Zone</p>
                                <span>{mainData.groupSize}</span>

                            </div>
                            <div className="div-icons">
                                <p><i className="fas fa-university"></i>Materials</p>
                                <span>{mainData.level}</span>
                            </div>
                        </div>
                        <p>{mainData.description}</p>
                        {mainData.steps.map((step, inx) => (
                            <div key={inx} className="chekor-div">
                                <h3>{step.stepDescription.length > 0 && step.step}</h3>
                                {stepDescirption(step.stepDescription)}
                            </div>
                        ))}
                    </div>

                </Fragment>
            )}

                            <Footer/>
        </div>
    )
}

export default SingleCard;