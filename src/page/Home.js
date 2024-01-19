import React from 'react';
import './style.css';
import {useNavigate} from 'react-router-dom';

import pichead from "../img/pichead.png";
import body from "../img/body.png";
import mood from "../img/mood.png";
import heart from "../img/heart.png";
import behavior from "../img/behavior.png";

import Image1 from "../img/โรคซึมเศร้า.jpg";
import Image2 from "../img/โรคจิตเภท.jpg";
import Image3 from "../img/โรควิตกกังวล.jpeg";
import Image4 from "../img/โรคจิตเภทสารเสพติด.jpg";


const Home = props => {

    const navigate = useNavigate();

    const navigateToCMental = () => {
    navigate('/mentalhealth');
  };

    return (
        <div className='sizehome'>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div style={{height:"100vh"}}>
                    <div className='pichome'>
                        <button className='homebutton' onClick={navigateToCMental}>ทำแบบประเมิน</button>
                    </div><br/>
                </div>


                <div className='homehead'>
                    <img src= {pichead} className='picheadhome'/>
                    <div className='textcontent'>
                        <div className='homecontent' style={{textAlign:"left", color:"white"}}>การดูแลสุขภาพจิต คืออะไร?<br/></div>
                        <br/>&emsp;การดูแลสุขภาพจิต คือการรักษาสภาวะทางจิตใจและอารมณ์ให้ดี เพื่อพัฒนาความสุข<br/>
                        และความสนุกสนานในชีวิต อีกทั้งการดูแลสุขภาพจิตยังช่วยเสริมสร้างความสัมพันธ์ที่ดีกับผู้อื่น <br/>
                        ช่วยจัดการกับความเครียดและปัญหาที่เกิดขึ้นได้ ซึ่งการให้ความสำคัญแก่การพักผ่อนและ<br/>
                        การฟื้นฟูจากความเหนื่อยล้า สามารถสร้างความสุขในชีวิตของเราได้เช่นกัน<br/><br/><br/>
                    </div>
                </div>

                <div>
                    <div className='homecontent'>อาการของปัญหาสุขภาพจิต มีอะไรบ้าง?</div>
                    <div className='homeitem' style={{height:"42vh"}}>
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
                            </div>
                        </div>
                    </div>
                </div>


                <div style={{height:"90vh",alignContent:"center", backgroundColor:"#EDF7F6"}}>
                    <div className='homecontent'>
                        <br/>คนไทยส่วนใหญ่ป่วยเป็นโรคทางจิตเวช อะไรบ้าง?
                    </div>
                    <br/>
                    <div className='homeitem'>
                        <div className='boxhome'>
                            <img src= {Image1} className='picitem'/>
                            <br/><br/>โรคซึมเศร้า (Depression)<br/>
                            <div className='boxtext'>
                            โรคที่มีอารมณ์เศร้าลงและขาดแรงในการทำ<br/>
                            กิจวัตรประจำวัน อาการอื่น ๆ ที่อาจเกิดขึ้น<br/>
                            ได้รวมถึงความหดหู่ สูญเสียความสนใจ<br/>
                            และปัญหาในการนอนหรืออาหาร
                            </div>
                        </div>
                        <div className='boxhome'>
                            <img src= {Image2} className='picitem'/>
                            <br/><br/>โรคจิตเภท (Schizophrenia)<br/>
                            <div className='boxtext'>
                            โรคที่มีอาการขาดสติ ความคิดผิดปกติ <br/>
                            และการรับรู้เหตุการณ์ที่ผิดปกติ ผู้ป่วยอาจมีอาการ<br/>
                            ทางการจิตอื่น ๆ เช่น การได้ยินเสียงหรือความคิด<br/>
                            ผิดปกติ
                            </div>
                        </div>
                        <div className='boxhome'>
                            <img src= {Image3} className='picitem'/>
                            <br/><br/>โรควิตกกังวล (Anxiety)<br/>
                            <div className='boxtext'>
                            โรคที่เกี่ยวข้องกับอารมณ์ของความกังวล <br/>
                            ผู้ป่วยอาจมีอาการหวาดกลัว กลัวสิ่งต่างๆ <br/>
                            หรือมีอารมณ์ตึงเครียดเป็นระยะเวลานาน
                            </div>
                        </div>
                        <div className='boxhome'>
                            <img src= {Image4} className='picitem'/>
                            <br/><br/>โรคจิตเวชเนื่องมาจากสารเสพติด (Substance Induced Mental Illness)<br/>
                            <div className='boxtext'>
                            โรคที่เกิดขึ้นจากการใช้สารเสพติด เช่น ยาเสพติด<br/> 
                            แอลกอฮอล์ หรือสารต่าง ๆ ที่ส่งผลให้เกิดอาการทางจิตเวช
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bottombox' style={{color:"white"}}>
                    <div>
                        ABOUT US
                    </div>
                    <div >
                        CONTACT US<br/>
                        <a href="http://medicalcenter.kmitl.ac.th/" target="_blank" rel="noopener noreferrer" className='bottomhome'> 
                        คลินิกเวชกรรม สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
                        </a>
                    </div>

                    <div style={{color:"white"}}>
                        DEVELOPER<br/>
                        <a href="/contact" rel="noopener noreferrer" className='bottomhome'> 
                        ติดต่อสอบถาม/แจ้งปัญหา
                        </a><br/>
                        <a href="/contact" rel="noopener noreferrer" className='bottomhome'> 
                        65010...@kmitl.ac.th
                        </a>
                    </div>
                </div>
                
                
            </div>
            
        </div>
    );
};
export default Home

/*,backgroundColor:"#374659"*/