import React from 'react';
import './style.css';
import Image from "../img/pic1.png";

const News = props => {
    return (
        <div className='item'> 
            <div className=''>
                <img src={Image} className='picsize'/>
                <div className='contenthead'>
                    <br/>หัวข้อ
                </div>
                <div className='textcontent'>
                    เนื้อหา---------------------------------------------------------<br/>
                    -------------------------------------------------------------
                </div>
            </div>
            <div>
                <div className='directionnews'>
                    <div className='boxcover'>
                        &emsp;บทความยอดนิยม
                    </div>
                    <div>
                        <img src={Image} className='piccontent'/>
                        <div>
                            <br/>เนื้อหา------------------------------------------------<br/>
                            -------------------------------------------------------<br/>
                            -------------------------------------------------------
                        </div>
                    </div>

                    <div>
                        <img src={Image} className='piccontent'/>
                        <div>
                            <br/>เนื้อหา------------------------------------------------<br/>
                            -------------------------------------------------------<br/>
                            -------------------------------------------------------
                        </div>
                    </div>
                    
                    <div>
                        <img src={Image} className='piccontent'/>
                        <div>
                            <br/>เนื้อหา------------------------------------------------<br/>
                            -------------------------------------------------------<br/>
                            -------------------------------------------------------
                        </div>
                    </div>
                </div>
            </div>

        </div>   
    );
};
export default News