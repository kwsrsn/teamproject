import React from 'react';
import './style.css';
import Image from "../img/pic1.png";
import{Link} from 'react-router-dom';

const News = props => {
    return (
        <div className='item'> 
            <div className='boxcover'>
                <img src={Image} className='piccontent'/>
                    <div>
                        <br/><Link to="https://www.manarom.com/blog/toxic_person.html">Toxic Person รับมืออย่างไร เมื่อคนใกล้ตัวกลายเป็นพิษ</Link><br/>
                        
                    </div>       
            </div>
            <div className='boxcover'>
                <img src={Image} className='piccontent'/>
                    <div>
                        <br/>เนื้อหา------------------------------------------------<br/>
                        -------------------------------------------------------<br/>
                        -------------------------------------------------------
                    </div>
            </div>
            <div className='boxcover'>
                <img src={Image} className='piccontent'/>
                    <div>
                        <br/>เนื้อหา------------------------------------------------<br/>
                        -------------------------------------------------------<br/>
                        ------------------------------------------------------
                    </div>
            </div>
            <div className='boxcover'>
                <img src={Image} className='piccontent'/>
                    <div>
                        <br/>เนื้อหา------------------------------------------------<br/>
                        -------------------------------------------------------<br/>
                        -------------------------------------------------------
                    </div>
            </div>
            <div className='boxcontent'>
                <img src={Image} className='piccontent'/>
                    <div>
                        <br/>เนื้อหา------------------------------------------------<br/>
                        -------------------------------------------------------<br/>
                        -------------------------------------------------------
                    </div>
            </div>
            <div className='boxcontent'>
                <img src={Image} className='piccontent'/>
                    <div>
                        <br/>เนื้อหา------------------------------------------------<br/>
                        -------------------------------------------------------<br/>
                        -------------------------------------------------------
                    </div>
            </div>
            <div className='boxcontent'>
                <img src={Image} className='piccontent'/>
                    <div>
                        <br/>เนื้อหา------------------------------------------------<br/>
                        -------------------------------------------------------<br/>
                        -------------------------------------------------------
                    </div>
            </div>
            <div className='boxcontent'>
                <img src={Image} className='piccontent'/>
                    <div>
                        <br/>เนื้อหา------------------------------------------------<br/>
                        -------------------------------------------------------<br/>
                        -------------------------------------------------------
                    </div>
            </div>
        </div>
    );
};
export default News