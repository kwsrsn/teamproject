import React from 'react';
import './style.css'
import mail from "../components/widgets/pic/mail.png";
import phone from "../components/widgets/pic/phone.png";
import location from "../img/location.png";
import call from "../img/call.png";
import backgroundcon from "../img/contact11111.jpg";
import backdeveloper from "../img/Developer.jpg";

const Contact = props => {
    return (
        <div className='sizehome'> 
            <div className='mentalhealth'> 
                <br/><br/>ติดต่อสอบถาม/แจ้งปัญหาการใช้งาน
            </div> 

            <div className='Contact-Report'>
                    <div className='contactrow' style={{justifyContent:"center"}}>
                        <div style={{width:"40%", backgroundColor:"#e77575", marginLeft:"40px", padding:"10px", borderRadius:"30px", boxShadow:"0 4px 10px"}}>
                            <div className='contact1'style={{color:"white"}}>
                                คลินิกเวชกรรม สจล. คณะแพทยศาสตร์
                            </div>
                            <div>
                                <div className='contactrow'>
                                    <div style={{width:"75px", color:"white"}}>
                                        &emsp;เปิดทำการ
                                    </div>
                                    <div style={{color:"white"}}>
                                       &emsp;&emsp;&emsp;จันทร์ - ศุกร์ เวลา 09:00 น. - 17:00 น.<br/>
                                       &emsp;&emsp;&emsp;เสาร์ - อาทิตย์ เวลา 09.00 น. - 11.00 น.<br/>
                                       &emsp;&emsp;&emsp;วันหยุดนักขัตฤกษ์ เวลา 09:00 น. - 17:00 น.
                                    </div>
                                </div>  
                        
                                <div className='contactrow'>
                                <div>
                                <img src={location} className='piclocation'/> 
                                </div>
                                    <div style={{width:"75px",color:"white"}}>
                                        &emsp;ที่ตั้ง 
                                    </div>
                                    <div style={{color:"white"}}>
                                    &emsp;สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง <br/>
                                    &emsp;เลขที่ 1 ฉลองกรุง 1 เขตลาดกระบัง กรุงเทพมหานคร 10520
                                    </div>
                                </div>    
                                <div className='contactrow'>
                                <div>
                                <img src={call} classname='picphone' style={{ height:"25px",width:"25px"}}/>
                                </div>
                                    <div style={{width:"75px",color:"white"}}>
                                    &emsp;โทรศัพท์
                                    </div>
                                    <div style={{color:"white"}}>
                                        &emsp;02 329 8143 <br/>
                                        &emsp;02 329 8000 ต่อ 3633<br/><br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    
                        <div style={{width:"40%", backgroundColor:"#37ad92", marginLeft:"40px", padding:"10px", borderRadius:"30px", boxShadow:"0 4px 10px"}}>
                            <div className='contact1' style={{color:"white"}}>
                                Developer
                            </div>
                        </div>
                    </div><br/><br/>
                <div style={{width:"35%", backgroundColor:"#ffdb58", margin:"auto", padding:"20px", borderRadius:"30px", boxShadow:"0 4px 10px"}}>
                    <div className='contact0'>
                        Report problem<br/>
                        <form>
                            <label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    className='formcontact'
                                    placeholder="ชื่อ" 
                                    style={{width:"400px"}}
                                />
                            </label><br/>

                            <label>
                                <input 
                                    type="text" 
                                    name="phone" 
                                    className='formcontact'
                                    placeholder="เบอร์โทร" 
                                    style={{width:"180px",marginRight:"15px"}}
                                />
                            </label>

                            <label>
                                <input 
                                    type="text" 
                                    name="email" 
                                    className='formcontact'
                                    placeholder="Email" 
                                    style={{width:"180px"}}
                                />
                            </label><br/>

                            <label>
                                <input 
                                    type="text" 
                                    name="text" 
                                    className='formcontact'
                                    placeholder="รายละเอียด" 
                                    style={{width:"400px", height:"120px"}}
                                />
                            </label><br/>

                            <button classname="btn btn-success"> Submit </button>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    );
};
export default Contact