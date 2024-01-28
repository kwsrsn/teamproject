import React from 'react';
import './style.css'

const Contact = props => {
    return (
        <div className='sizehome'> 
            <div className='mentalhealth'> 
                <br/><br/>ติดต่อสอบถาม/แจ้งปัญหาการใช้งาน
            </div> 

            <div className='Contact-Report'>
                <div className='contact0'>
                    <br/><br/>Contact
                    <div className='contact1'>
                        <br/>0xx-xxx-xxxx<br/>คลินิค.....<br/>
                        0xx-xxx-xxxx<br/>คลินิค.....
                    </div>
                </div>
                <div className='contact0'>
                    <br/><br/>Report problem<br/>
                    <form>
                        <label>
                            <input 
                                type="text" 
                                name="name" 
                                className='formcontact'
                                placeholder="ชื่อ" 
                                style={{width:"500px"}}
                             />
                        </label><br/>

                        <label>
                            <input 
                                type="text" 
                                name="name" 
                                className='formcontact'
                                placeholder="เบอร์โทร" 
                                style={{width:"230px",marginRight:"15px"}}
                            />
                        </label>

                        <label>
                            <input 
                                type="text" 
                                name="email" 
                                className='formcontact'
                                placeholder="Email" 
                                style={{width:"230px"}}
                            />
                        </label><br/>

                        <label>
                            <input 
                                type="text" 
                                name="email" 
                                className='formcontact'
                                placeholder="รายละเอียด" 
                                style={{width:"500px", height:"120px"}}
                            />
                        </label><br/>

                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div> 
        </div>
    );
};
export default Contact