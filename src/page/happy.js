import React from 'react';
import './style.css';
import useState from 'react';

class MyButton extends React.Component {
    handleClick() {
      alert('Button Clicked!');
    }
  
    render() {
      return (
        <div class="inline">
            <button className='formbutton' onClick={this.handleClick}>ไม่เลย</button>&emsp;&emsp;&emsp;
            <button className='formbutton' onClick={this.handleClick}>เล็กน้อย</button>&emsp;&emsp;&emsp;
            <button className='formbutton' onClick={this.handleClick}>มาก</button>&emsp;&emsp;&emsp;
            <button className='formbutton' onClick={this.handleClick}>มากที่สุด</button>
        </div>
      );
    }
  };


const Happy = props => {
    return (
        <div className='sizepage' >
            <div style={{display: "flex", flexDirection: "column"}}>
            
                <div>
                    <div className='mentalhealth'> 
                        <br/><br/>แบบประเมินความสุขคนไทย
                    </div> 
                    <div className='textform'>
                        <br/><p className='question'>&emsp;&emsp;1.&emsp;ท่านรู้สึกพึงพอใจในชีวิต</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;2.&emsp;ท่านรู้สึกสบายใจ</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;3.&emsp;ท่านรู้สึกภูมิใจในตนเอง</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;4.&emsp;ท่านรู้สึกเบื่อหน่ายท้อแท้กับการดำเนินชีวิตประจำวัน</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;5.&emsp;ท่านรู้สึกผิดหวังในตนเอง</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;6.&emsp;ท่านรู้สึกว่าชีวิตมีแต่ความทุกข์</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;7.&emsp;ท่านสามารถทำใจยอมรับได้สำหรับปัญหาที่ยากจะแก้ไข (เมื่อมีปัญหา)</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;8.&emsp;ท่านมั่นใจว่าจะสามารถควบคุมอารมณ์ได้เมื่อมีเหตุการณ์คับขันหรือร้ายแรงที่เกิดขึ้น</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;9.&emsp;ท่านมั่นใจที่จะเผชิญกับเหตุการณ์ร้ายแรงที่เกิดขึ้นในชีวิต</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;10.&emsp;ท่านรู้สึกเห็นอกเห็นใจเมื่อผู้อื่นมีความทุกข์</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;11.&emsp;ท่านรู้สึกเป็นสุขในการช่วยเหลือผู้อื่นที่มีปัญหา</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;12.&emsp;ท่านให้ความช่วยเหลือแก่ผู้อื่นเมื่อมีโอกาส</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;13.&emsp;ท่านรู้สึกมั่นคงปลอดภัยเมื่ออยู่ในครอบครัว</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;14.&emsp;หากท่านป่วยหนัก ท่านเชื่อว่าคนในครอบครัวจะดูแลท่านเป็นอย่างดี</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;15.&emsp;สมาชิกในครอบครัวมีความรักและผูกพันต่อกัน</p><br/>
                        <MyButton />
                        <br/>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Happy