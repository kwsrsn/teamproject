import React,{useState, useEffect} from 'react';
import './style.css';

const MyButton = ({ sharedScore, setSharedScore, questionId}) => {

  const [selectedButton, setSelectedButton] = useState(null);
  const [previousSelectedButton, setPreviousSelectedButton] = useState(null);


  const buttonData = [
    { id: 1, value: 0 , name: 'ไม่มี'},
    { id: 2, value: 1 , name: 'มี'}
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
            backgroundColor: selectedButton === button.id ? '#417a5e' : '#f6fef9',
            color: selectedButton === button.id ? '#f6fef9' : '#27495c',
          }}
        >
          {button.name}
        </button>
      ))}
        </div>
      );
    };

const EightQ = props => {
    const [sharedScore, setSharedScore] = useState(0);
    return (
        <div className='sizepage' >
            <div style={{display: "flex", flexDirection: "column"}}>
            
                <div>
                    <div className='mentalhealth'> 
                        <br/><br/>แบบประเมินการฆ่าตัวตาย 8 คำถาม (8Q)
                    </div> 
                    <div className='textform'>
                        <br/><p className='question'>&emsp;&emsp;1.&emsp;คิดอยากตาย หรือ คิดว่าตายไปจะดีกว่า</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={1}/>

                        <br/><p className='question'>&emsp;&emsp;2.&emsp;อยากทำร้ายตัวเอง หรือ ทำให้ตัวเองบาดเจ็บ</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={2}/>

                        <br/><p className='question'>&emsp;&emsp;3.&emsp;คิดเกี่ยวกับการฆ่าตัวตาย (ในช่วง 1 เดือนที่ผ่านมา รวมวันนี้)</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={3}/>

                        <br/><p className='question'>&emsp;&emsp;4.&emsp;</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={4}/>

                        <br/><p className='question'>&emsp;&emsp;5.&emsp;</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={5}/>
                        
                        <br/><p className='question'>&emsp;&emsp;6.&emsp;</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={6}/>
                        
                        <br/><p className='question'>&emsp;&emsp;7.&emsp;</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={7}/>
                        
                        <br/><p className='question'>&emsp;&emsp;8.&emsp;</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={8}/>
                        
                        <br/><p className='question'>&emsp;&emsp;9.&emsp;</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={9}/>
                        
                        <br/>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default EightQ