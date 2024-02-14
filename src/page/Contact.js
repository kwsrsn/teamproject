import React ,{ useState , useEffect} from 'react';
import './style.css'
import {getFirestore, doc, collection, setDoc }from "firebase/firestore";
import mail from "../components/widgets/pic/mail.png";
import phone from "../components/widgets/pic/phone.png";
import location from "../img/location.png";
import call from "../img/call.png";
import backgroundcon from "../img/contact11111.jpg";
import backdeveloper from "../img/Developer.jpg";
// firebaseConfig.js
import {db} from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';





const Contact = props => {
    const navigate = useNavigate();
    const[inputValue1, setInputValue1]=useState('');
    const[inputValue2, setInputValue2]=useState('');
    const[inputValue3, setInputValue3]=useState('');
    const[inputValue4, setInputValue4]=useState('');
    const myCollection = collection(db,"/name")

    const saveDataToFirestore= async (e)=>{
        e.preventDefault()
        navigate("/")
        try{
            const docRef ={
            field1: inputValue1,
            field2: inputValue2,
            field3: inputValue3,
            field4: inputValue4,
            };
            const myDocRef = doc(myCollection, inputValue1);
            await setDoc(myDocRef, docRef);
            console.log("Document written to Database");
        
        }catch (e){
            console.log("Error");
        }
            
        
        
    }



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
                                    <div style={{width:"75px", color:"white",marginLeft:"80px"}}>
                                        &emsp;เปิดทำการ
                                    </div>
                                    <div style={{color:"white"}}>
                                       &emsp;&emsp;&emsp;จันทร์ - ศุกร์ เวลา 09:00 น. - 17:00 น.<br/>
                                       &emsp;&emsp;&emsp;เสาร์ - อาทิตย์ เวลา 09.00 น. - 11.00 น.<br/>
                                       &emsp;&emsp;&emsp;วันหยุดนักขัตฤกษ์ เวลา 09:00 น. - 17:00 น.
                                    </div>
                                </div>  
                        
                                <div className='contactrow'style={{marginLeft:"80px"}}>
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
                                <div className='contactrow'style={{marginLeft:"80px"}}>
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
                            <div className='contactrow'>
                                    <div style={{width:"75px", color:"white",marginLeft:"110px",paddingTop:"20px",fontSize:"15px"}}>
                                        &emsp;กรกนก <br/>
                                        &emsp;กวิสรา <br/>
                                        &emsp;พิชญาภา <br/>
                                        &emsp;พิมพ์ลดา <br/>
                                        &emsp;เยาวพา <br/>
                                    </div>
                                    <div style={{color:"white",paddingTop:"20px",fontSize:"15px"}}>
                                       &emsp;ศัตรูพินาศ<br/>
                                       &emsp;เศียรอุ่น<br/>
                                       &emsp;ประเสริฐวิทย์<br/>
                                       &emsp;สังข์สวัสดิ์<br/>
                                       &emsp;คำมหา<br/>
                                    </div>
                                    <div style={{color:"white",paddingTop:"20px",paddingLeft:"2px",fontSize:"15px"}}>
                                       &emsp;gornganok.nk@gmail.com <br/>
                                       &emsp;kawisara.sn@gmail.com<br/>
                                       &emsp;pichayapa1147@gmail.com<br/>
                                       &emsp;mildpimlada@gmail.com<br/>
                                       &emsp;yaowapakumm@gmail.com<br/>
                                    </div>
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
                                    value={inputValue1}
                                    name="name" 
                                    className='formcontact'
                                    placeholder="ชื่อ" 
                                    style={{width:"90%"}}
                                    onChange={(e)=> setInputValue1(e.target.value)}
                                />
                            </label><br/>

                            <label>
                                <input 
                                    type="text" 
                                    value={inputValue2}
                                    name="phone" 
                                    className='formcontact'
                                    placeholder="เบอร์โทร" 
                                    style={{width:"41%",marginRight:"15px"}}
                                    onChange={(e)=> setInputValue2(e.target.value)}
                                />
                            </label>

                            <label>
                                <input 
                                    type="email"
                                    value={inputValue3} 
                                    name="email" 
                                    className='formcontact'
                                    placeholder="Email" 
                                    style={{width:"41%"}}
                                    onChange={(e)=> setInputValue3(e.target.value)}
                                />
                            </label><br/>

                            <label>
                                <input 
                                    type="text" 
                                    value={inputValue4}
                                    name="text" 
                                    className='formcontact'
                                    placeholder="รายละเอียด" 
                                    style={{width:"90%", height:"120px"}}
                                    onChange={(e)=> setInputValue4(e.target.value)}
                                />
                            </label><br/>

                            
                        </form>
                        <form onClick={saveDataToFirestore}>
                            <button type="submit"> Submit </button>
                        </form>

                    </div>
                </div>
            </div> 
        </div>
    );
};
export default Contact