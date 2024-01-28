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

import mail from "../img/mail.png";
import phone from "../img/phone.png";


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
                        <button className='homebutton' onClick={navigateToCMental}>แบบประเมินสุขภาพจิต</button>
                    </div><br/>
                </div>


                <div className='homehead'></div>

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
                            โรคที่มีอารมณ์เศร้าลงและขาดแรงในการทำ
                            กิจวัตรประจำวัน อาการอื่น ๆ ที่อาจเกิดขึ้น
                            ได้รวมถึงความหดหู่ สูญเสียความสนใจ
                            และปัญหาในการนอนหรืออาหาร
                            </div>
                        </div>
                        <div className='boxhome'>
                            <img src= {Image2} className='picitem'/>
                            <br/><br/>โรคจิตเภท (Schizophrenia)<br/>
                            <div className='boxtext'>
                            โรคที่มีอาการขาดสติ ความคิดผิดปกติ 
                            และการรับรู้เหตุการณ์ที่ผิดปกติ ผู้ป่วยอาจมีอาการ
                            ทางการจิตอื่น ๆ เช่น การได้ยินเสียงหรือความคิด
                            ผิดปกติ
                            </div>
                        </div>
                        <div className='boxhome'>
                            <img src= {Image3} className='picitem'/>
                            <br/><br/>โรควิตกกังวล (Anxiety)<br/>
                            <div className='boxtext'>
                            โรคที่เกี่ยวข้องกับอารมณ์ของความกังวล
                            ผู้ป่วยอาจมีอาการหวาดกลัว กลัวสิ่งต่างๆ
                            หรือมีอารมณ์ตึงเครียดเป็นระยะเวลานาน
                            </div>
                        </div>
                        <div className='boxhome'>
                            <img src= {Image4} className='picitem'/>
                            <br/><br/>โรคจิตเวชเนื่องมาจากสารเสพติด (Substance Induced Mental Illness)<br/>
                            <div className='boxtext'>
                            โรคที่เกิดขึ้นจากการใช้สารเสพติด เช่น ยาเสพติด 
                            แอลกอฮอล์ หรือสารต่าง ๆ ที่ส่งผลให้เกิดอาการทางจิตเวช
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bottombox' style={{color:"white", fontSize:"14px"}}>
                    <div style={{paddingLeft:"2%", paddingRight:"2%"}}>
                        ABOUT
                        <div className='bottomtexthome' style={{width:"23vw"}}>
                            <br/>&emsp;&emsp;PRELIMINARY MENTAL ASSESSMENT เป็นเครื่องมือ
                            ประเมินสุขภาพจิตเบื้องต้น ใช้ประเมินสุขภาพจิตของบุคลากร
                            และนักศึกษาสถาบันเทคโนโลยีพระจอมเกล้าคุณทหารลาดกระบัง
                            เพื่อค้นหากลุ่มเสี่ยงต่อปัญหามาดูแลสุขภาพจิต ตลอดจนสามารถ
                            ประเมินตนเอง และเข้าถึงบริการได้อย่างรวดเร็ว
                        </div>
                    </div>
                        
                    <div style={{paddingLeft:"2%", paddingRight:"2%"}}>
                        CONTACT US
                        <div className='bottomtexthome'>
                            <br/><a href="http://medicalcenter.kmitl.ac.th/" target="_blank" rel="noopener noreferrer" className='bottomhome'> 
                                คลินิกเวชกรรม สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
                            </a><br/>
                            <img src= {phone} style={{height:"13px"}}/>
                                &nbsp; โทรศัพท์
                            <a href="tel:PHONE_NUM" target="_blank" rel="noopener noreferrer" className='bottomhome'> 02 329 8143 </a> หรือ
                            <a href="tel:PHONE_NUM" target="_blank" rel="noopener noreferrer" className='bottomhome'> 02 329 8000 </a>ต่อ 3633
                        </div>
                    </div>

                    <div style={{paddingLeft:"2%", paddingRight:"2%"}}>
                        DEVELOPER
                        <div className='bottomtexthome'> 
                            <br/><a href="/contact" rel="noopener noreferrer" className='bottomhome'> 
                                ติดต่อสอบถาม/แจ้งปัญหา
                            </a><br/>
                            <img src= {mail} style={{height:"12px"}}/>
                            <a href="/contact" rel="noopener noreferrer" className='bottomhome'> &nbsp;65010...@kmitl.ac.th </a> or
                            <a href="/contact" rel="noopener noreferrer" className='bottomhome'> 65010...@kmitl.ac.th </a><br/>
                            <img src= {phone} style={{height:"13px"}}/>
                            <a href="/contact" rel="noopener noreferrer" className='bottomhome'> &nbsp;ข้อมูลการติดต่อสอบถาม </a>
                        </div>  
                    </div>

                    <div style={{paddingLeft:"2%", paddingRight:"2%"}}>
                        แบบประเมินสุขภาพจิต<br/>
                        <div className='bottomtexthome'>
                            <br/><a href="/nineq" rel="noopener noreferrer" className='bottomhome'> แบบประเมินโรคซึมเศร้าด้วย 9 คำถาม (9Q) </a><br/>
                            <a href="/contact" rel="noopener noreferrer" className='bottomhome'> แบบประเมินการฆ่าตัวตาย 8 คำถาม (8Q) </a><br/>
                            <a href="/contact" rel="noopener noreferrer" className='bottomhome'> แบบประเมินความสุขคนไทย </a><br/>
                            <a href="/contact" rel="noopener noreferrer" className='bottomhome'> แบบวัดความเครียด กรมสุขภาพจิต (SPST - 20) </a>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
};
export default Home

/*,backgroundColor:"#374659"*/