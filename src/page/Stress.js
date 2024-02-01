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
            <button className='buttonstress' onClick={this.handleClick}>1</button>&emsp;&emsp;&emsp;
            <button className='buttonstress' onClick={this.handleClick}>2</button>&emsp;&emsp;&emsp;
            <button className='buttonstress' onClick={this.handleClick}>3</button>&emsp;&emsp;&emsp;
            <button className='buttonstress' onClick={this.handleClick}>4</button>&emsp;&emsp;&emsp;
            <button className='buttonstress' onClick={this.handleClick}>5</button>
        </div>
      );
    }
  };


const Stress = props => {
    return (
        <div className='sizepage' >
            <div style={{display: "flex", flexDirection: "column"}}>
            
                <div>
                    <div className='mentalhealth'> 
                        <br/><br/>แบบวัดความเครียด กรมสุขภาพจิต (SPST - 20)
                    </div> 
                    <div className='textstress'>
                        <br/>ระดับความเครียด 1 หมายถึง ไม่รู้สึกเครียด
                        <br/>ระดับความเครียด 2 หมายถึง รู้สึกเครียดเล็กน้อย
                        <br/>ระดับความเครียด 3 หมายถึง รู้สึกเครียดปานกลาง
                        <br/>ระดับความเครียด 4 หมายถึง รู้สึกเครียดมาก
                        <br/>ระดับความเครียด 5 หมายถึง รู้สึกเครียดมากที่สุด
                    </div>
                    <div className='textform'>
                        <br/><p className='question'>&emsp;&emsp;1.&emsp;กลัวทำงานผิดพลาด</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;2.&emsp;ไปไม่ถึงเป้าหมายที่วางไว้</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;3.&emsp;ครอบครัวมีความขัดแย้งกันในเรื่องเงินหรือเรื่องงานในบ้าน</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;4.&emsp;เป็นกังวลกับเรื่องสารพิษหรือมลภาวะในอากาศ น้ำ เสียง และดิน</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;5.&emsp;รู้สึกว่าต้องแข่งขันหรือเปรียบเทียบ</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;6.&emsp;เงินไม่พอใช้จ่าย</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;7.&emsp;กล้ามเนื้อตึงหรือปวด</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;8.&emsp;ปวดหัวจากความตึงเครียด</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;9.&emsp;ปวดหลัง</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;10.&emsp;ความอยากอาหารเปลี่ยนแปลง</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;11.&emsp;ปวดศีรษะข้างเดียว</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;12.&emsp;รู้สึกวิตกกังวล</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;13.&emsp;รู้สึกคับข้องใจ</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;14.&emsp;รู้สึกโกรธ หรือหงุดหงิด</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;15.&emsp;รู้สึกเศร้า</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;16.&emsp;ความจำไม่ดี</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;17.&emsp;รู้สึกสับสน</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;18.&emsp;ตั้งสมาธิลำบาก</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;19.&emsp;รู้สึกเหนื่อยง่าย</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;20.&emsp;เป็นหวัดบ่อย ๆ</p><br/>
                        <MyButton />
                        <br/>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Stress