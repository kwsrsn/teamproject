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
     const names = [
        { fn: "กรกนก", ln: "ศัตรูพินาศ", ml:"gornganok.nk@gmail.com"},
        { fn: "กวิสรา", ln: "เศียรอุ่น", ml:"kawisara.sn@gmail.com"},
        { fn: "พิชญาภา", ln: "ประเสริฐวิทย์", ml:"pichayapa1147@gmail.com"},
        { fn: "พิมพ์ลดา", ln: "สังข์สวัสดิ์", ml:"mildpimlada@gmail.com"},
        { fn: "เยาวพา", ln: "คำมหา", ml:"yaowapakumm@gmail.com"},
     ];



    return (
        <div className='sizehome'> 
            <div className='mentalhealth1'> 
                <br/><br/>ติดต่อสอบถาม/แจ้งปัญหาการใช้งาน
            </div> 

            <div className='Contact-Report'>
                    <div className='contactrow1' style={{justifyContent:"center"}}>
                        <div className='clinic'>
                            <div className='contact1'style={{color:"white"}}>
                                คลินิกเวชกรรม สจล. คณะแพทยศาสตร์
                            </div>
                            <div>
                                <div className='contactrow3'>
                                    <div className='open'>
                                        เปิดทำการ
                                    </div>
                                    <div className='detail1'>
                                       จันทร์ - ศุกร์ เวลา 09:00 น. - 17:00 น.<br/>
                                       เสาร์ - อาทิตย์ เวลา 09.00 น. - 11.00 น.<br/>
                                       วันหยุดนักขัตฤกษ์ เวลา 09:00 น. - 17:00 น.
                                    </div>
                                </div>  
                        
                                <div className='contactrow3'>
                                <div>
                                <img src={location} className='piclocation'/> 
                                </div>
                                    <div className='place'>
                                        &nbsp;&nbsp;ที่ตั้ง 
                                    </div>
                                    <div  className='detail2'>
                                    สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง <br/>
                                    เลขที่ 1 ฉลองกรุง 1 เขตลาดกระบัง กรุงเทพมหานคร 10520
                                    </div>
                                </div>    
                                <div className='contactrow3'>
                                <div>
                                <img src={call} className='picphone'/>
                                </div>
                                    <div className='phone'>
                                    &nbsp;&nbsp;โทรศัพท์
                                    </div>
                                    <div  className='detail3'>
                                        02 329 8143 <br/>
                                        02 329 8000 ต่อ 3633<br/><br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    
                        <div className='Develop'>
                            <div className='contact1' style={{color:"white"}}>
                                Developer
                            </div>
                            <div className='contactrow2'>
                                {names.map((person, index) => (
                                    <div key={index} className="name-item">
                                        <span className='first-name'>{person.fn}</span>
                                        <span className='last-name'>{person.ln}</span>
                                        <span className='email'>{person.ml}</span>
                                    </div>
                                ))}   
                                </div> 
                                <div className='Namecon'>
                                        กรกนก&emsp;&emsp;ศัตรูพินาศ&emsp;&emsp;&emsp;gornganok.nk@gmail.com<br/>
                                        กวิสรา&emsp;&emsp;&nbsp;เศียรอุ่น&emsp;&emsp;&emsp;&emsp;kawisara.sn@gmail.com<br/>
                                        พิชญาภา&emsp;ประเสริฐวิทย์&emsp;&emsp;pichayapa1147@gmail.com<br/>
                                        พิมพ์ลดา&emsp;สังข์สวัสดิ์&emsp;&emsp;&emsp;mildpimlada@gmail.com<br/>
                                        เยาวพา&emsp;&nbsp;&nbsp;&nbsp;คำมหา&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;yaowapakumm@gmail.com<br/>
                                </div>
                        </div>
                    </div><br/><br/>
                <div className='Reportcon'>
                    <div className='contact0'>
                        Report problem<br/>
                        <form>
                            <label>
                                <input 
                                    type="text" 
                                    value={inputValue1}
                                    name="name" 
                                    className='Namere'
                                    placeholder="ชื่อ" 
                                    onChange={(e)=> setInputValue1(e.target.value)}
                                />
                            </label><br/>

                            <label>
                                <input 
                                    type="text" 
                                    value={inputValue2}
                                    name="phone" 
                                    className='phonere'
                                    placeholder="เบอร์โทร" 
                                    onChange={(e)=> setInputValue2(e.target.value)}
                                />
                            </label>

                            <label>
                                <input 
                                    type="email"
                                    value={inputValue3} 
                                    name="email" 
                                    className='emailre'
                                    placeholder="Email" 
                                    onChange={(e)=> setInputValue3(e.target.value)}
                                />
                            </label><br/>

                            <label>
                                <input 
                                    type="text" 
                                    value={inputValue4}
                                    name="text" 
                                    className='problem'
                                    placeholder="รายละเอียด" 
                                    onChange={(e)=> setInputValue4(e.target.value)}
                                />
                            </label><br/>

                            
                        </form>
                        <form onClick={saveDataToFirestore}>
                            <button className='submitreport' type="submit"> Submit </button>
                        </form>

                    </div>
                </div>
            </div> 
        </div>
    );
};
export default Contact