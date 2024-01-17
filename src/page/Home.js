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
        <div className='sizehome'>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div className='pichome'>
                    <button className='homebutton' onClick={navigateToCMental}>ทำแบบประเมิน</button>
                </div><br/>
                <div className='homecontent'>
                    คนไทยส่วนใหญ่ป่วยเป็นโรคทางจิตเวช อะไรบ้าง?
                </div>
                <div className='homeitem'>
                    <div className='boxhome' style={{backgroundColor:"#647E88"}}>
                        <img src= {Image} className='picitem'/>
                        <br/><br/>โรคซึมเศร้า (Depression)<br/>
                        <div className='boxtext'>
                            โรคที่มีอารมณ์เศร้าลงและขาดแรงในการทำ<br/>
                            กิจวัตรประจำวัน อาการอื่น ๆ ที่อาจเกิดขึ้น<br/>
                            ได้รวมถึงความหดหู่ สูญเสียความสนใจ<br/>
                            และปัญหาในการนอนหรืออาหาร
                        </div>
                    </div>
                    <div className='boxhome' style={{backgroundColor:"#96C5CB"}}>
                        <img src= {Image} className='picitem'/>
                        <br/><br/>โรคจิตเภท (Schizophrenia)<br/>
                        <div className='boxtext'>
                        โรคที่มีอาการขาดสติ ความคิดผิดปกติ <br/>
                        และการรับรู้เหตุการณ์ที่ผิดปกติ ผู้ป่วยอาจมีอาการ<br/>
                        ทางการจิตอื่น ๆ เช่น การได้ยินเสียงหรือความคิด<br/>
                        ผิดปกติ
                        </div>
                    </div>
                    <div className='boxhome' style={{backgroundColor:"#647E88"}}>
                        <img src= {Image} className='picitem'/>
                        <br/><br/>โรควิตกกังวล (Anxiety)<br/>
                        <div className='boxtext'>
                        โรคที่เกี่ยวข้องกับอารมณ์ของความกังวล <br/>
                        ผู้ป่วยอาจมีอาการหวาดกลัว กลัวสิ่งต่างๆ <br/>
                        หรือมีอารมณ์ตึงเครียดเป็นระยะเวลานาน
                        </div>
                    </div>
                    <div className='boxhome' style={{backgroundColor:"#96C5CB"}}>
                        <img src= {Image} className='picitem'/>
                        <br/><br/>โรคจิตเวชเนื่องมาจากสารเสพติด (Substance Induced Mental Illness)<br/>
                        <div className='boxtext'>
                        โรคที่เกิดขึ้นจากการใช้สารเสพติด เช่น ยาเสพติด<br/> 
                        แอลกอฮอล์ หรือสารต่าง ๆ ที่ส่งผลให้เกิดอาการทางจิตเวช
                        </div>
                    </div>
                </div>
                
                <div className='homeitem'>
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

/*,backgroundColor:"#374659"*/