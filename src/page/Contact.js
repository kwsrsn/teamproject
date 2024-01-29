import React from 'react';
import './style.css'
import mail from "../components/widgets/pic/mail.png";
import phone from "../components/widgets/pic/phone.png";

const Contact = props => {
    return (
        <div className='sizehome'> 
            <div className='mentalhealth'> 
                <br/><br/>ติดต่อสอบถาม/แจ้งปัญหาการใช้งาน
            </div> 

            <div className='Contact-Report'>
                <div className='contact0'>
                    <br/>Contact
                    <div className='contactrow' style={{justifyContent:"center"}}>
                        <div style={{width:"40%", backgroundColor:"white", marginRight:"15px",padding:"10px"}}>
                            <div className='contact1'>
                                คลินิกเวชกรรม สจล. คณะแพทยศาสตร์
                            </div>
                            <div>
                                <div className='contactrow'>
                                    <div style={{width:"75px"}}>
                                        เปิดทำการ
                                    </div>
                                    <div>
                                        จันทร์ - ศุกร์ เวลา 09:00 น. - 17:00 น.<br/>
                                        เสาร์ - อาทิตย์ เวลา 09.00 น. - 11.00 น.<br/>
                                        วันหยุดนักขัตฤกษ์ เวลา 09:00 น. - 17:00 น.
                                    </div>
                                </div>  
                        
                                <div className='contactrow'>
                                    <div style={{width:"75px"}}>
                                        ที่ตั้ง
                                    </div>
                                    <div>
                                        สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง <br/>
                                        เลขที่ 1 ฉลองกรุง 1 เขตลาดกระบัง กรุงเทพมหานคร 10520
                                    </div>
                                </div>    
                                <div className='contactrow'>
                                    <div style={{width:"75px"}}>
                                        โทรศัพท์
                                    </div>
                                    <div>
                                        02 329 8143 <br/>
                                        02 329 8000 ต่อ 3633<br/><br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    
                        <div style={{width:"40%", backgroundColor:"white", marginLeft:"15px",padding:"10px"}}>
                            <div className='contact1'>
                                Developer
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <div className='contact0'>
                        <br/>Report problem<br/>
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

                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    );
};
export default Contact