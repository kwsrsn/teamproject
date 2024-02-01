import React from 'react';
import './style.css';
import {useNavigate} from 'react-router-dom';
import useState from 'react';

const Mentalhealth = props => {
    const navigate = useNavigate();

    const navigateTo9Q = () => {
    navigate('/nineq');
    };
    const navigateTo8Q = () => {
        navigate('/eightq');
    };
    const navigateToHappy = () => {
        navigate('/happy');
    };
    const navigateToStress = () => {
        navigate('/stress');
    };

    return (
        <div className='sizepage' >
            <div style={{display: "flex", flexDirection: "column"}}>
            
                <div>
                    <div className='mentalhealth'> 
                        <br/><br/>แบบประเมินสุขภาพจิต
                    </div> 
                    <div className='textform'>
                        <br/><p className='texttopic' onClick={navigateTo9Q}>แบบประเมินโรคซึมเศร้าด้วย 9 คำถาม (9Q)</p>
                        <br/><p className='texttopic' onClick={navigateTo8Q}>แบบประเมินการฆ่าตัวตาย 8 คำถาม (8Q)</p>
                        <br/><p className='texttopic' onClick={navigateToHappy}>แบบประเมินความสุขคนไทย</p>
                        <br/><p className='texttopic' onClick={navigateToStress}>แบบวัดความเครียด กรมสุขภาพจิต (SPST - 20)</p>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Mentalhealth