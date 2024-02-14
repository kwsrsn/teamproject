import React from 'react';
import './style.css';
import Image1 from "../img/broken heart.png";
import Image2 from "../img/kids.png";
import Image3 from "../img/neckpain.png";
import Image4 from "../img/dustmite.png";
import Image5 from "../img/goodsleep.png";
import Image6 from "../img/sleepy.png";
import Image7 from "../img/men.png";
import Image8 from "../img/blood.png";
import{Link} from 'react-router-dom';

const News = props => {
    return (
        <div className='item'> 
            <a  style={{textDecoration: 'none'}} className="custom-link" href="https://health-articles.my.canva.site/broken-heart-syndrome">
                <div className='boxcover'>
                    <div>
                        <img src={Image1} className='piccontent'/>
                        <br/>
                        “Broken-heart Syndrome”
                        <br/>
                        โรคหัวใจที่มีผลจากความเครียด   
                    </div>       
                </div>
            </a>
            <a  style={{textDecoration: 'none'}} className="custom-link" href="https://health-articles.my.canva.site/children-mental-health">
                <div className='boxcover'>
                    <div>
                        <img src={Image2} className='piccontent'/>
                        <br/>
                        ปัญหาสุขภาพจิตเด็กสังเกตอย่างไร
                    </div>
                </div>
            </a>
            <a  style={{textDecoration: 'none'}} className="custom-link" href="https://health-articles.my.canva.site/neck-shoulder-pain">
                <div className='boxcover'>
                    <div>
                        <img src={Image3} className='piccontent'/>
                        <br/>
                        ปวดเมื่อยคอ บ่า ไหล่
                        <br/>
                        สัญญาณเตือน โรคหมอนรองกระดูกคอ
                    </div>
                </div>
            </a>
            <a  style={{textDecoration: 'none'}} className="custom-link" href="https://health-articles.my.canva.site/dusk-mites-allergy">
                <div className='boxcover'>
                    <div>
                        <img src={Image4} className='piccontent'/>
                        <br/>
                        ภูมิแพ้ตัวไรในฝุ่น   
                    </div>
                </div>
            </a>
            <a  style={{textDecoration: 'none'}} className="custom-link" href="https://health-articles.my.canva.site/reason-to-get-more-sleep">
                <div className='boxcontent'>
                    <div>
                        <img src={Image5} className='piccontent'/>
                        <br/>
                        5 คุณประโยชน์ของการนอนที่ดี
                    </div>
                </div>
            </a>
            <a  style={{textDecoration: 'none'}} className="custom-link" href="https://health-article.my.canva.site/sleepy-during-the-day">
                <div className='boxcontent'>
                    <div>
                        <img src={Image6} className='piccontent'/>
                        <br/>
                        อาการง่วงนอนมากผิดปกติในเวลากลางวัน
                    </div>
                </div>
            </a>
            <a  style={{textDecoration: 'none'}} className="custom-link" href="https://health-article.my.canva.site/menstruation">
                <div className='boxcontent'>
                    <div>
                        <img src={Image7} className='piccontent'/>
                        <br/>
                        ประจำเดือนแบบไหนไม่ปกติ
                    </div>
                </div>
            </a>
            <a  style={{textDecoration: 'none'}} className="custom-link" href="https://health-article.my.canva.site/blood-sugar-and-exercise">
                <div className='boxcontent'>
                    <div>    
                        <img src={Image8} className='piccontent'/>
                        <br/>
                        ระดับน้ำตาลในเลือดกับการออกกำลังกาย
                    </div>
                </div>
            </a>
        </div>
    );
};
export default News