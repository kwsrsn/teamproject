import React,{useState, useEffect}  from 'react';
import './style.css';

const MyButton = ({ sharedScore, setSharedScore, questionId}) => {

    const [selectedButton, setSelectedButton] = useState(null);
    const [previousSelectedButton, setPreviousSelectedButton] = useState(null);
  
  
    const buttonData = [
      { id: 1, value: 0 , name: 'ไม่เลย'},
      { id: 2, value: 1 , name: 'เล็กน้อย'},
      { id: 3, value: 2 , name: 'มาก'},
      { id: 4, value: 3 , name: 'มากที่สุด'},
      // Add more buttons as needed
    ];
  
  
    const handleButtonClick = (button) => {
      if (selectedButton === button.id) {
        // ถ้าปุ่มที่ถูกคลิกเป็นปุ่มที่ถูกเลือกอยู่แล้ว
        setSelectedButton(null);
        setPreviousSelectedButton(null);
        setSharedScore(sharedScore - button.value);
      } else {
        // ถ้ามีปุ่มที่ถูกเลือกอยู่แล้ว ให้ลบค่าของปุ่มเดิมออก
        if (selectedButton !== null) {
          setSharedScore((prevScore) => prevScore - previousSelectedButton.value);
        }
  
        setSelectedButton(button.id);
        setPreviousSelectedButton(button);
        setSharedScore((prevScore) => prevScore + button.value);
      }
    };
  
    useEffect(() => {
      console.log('Total', sharedScore);
    }, [sharedScore]);
  
      return (
          <div class="inline">
            
            {buttonData.map((button) => (
          <button
            key={button.id}
            onClick={() => handleButtonClick(button)}
            className="formbutton"
            style={{
                marginLeft:"30px", marginRight:"30px",
                backgroundColor: selectedButton === button.id ? '#9de2c0' : '#f6fef9',
                color: selectedButton === button.id ? '#27495c' : '#27495c',
            }}
          >
            {button.name}
          </button>
        ))}
          </div>
        );
      };


const Happy = props => {
    const [sharedScore, setSharedScore] = useState(0);
    return (
        <div className='sizepage' >
            <div style={{display: "flex", flexDirection: "column"}}>
            
                <div>
                    <div className='mentalhealth'> 
                        <br/><br/>แบบประเมินความสุขคนไทย
                    </div> 
                    <div className='textform'>
                        <br/><p className='question'>&emsp;&emsp;1.&emsp;ท่านรู้สึกพึงพอใจในชีวิต</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={1}/>

                        <br/><p className='question'>&emsp;&emsp;2.&emsp;ท่านรู้สึกสบายใจ</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={2}/>

                        <br/><p className='question'>&emsp;&emsp;3.&emsp;ท่านรู้สึกภูมิใจในตนเอง</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={3}/>

                        <br/><p className='question'>&emsp;&emsp;4.&emsp;ท่านรู้สึกเบื่อหน่ายท้อแท้กับการดำเนินชีวิตประจำวัน</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={4}/>

                        <br/><p className='question'>&emsp;&emsp;5.&emsp;ท่านรู้สึกผิดหวังในตนเอง</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={5}/>

                        <br/><p className='question'>&emsp;&emsp;6.&emsp;ท่านรู้สึกว่าชีวิตมีแต่ความทุกข์</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={6}/>

                        <br/><p className='question'>&emsp;&emsp;7.&emsp;ท่านสามารถทำใจยอมรับได้สำหรับปัญหาที่ยากจะแก้ไข (เมื่อมีปัญหา)</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={7}/>

                        <br/><p className='question'>&emsp;&emsp;8.&emsp;ท่านมั่นใจว่าจะสามารถควบคุมอารมณ์ได้เมื่อมีเหตุการณ์คับขันหรือร้ายแรงที่เกิดขึ้น</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={8}/>

                        <br/><p className='question'>&emsp;&emsp;9.&emsp;ท่านมั่นใจที่จะเผชิญกับเหตุการณ์ร้ายแรงที่เกิดขึ้นในชีวิต</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={9}/>

                        <br/><p className='question'>&emsp;&emsp;10.&emsp;ท่านรู้สึกเห็นอกเห็นใจเมื่อผู้อื่นมีความทุกข์</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={10}/>

                        <br/><p className='question'>&emsp;&emsp;11.&emsp;ท่านรู้สึกเป็นสุขในการช่วยเหลือผู้อื่นที่มีปัญหา</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={11}/>

                        <br/><p className='question'>&emsp;&emsp;12.&emsp;ท่านให้ความช่วยเหลือแก่ผู้อื่นเมื่อมีโอกาส</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={12}/>

                        <br/><p className='question'>&emsp;&emsp;13.&emsp;ท่านรู้สึกมั่นคงปลอดภัยเมื่ออยู่ในครอบครัว</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={13}/>

                        <br/><p className='question'>&emsp;&emsp;14.&emsp;หากท่านป่วยหนัก ท่านเชื่อว่าคนในครอบครัวจะดูแลท่านเป็นอย่างดี</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={14}/>

                        <br/><p className='question'>&emsp;&emsp;15.&emsp;สมาชิกในครอบครัวมีความรักและผูกพันต่อกัน</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={15}/>

                        <br/><br/><button className='resultbtn'>Submit</button>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Happy