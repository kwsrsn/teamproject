import React,{useState, useEffect}  from 'react';
import './style.css';
import { findByLabelText } from '@testing-library/react';

const MyButton = ({ sharedScore, setSharedScore, questionId}) => {

  const [selectedButton, setSelectedButton] = useState(null);
  const [previousSelectedButton, setPreviousSelectedButton] = useState(null);


  const buttonData = [
    { id: 1, value: 0 , name: 'ไม่มีเลย'},
    { id: 2, value: 1 , name: 'เป็นบางวัน 1-7 วัน'},
    { id: 3, value: 2 , name: 'เป็นบ่อย มากกว่า 7 วัน'},
    { id: 4, value: 3 , name: 'เป็นทุกวัน'},
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
            backgroundColor: selectedButton === button.id ? '#f9e59b' : '#f6fef9',
            color: selectedButton === button.id ? '#27495c' : '#27495c',
          }}
        >
          {button.name}
        </button>
      ))}
        </div>
      );
    };



const Mentalhealth = props =>{
  const [message, setMessage] = useState(0);
  const [sharedScore, setSharedScore] = useState(0);
  const [detail, setdetail] = useState(0);
  const [colortext, setColor] = useState(0);
  const [showAssessment, setShowAssessment] = useState(false);

  const calscore = () => {
    console.log(sharedScore);
    if (sharedScore < 7) {
      setMessage('ระดับน้อยมาก')
      setdetail('ไม่มีอาการของโรคซึมเศร้าหรือมีอาการของโรคซึมเศร้า')
      setColor('#52B788')
    }
    else if (sharedScore <= 12){
      setMessage('ระดับน้อย')
      setdetail('มีอาการของโรคซึมเศร้า ')
      setColor('#83B752')
    }
    else if (sharedScore <= 18){
      setMessage('ระดับปานกลาง')
      setdetail('มีอาการของโรคซึมเศร้า ')
      setColor('#E39113')
    }
    else{
      setMessage('ระดับรุนแรง')
      setdetail('มีอาการของโรคซึมเศร้า ')
      setColor('#ED1D1D')
    }
    setShowAssessment(true);
  };
  useEffect(() => {
    console.log(message);
  }, [message]);
  useEffect(() => {
    console.log(detail);
  }, [detail]);
  useEffect(() => {
    console.log(colortext);
  }, [colortext]);


    return (
        <div className='sizepage' >

            {showAssessment ? (
              <div style={{height:"100vh"}}>
                
                <br/><br/><br/><br/><span className="close" onClick={() => (setShowAssessment(false))}>&times;</span>
                <br/>
                <div className='popup'>
                  <div className='mentalhealth'>
                    ผลการประเมิน
                  </div>
                  <div>
                    <br/><br/>{detail}<div style={{color:colortext}}>{message}</div>
                  </div>
                </div>
              </div>
                
            
            ) : (
              <div style={{display: "flex", flexDirection: "column"}}>
                <div>
                    <div className='mentalhealth'> 
                        <br/><br/>แบบประเมินโรคซึมเศร้าด้วย 9 คำถาม (9Q)
                    </div> 
                    <div className='texttime'>( ในช่วง 2 สัปดาห์ที่ผ่านมา รวมทั้งวันนี้ )</div>
                    <div className='textform'>
                        <br/><div className='question'>&emsp;&emsp;1.&nbsp;&nbsp;เบื่อ ไม่สนใจอยากทำอะไร</div><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={1}/>

                        <br/><p className='question'>&emsp;&emsp;2.&nbsp;&nbsp;ไม่สบายใจ ซึมเศร้า ท้อแท้</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={2}/>

                        <br/><p className='question'>&emsp;&emsp;3.&nbsp;&nbsp;หลับยากหรือหลับๆตื่นๆหรือหลับมากไป</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={3}/>

                        <br/><p className='question'>&emsp;&emsp;4.&nbsp;&nbsp;เหนื่อยง่ายหรือไม่ค่อยมีแรง</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={4}/>
                        
                        <br/><p className='question'>&emsp;&emsp;5.&nbsp;&nbsp;เบื่ออาหารหรือกินมากเกินไป</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={5}/>
                        
                        <br/><p className='question'>&emsp;&emsp;6.&nbsp;&nbsp;รู้สึกไม่ดีกับตัวเอง คิดว่าตัวเองล้มเหลว หรือครอบครัวผิดหวัง</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={6}/>
                        
                        <br/><p className='question'>&emsp;&emsp;7.&nbsp;&nbsp;สมาธิไม่ดี เวลาทำอะไร เช่น ดูโทรทัศน์ ฟังวิทยุ หรือทำงานที่ต้องใช้ความตั้งใจ</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={7}/>
                        
                        <br/><div className='question'>&emsp;&emsp;8.&nbsp;&nbsp;พูดช้าทำอะไรช้าลงจนคนอื่นสังเกตเห็นได้ หรือกระสับกระส่ายไม่สามารถอยู่นิ่งได้เหมือนที่เคยเป็น</div><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={8}/>
                        
                        <br/><p className='question'>&emsp;&emsp;9.&nbsp;&nbsp;คิดทำร้ายตนเอง หรือคิดว่าถ้าตายไปคงจะดี</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={9}/>
                        
                        <br/><br/><button className='resultbtn' onClick={calscore}>ประเมินผล</button>
                    </div> 
                </div>
              </div>
            )}
            </div>
        
    );
    
};

export default Mentalhealth