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
            <div className='boxcover'>
                <div>
                    <a  style={{textDecoration: 'none'}} className="custom-link" href="https://health-articles.my.canva.site/broken-heart-syndrome">
                        <img src={Image1} className='piccontent'/>
                        <br/>
                        “Broken-heart Syndrome”
                        <br/>
                        โรคหัวใจที่มีผลจากความเครียด   
                    </a>
                </div>       
            </div>
            <div className='boxcover'>
                <div>
                    <a  style={{textDecoration: 'none'}} className="custom-link" href="https://health-articles.my.canva.site/children-mental-health">
                        <img src={Image2} className='piccontent'/>
                        <br/>
                        ปัญหาสุขภาพจิตเด็กสังเกตอย่างไร
                    </a>
                </div>
            </div>
            <div className='boxcover'>
                <div>
                    <a  style={{textDecoration: 'none'}} className="custom-link" href="https://health-articles.my.canva.site/neck-shoulder-pain">
                        <img src={Image3} className='piccontent'/>
                        <br/>
                        ปวดเมื่อยคอ บ่า ไหล่
                        <br/>
                        สัญญานเตือน โรคหมอนรองกระดูกคอ
                    </a>
                </div>
            </div>
            <div className='boxcover'>
                <div>
                    <a  style={{textDecoration: 'none'}} className="custom-link" href="https://health-articles.my.canva.site/dusk-mites-allergy">
                        <img src={Image4} className='piccontent'/>
                        <br/>
                        ภูมิแพ้ตัวไรในฝุ่น
                    </a>
                </div>
            </div>
            <div className='boxcontent'>
                <div>
                    <a  style={{textDecoration: 'none'}} className="custom-link" href="https://health-articles.my.canva.site/reason-to-get-more-sleep">
                        <img src={Image5} className='piccontent'/>
                        <br/>
                        5 คุณประโยชน์ของการนอนที่ดี
                    </a>
                </div>
            </div>
            <div className='boxcontent'>
                <div>
                    <a  style={{textDecoration: 'none'}} className="custom-link" href="https://health-article.my.canva.site/sleepy-during-the-day">
                        <img src={Image6} className='piccontent'/>
                        <br/>
                        อาการง่วงนอนมากผิดปกติในเวลากลางวัน
                    </a>
                </div>
            </div>
            <div className='boxcontent'>
                <div>
                    <a  style={{textDecoration: 'none'}} className="custom-link" href="https://health-article.my.canva.site/menstruation">
                        <img src={Image7} className='piccontent'/>
                        <br/>
                        ประจำเดือนแบบไหนไม่ปกติ
                    </a>
                </div>
            </div>
            <div className='boxcontent'>
                <div>
                        <a  style={{textDecoration: 'none'}} className="custom-link" href="https://health-article.my.canva.site/blood-sugar-and-exercise">
                            <img src={Image8} className='piccontent'/>
                            <br/>
                            ระดับน้ำตาลในเลือดกับการออกกำลังกาย
                        </a>
                    </div>
            </div>
        </div>
    );
};
export default News