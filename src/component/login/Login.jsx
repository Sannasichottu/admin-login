    import React from 'react'
    import './login.css'
    import {FaUserCircle} from 'react-icons/fa'
    import {MdWifiPassword} from 'react-icons/md'

    export default function Login() {
      return (
        <div className='container'>
            <div className='header'>
                <div className='text'>
                    Welcome
                </div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
            <div className='input'>
                <FaUserCircle className='icon' />
                <input type='text' placeholder='User Name' />
                </div> 
                <div className='input'>
               <MdWifiPassword className='icon' />
                <input type='password' placeholder='Password' />
                </div>
            </div>
            <div className='submit-container'>
                <div className='submit'>
                    Log In  <span> 😊</span>
                </div>
            </div>
             
            </div>
            
       
      )
    }
    