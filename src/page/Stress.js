import React,{useState, useEffect}  from 'react';
import './style.css';

const MyButton = ({ sharedScore, setSharedScore, questionId}) => {

    const [selectedButton, setSelectedButton] = useState(null);
    const [previousSelectedButton, setPreviousSelectedButton] = useState(null);
  
  
    const buttonData = [
      { id: 1, value: 0 , name: '1'},
      { id: 2, value: 1 , name: '2'},
      { id: 3, value: 2 , name: '3'},
      { id: 4, value: 3 , name: '4'},
      { id: 5, value: 4 , name: '5'},
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
            className="buttonstress"
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

       


const Stress = props => {
  const [message, setMessage] = useState(0);
  const [detail, setdetail] = useState(0);
  const [colortext, setColor] = useState(0);
  const [sharedScore, setSharedScore] = useState(0);
  const [showAssessment, setShowAssessment] = useState(false);
  //const [selectedButton, setSelectedButton] = useState(null);

  const calscore = () => {
    // if (setSelectedButton(false)) {
    //   alert("pls")
    // }
    console.log(sharedScore);
    if (sharedScore <= 23) {
      setMessage('ท่านมีความเครียดอยู่ในระดับน้อย')
      setdetail('และหายไปได้ในระยะเวลาสั้น ๆ เป็นความเครียดที่เกิดขึ้นได้ในชีวิตประจำวันและสามารถปรับตัวกับสถานการณ์ต่าง ๆ ได้อย่างเหมาะสม ความเครียดในระดับนี้ถือว่ามีประโยชน์ในการดำเนินชีวิตประจำวัน เป็นแรงจูงใจในที่นำไปสู่ความสำเร็จในชีวิตได้')
      setColor('#52B788')
    }
    else if (sharedScore <= 41){
      setMessage('ท่านมีความเครียดในระดับปานกลาง')
      setdetail('เกิดขึ้นได้ในชีวิตประจำวันเนื่องจากมีสิ่งคุกคามหรือ เหตุการณ์ที่ทำให้เครียด อาจรู้สึกวิตกกังวลหรือกลัว ถือว่าอยู่ในเกณฑ์ปกติ ความเครียดระดับนี้ไม่ก่อให้เกิดอันตรายหรือเป็นผลเสียต่อการดำเนินชีวิต ท่านสามารถผ่อนคลายความเครียดด้วยการทำกิจกรรมที่เพิ่มพลัง เช่น ออกกำลังกาย เล่นกีฬา ทำสิ่งที่สนุกสนานเพลิดเพลิน เช่น ฟังเพลง อ่านหนังสือ ทำงานอดิเรก หรือพูดคุยระบายความไม่สบายใจกับผู้ที่ไว้วางใจ')
      setColor('#83B752')
    }
    else if (sharedScore <= 61){
      setMessage('ท่านมีความเครียดในระดับสูง ')
      setdetail('เป็นระดับที่ท่านได้รับความเดือนร้อนจากสิ่งต่าง ๆ หรือเหตุการณ์รอบตัว ทำให้วิตกกังวล กลัว รู้สึกขัดแย้งหรืออยู่ในสถานการณ์ที่แก้ไข จัดการปัญหานั้นไม่ได้ ปรับความรู้สึกด้วยความลำบากจะส่งผลต่อการใช้ชีวิตประจำวัน และการเจ็บป่วย เช่น ความดันโลหิตสูง เป็นแผลในกระเพาะอาหาร ฯลฯ สิ่งที่ท่านต้องรีบทำเมื่อมีความเครียดในระดับนี้คือ คลายเครียดด้วยวิธีที่ทำได้ง่ายแต่ได้ผลดีคือ การฝึกหายใจ คลายเครียด พูดคุยระบายความเครียดกับผู้ไว้วางใจ หาสาเหตุหรือปัญหาที่ทำให้เครียดและหาวิธีแก้ไขหากท่านไม่สามารถจัดการคลายเครียดด้วยตนเองได้ ควรปรึกษากับผู้ให้การปรึกษาในหน่วยงานต่าง ๆ')
      setColor('#E39113')
    }
    else{
      setMessage('ท่านมีความเครียดในระดับรุนแรง ')
      setdetail('เป็นความเครียดระดับสูงที่เกิดต่อเนื่องหรือท่านกำลังเผชิญกับวิกฤตของชีวิต เช่น เจ็บป่วยรุนแรง เรื้อรังมีความพิการ สูญเสียคนรัก ทรัพย์สิน หรือ สิ่งที่รัก ความเครียดระดับนี้ส่งผลทำให้เจ็บป่วยทางกายและสุขภาพจิต ชีวิตไม่มีความสุข ความคิดฟุ้งซ่าน การตัดสินใจไม่ดี ยับยั้งอารมณ์ไม่ได้ ความเครียดระดับนี้ถ้าปล่อยไว้จะเกิดผลเสียทั้งต่อตนเองและคนใกล้ชิด ควรได้รับการ ช่วยเหลือจากผู้ให้การปรึกษาอย่างรวดเร็ว เช่น ทางโทรศัพท์ หรือผู้ให้การปรึกษาในหน่วยงานต่าง ๆ')
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
            <div style={{display: "flex", flexDirection: "column"}}>

            {showAssessment ? (
              <div style={{height:"100vh"}}>
                
                <br/><br/><br/><br/><span className="close" onClick={() => (setShowAssessment(false))}>&times;</span>
                <br/>
                <div className='popup'>
                  <div className='mentalhealth'>
                    ผลการประเมิน
                  </div>
                  <div>
                    <br/><br/><div style={{color:colortext}}> {message}</div><br/>{detail}
                  </div>
                    
                </div>
              </div>
                
            
            ) : (
              <div>
                    <div className='mentalhealth'> 
                        <br/><br/>แบบวัดความเครียด กรมสุขภาพจิต (SPST - 20)
                    </div> 
                    <div className='texttime'>( ในระยะ 6 เดือนที่ผ่านมา )</div>
                    <div className='textstress'>
                        <br/>ระดับความเครียด 1 หมายถึง ไม่รู้สึกเครียด
                        <br/>ระดับความเครียด 2 หมายถึง รู้สึกเครียดเล็กน้อย
                        <br/>ระดับความเครียด 3 หมายถึง รู้สึกเครียดปานกลาง
                        <br/>ระดับความเครียด 4 หมายถึง รู้สึกเครียดมาก
                        <br/>ระดับความเครียด 5 หมายถึง รู้สึกเครียดมากที่สุด
                    </div>
                    <div className='textform'>
                        <br/><p className='question'>&emsp;&emsp;1.&nbsp;&nbsp;กลัวทำงานผิดพลาด</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={1}/>

                        <br/><p className='question'>&emsp;&emsp;2.&nbsp;&nbsp;ไปไม่ถึงเป้าหมายที่วางไว้</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={2}/>

                        <br/><p className='question'>&emsp;&emsp;3.&nbsp;&nbsp;ครอบครัวมีความขัดแย้งกันในเรื่องเงินหรือเรื่องงานในบ้าน</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={3}/>

                        <br/><p className='question'>&emsp;&emsp;4.&nbsp;&nbsp;เป็นกังวลกับเรื่องสารพิษหรือมลภาวะในอากาศ น้ำ เสียง และดิน</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={4}/>

                        <br/><p className='question'>&emsp;&emsp;5.&nbsp;&nbsp;รู้สึกว่าต้องแข่งขันหรือเปรียบเทียบ</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={5}/>

                        <br/><p className='question'>&emsp;&emsp;6.&nbsp;&nbsp;เงินไม่พอใช้จ่าย</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={6}/>

                        <br/><p className='question'>&emsp;&emsp;7.&nbsp;&nbsp;กล้ามเนื้อตึงหรือปวด</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={7}/>

                        <br/><p className='question'>&emsp;&emsp;8.&nbsp;&nbsp;ปวดหัวจากความตึงเครียด</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={8}/>

                        <br/><p className='question'>&emsp;&emsp;9.&nbsp;&nbsp;ปวดหลัง</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={9}/>

                        <br/><p className='question'>&emsp;&emsp;10.&nbsp;&nbsp;ความอยากอาหารเปลี่ยนแปลง</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={10}/>

                        <br/><p className='question'>&emsp;&emsp;11.&nbsp;&nbsp;ปวดศีรษะข้างเดียว</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={11}/>

                        <br/><p className='question'>&emsp;&emsp;12.&nbsp;&nbsp;รู้สึกวิตกกังวล</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={12}/>

                        <br/><p className='question'>&emsp;&emsp;13.&nbsp;&nbsp;รู้สึกคับข้องใจ</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={13}/>

                        <br/><p className='question'>&emsp;&emsp;14.&nbsp;&nbsp;รู้สึกโกรธ หรือหงุดหงิด</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={14}/>

                        <br/><p className='question'>&emsp;&emsp;15.&nbsp;&nbsp;รู้สึกเศร้า</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={15}/>

                        <br/><p className='question'>&emsp;&emsp;16.&nbsp;&nbsp;ความจำไม่ดี</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={16}/>

                        <br/><p className='question'>&emsp;&emsp;17.&nbsp;&nbsp;รู้สึกสับสน</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={17}/>

                        <br/><p className='question'>&emsp;&emsp;18.&nbsp;&nbsp;ตั้งสมาธิลำบาก</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={18}/>

                        <br/><p className='question'>&emsp;&emsp;19.&nbsp;&nbsp;รู้สึกเหนื่อยง่าย</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={19}/>

                        <br/><p className='question'>&emsp;&emsp;20.&nbsp;&nbsp;เป็นหวัดบ่อย ๆ</p><br/>
                        <MyButton sharedScore={sharedScore} setSharedScore={setSharedScore} questionId={20}/>

                        <br/><br/><button className='resultbtn' onClick={calscore}>ประเมินผล</button>
                  </div> 
                </div>
                        
            )}
            </div>
        </div>        
    );
};

export default Stress