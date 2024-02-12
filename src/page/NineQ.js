import React,{useState, useEffect}  from 'react';
import './style.css';

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
        <div>
          
          {buttonData.map((button) => (
        <button
          key={button.id}
          onClick={() => handleButtonClick(button)}
          className="formbutton"
          style={{
            marginLeft:"30px", marginRight:"30px",
            backgroundColor: selectedButton === button.id ? '#fce58e' : '#f6fef9',
            color: selectedButton === button.id ? '#27495c' : '#27495c',
          }}
        >
          {button.name}
        </button>
      ))}
        </div>
      );
    };

// const handleAddScore = props => {
//   const [sharedScore, setSharedScore] = useState(0);
//   return(
//   alert('คะแนนของคุณ: ' (sharedScoreScore)););
// };

const Mentalhealth = props =>{
  const [sharedScore, setSharedScore] = useState(0);

    return (
        <div className='sizepage' >
            <div style={{display: "flex", flexDirection: "column"}}>
            
                <div>
                    <div className='mentalhealth'> 
                        <br/><br/>แบบประเมินโรคซึมเศร้าด้วย 9 คำถาม (9Q)
                    </div> 
                    <div className='textform'>
                        <br/><p className='question'>&emsp;&emsp;1.&emsp;เบื่อ ไม่สนใจอยากทำอะไร</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={1}/>

                        <br/><p className='question'>&emsp;&emsp;2.&emsp;ไม่สบายใจ ซึมเศร้า ท้อแท้</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={2}/>

                        <br/><p className='question'>&emsp;&emsp;3.&emsp;หลับยากหรือหลับๆตื่นๆหรือหลับมากไป</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={3}/>

                        <br/><p className='question'>&emsp;&emsp;4.&emsp;เหนื่อยง่ายหรือไม่ค่อยมีแรง</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={4}/>
                        
                        <br/><p className='question'>&emsp;&emsp;5.&emsp;เบื่ออาหารหรือกินมากเกินไป</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={5}/>
                        
                        <br/><p className='question'>&emsp;&emsp;6.&emsp;รู้สึกไม่ดีกับตัวเอง คิดว่าตัวเองล้มเหลว หรือครอบครัวผิดหวัง</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={6}/>
                        
                        <br/><p className='question'>&emsp;&emsp;7.&emsp; สมาธิไม่ดี เวลาทำอะไร เช่น ดูโทรทัศน์ ฟังวิทยุ หรือทำงานที่ต้องใช้ความตั้งใจ</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={7}/>
                        
                        <br/><p className='question'>&emsp;&emsp;8.&emsp;พูดช้าทำอะไรช้าลงจนคนอื่นสังเกตเห็นได้ หรือกระสับกระส่ายไม่สามารถอยู่นิ่งได้เหมือนที่เคยเป็น</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={8}/>
                        
                        <br/><p className='question'>&emsp;&emsp;9.&emsp;คิดทำร้ายตนเอง หรือคิดว่าถ้าตายไปคงจะดี</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={9}/>
                        
                        <br/><br/><button className='resultbtn'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
    
};

export default Mentalhealth