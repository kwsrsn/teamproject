import React from 'react';
import './style.css';
import {useNavigate} from 'react-router-dom';

import Image from "../img/pic1.png";
import body from "../img/body.png";
import mood from "../img/mood.png";
import heart from "../img/heart.png";
import behavior from "../img/behavior.png";

const Home = props => {

    const navigate = useNavigate();

    const navigateToCMental = () => {
    navigate('/mentalhealth');
  };

    return (
        <div className='sizehome' >
            <div style={{display: "flex", flexDirection: "column"}}>
            
                <div>
                    <div className="texthome" > 
                        <br/><br/>MENTAL HEALTH
                    </div>
                    <div className='textcontent'>
                    <br/>ภาวะจิตใจที่เป็นสุข สามารถปรับตัวแก้ปัญหา สร้างสรรค์ทำงานได้ <br/>
                    มีความรู้สึกที่ดีต่อตนเองและผู้อื่น มีความมั่นคงทางจิตใจ มีวุฒิภาวะทางอารมณ์ <br/>
                    อยู่ในสังคม และสิ่งแวดล้อมที่เปลี่ยนแปลงได้
                    </div>
                    <div>
                        <br/><br/><button className='homebutton' onClick={navigateToCMental}>ทำแบบประเมิน</button>
                    </div><br/><br/>
                </div>

                <div className='pichome'>
                    <div>
                        <div className='circlehome'>
                            <img src= {body} className='picbox'/>
                        </div>
                        อาการทางร่างกาย<br/>
                        <div className='boxtext'>
                        เมื่อเกิดความเครียดในจิตใจ<br/>
                        ระบบประสาทในร่างกายจะถูก<br/>
                        กระตุ้นให้ทำงานเพิ่มขึ้นอัตโนมัติ
                        </div><br/>
                    </div>
                    <div>
                        <div className='circlehome'>
                            <img src= {mood} className='picbox'/>
                        </div>
                        อาการทางอารมณ์<br/>
                        <div className='boxtext'>
                        ความเครียดสามารถส่งผลให้<br/>
                        จิตใจรู้สึกวิตกกังวล มีอาการ<br/>
                        ซึมเศร้า ท้อแท้ เบื่อ หงุดหงิดง่าย
                        </div><br/>
                    </div>
                    <div>
                        <div className='circlehome'>
                            <img src= {heart} className='picbox'/>
                        </div>
                        อาการทางจิตใจ<br/>
                        <div className='boxtext'>
                        เปลี่ยนแปลงตามอารมณ์ อาจมีความคิด<br/>
                        ที่ไม่ดีและไม่สามารถหยุดความคิด<br/>
                        ดังกล่าวได้จนทำให้มองตนเองในแง่ที่ไม่ดี 
                        </div><br/>
                    </div>
                    <div>
                        <div className='circlehome'>
                            <img src= {behavior} className='picbox'/>
                        </div>
                        พฤติกรรม<br/>
                        <div className='boxtext'>
                        สามารถแสดงออกเป็นการหลบหนี<br/>
                        กลัว ขาดความรับผิดชอบ และ<br/>
                        ไม่กล้าแสดงออกหรือทำตัวผิดปกติ
                        </div><br/>
                    </div>
                </div>
                
                
            </div>
            
        </div>
    );
};
export default Home

                /*<div style={{display:"flex", flexDirection:"row"}}>
                    <div className='boxhome' style={{backgroundColor:"#647E88"}}>

                    </div>
                    <div className='boxhome' style={{backgroundColor:"#6DA5AC"}}>
                        
                    </div>
                    <div className='boxhome' style={{backgroundColor:"#96C5CB"}}>
                        
                    </div>
                </div>*/