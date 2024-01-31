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
            <button className='formbutton' onClick={this.handleClick}>ไม่มีเลย</button>&emsp;&emsp;&emsp;
            <button className='formbutton' onClick={this.handleClick}>เป็นบางวัน 1-7 วัน</button>&emsp;&emsp;&emsp;
            <button className='formbutton' onClick={this.handleClick}>เป็นบ่อย มากกว่า 7 วัน</button>&emsp;&emsp;&emsp;
            <button className='formbutton' onClick={this.handleClick}>เป็นทุกวัน</button>
        </div>
      );
    }
  };

//   const Calculator = () => {
//     // สร้าง state สำหรับเก็บค่า
//     const [value, setValue] = useState(0);
  
//     // ฟังก์ชันที่จะถูกเรียกเมื่อปุ่มคำนวณถูกคลิก
//     const calculate = () => {
//       // ทำการคำนวณเบื้องหลัง, เช่น API เรียกหรือการประมวลผล
//       // ในที่นี้ให้ตั้งค่าตัวอย่างเป็นการเพิ่มค่าปัจจุบันด้วย 10
//       const result = value + 10;
//       // อัปเดต state ด้วยค่าที่คำนวณได้
//       setValue(result);
//     };
//     return (
//         <div>
//           <p>Current Value: {value}</p>
//           {/* ให้ปุ่มเรียกใช้ calculate เมื่อถูกคลิก */}
//           <button onClick={calculate}>Calculate</button>
//         </div>
//       );
//     };

const Mentalhealth = props => {
    return (
        <div className='sizepage' >
            <div style={{display: "flex", flexDirection: "column"}}>
            
                <div>
                    <div className='mentalhealth'> 
                        <br/><br/>แบบประเมินโรคซึมเศร้าด้วย 9 (9Q)
                    </div> 
                    <div className='textform'>
                        <br/><p className='question'>&emsp;&emsp;1.&emsp;เบื่อ ไม่สนใจอยากทำอะไร</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;2.&emsp;ไม่สบายใจ ซึมเศร้า ท้อแท้</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;3.&emsp;หลับยากหรือหลับๆตื่นๆหรือหลับมากไป</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;4.&emsp;เหนื่อยง่ายหรือไม่ค่อยมีแรง</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;5.&emsp;เบื่ออาหารหรือกินมากเกินไป</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;6.&emsp;รู้สึกไม่ดีกับตัวเอง คิดว่าตัวเองล้มเหลว หรือครอบครัวผิดหวัง</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;7.&emsp; สมาธิไม่ดี เวลาทำอะไร เช่น ดูโทรทัศน์ ฟังวิทยุ หรือทำงานที่ต้องใช้ความตั้งใจ</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;8.&emsp;พูดช้าทำอะไรช้าลงจนคนอื่นสังเกตเห็นได้ หรือกระสับกระส่ายไม่สามารถอยู่นิ่งได้เหมือนที่เคยเป็น</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;9.&emsp;คิดทำร้ายตนเอง หรือคิดว่าถ้าตายไปคงจะดี</p><br/>
                        <MyButton />
                        <br/>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Mentalhealth