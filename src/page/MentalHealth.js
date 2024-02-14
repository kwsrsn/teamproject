import React from 'react';
import './style.css';
import {useNavigate} from 'react-router-dom';
import useState from 'react';

const Mentalhealth = props => {
    const navigate = useNavigate();

    const navigateTo9Q = () => {
    navigate('/nineq');
    };
    const navigateToHappy = () => {
        navigate('/happy');
    };
    const navigateToStress = () => {
        navigate('/stress');
    };

    return (
        <div className='mentalhealthbg'>Mentalhealth
        <div className='sizepage' style={{height:"100vh"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
            
                <div>
                    <div className='mentalhealth'> 
                        <br/><br/>แบบประเมินสุขภาพจิต<br/>
                    </div> 
                    <div className='topic'>
                        <div className='textform'>
                            <div className='topicbox'  onClick={navigateTo9Q}>
                                <p><span>แบบประเมินโรคซึมเศร้าด้วย 9 คำถาม (9Q)</span></p>
                            </div>
                            <div className='topicbox' onClick={navigateToHappy}>
                                <p><span>แบบประเมินความสุขคนไทย</span></p>
                            </div>
                            <div className='topicbox' onClick={navigateToStress}>
                                <p><span>แบบวัดความเครียด กรมสุขภาพจิต (SPST - 20)</span></p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Mentalhealth