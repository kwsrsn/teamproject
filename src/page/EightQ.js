import React from 'react';
import './style.css';
import useState from 'react';
import Component from 'react';



class MyButton extends React.Component {
    // handleClick() {
    //   alert('Button Clicked!');
    // }
    constructor(props) {
        super(props);
        this.state = {
          count: 0,
        };
      }

    haveCount = () => {
        this.setState({ count: this.state.count + 1 });
        console.log(this.state.count );
      };
    
      // เพิ่มเมทอดเพื่อลดค่านับ
      nothaveCount = () => {
        this.setState({ count: this.state.count + 0 });
        console.log(this.state.count );
      };
  
    render() {
      return (
        <div class="inline">
            <button className='formbutton' onClick={this.haveCount}>มี</button>&emsp;&emsp;&emsp;
            <button className='formbutton' onClick={this.nothaveCount}>ไม่มี</button>&emsp;&emsp;&emsp;
            
        </div>
        
      );
    }
  };

const EightQ = props => {
    return (
        <div className='sizepage' >
            <div style={{display: "flex", flexDirection: "column"}}>
            
                <div>
                    <div className='mentalhealth'> 
                        <br/><br/>แบบประเมินการฆ่าตัวตาย 8 คำถาม (8Q)
                    </div> 
                    <div className='textform'>
                        <br/><p className='question'>&emsp;&emsp;1.&emsp;คิดอยากตาย หรือ คิดว่าตายไปจะดีกว่า</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;2.&emsp;อยากทำร้ายตัวเอง หรือ ทำให้ตัวเองบาดเจ็บ</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;3.&emsp;คิดเกี่ยวกับการฆ่าตัวตาย (ในช่วง 1 เดือนที่ผ่านมา รวมวันนี้)</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;4.&emsp;</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;5.&emsp;</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;6.&emsp;</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;7.&emsp;</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;8.&emsp;</p><br/>
                        <MyButton />
                        <br/><p className='question'>&emsp;&emsp;9.&emsp;</p><br/>
                        <MyButton />
                        <br/>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default EightQ