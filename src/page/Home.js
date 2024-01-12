import React from 'react';
import './style.css';
import Image from "../img/pic1.png";
import {useNavigate} from 'react-router-dom';

const Home = props => {

    const navigate = useNavigate();

    const navigateToCMental = () => {
    navigate('/mentalhealth');
  };

    return (
        <div className='item'>
            <div>
                <div className="texthome"> 
                    <br/><br/><br/>MENTAL HEALTH
                </div>
                <div className='textcontent'>
                <br/>ภาวะจิตใจที่เป็นสุข สามารถปรับตัวแก้ปัญหา <br/>
                สร้างสรรค์ทำงานได้ มีความรู้สึกที่ดีต่อตนเองและผู้อื่น <br/>
                มีความมั่นคงทางจิตใจ มีวุฒิภาวะทางอารมณ์ <br/>
                อยู่ในสังคม และสิ่งแวดล้อมที่เปลี่ยนแปลงได้
                </div>
                <div>
                    <br/><br/><button className='homebutton' onClick={navigateToCMental}>ทำแบบประเมิน</button>
                </div>
            </div>
            <div className="sizepic">
                <br/><img src= {Image}/>
            </div>
        </div>
    );
};
export default Home
