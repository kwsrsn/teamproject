import React from 'react';
import './style.css'

const Mentalhealth = props => {
    return (
        <div className='sizehome' >
            <div style={{display: "flex", flexDirection: "column"}}>
            
                <div>
                    <div className='mentalhealth'> 
                        <br/><br/>แบบประเมินสุขภาพจิต
                    </div> 
                    <div className='textform'>
                        <br/><p className='question'>1. เบื่อ ไม่สนใจอยากทำอะไร</p><br/>
                        <div class="inline">
                            <button className='formbutton'>ไม่มีเลย</button>&emsp;&emsp;&emsp;<button className='formbutton'>เป็นบางวัน 1-7 วัน</button>&emsp;&emsp;&emsp;
                            <button className='formbutton'>เป็นบ่อย มากกว่า 7 วัน</button>&emsp;&emsp;&emsp;<button className='formbutton'>เป็นทุกวัน</button>
                        </div>
                        <br/><p className='question'>2. ไม่สบายใจ ซึมเศร้า ท้อแท้</p><br/>
                    </div> 
                </div>
            </div>
        </div>
    );
};
export default Mentalhealth