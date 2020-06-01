import React from 'react';



const Header = () => {
    

    return (
        <div className="header">
            <p>Изработено од студентите на академијата за програмирање на <span>Brainster</span></p>
            <div className='nav-links'>
                <a href="https://www.brainster.io/business." className="obuka-button">Обука за компании</a>
                <a href="https://www.brainster.io/business." className="vraboti-button">Вработи наши студент</a>
            </div>
            <h1>Future-proof your organization</h1>
            <h5>Find out how to unlock progressin your business. Understand your current state, <br /> identify
           opportunity areas and prepare to take charge of your organization's future.</h5>

            <a href="https://brainsterquiz.typeform.com/to/kC2I9E">Take the assessment</a>



        </div>
    )
}

export default Header;