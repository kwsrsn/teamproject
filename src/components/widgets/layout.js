import Navbar from './Navbar';
import mail from "../widgets/pic/mail.png";
import phone from "../widgets/pic/phone.png";
import './layout.css'
import './Navbar.css'

const Layout = ({children}) => {
    return( 
        <div>
            <div className='navbarlay'>
                <Navbar/>    
                <div className='page'>
                    {children}
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
                            {/* <a href="mailto: 65010739@kmitl.ac.th" rel="noopener noreferrer" className='bottomhome'> &nbsp;65010...@kmitl.ac.th </a> or */}
                            <a href="/contact" rel="noopener noreferrer" className='bottomhome'> Contact</a><br/>
                            <img src= {phone} style={{height:"13px"}}/>
                            <a href="/contact" rel="noopener noreferrer" className='bottomhome'> &nbsp;ข้อมูลการติดต่อสอบถาม </a>
                        </div>  
                    </div>

                    <div style={{paddingLeft:"2%", paddingRight:"2%"}}>
                        แบบประเมินสุขภาพจิต<br/>
                        <div className='bottomtexthome'>
                            <br/><a href="/nineq" rel="noopener noreferrer" className='bottomhome'> แบบประเมินโรคซึมเศร้าด้วย 9 คำถาม (9Q) </a><br/>
                            <a href="/happy" rel="noopener noreferrer" className='bottomhome'> แบบประเมินความสุขคนไทย </a><br/>
                            <a href="/stress" rel="noopener noreferrer" className='bottomhome'> แบบวัดความเครียด กรมสุขภาพจิต (SPST - 20) </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
            
    )
}

export default Layout