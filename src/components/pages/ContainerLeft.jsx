import React, { useRef, useState } from 'react'
import InputX from '../miniComponents/InputX'
import "./ContainerLeft.css"
import Button from '../miniComponents/Button'
import { FaBeer } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { FaXTwitter } from 'react-icons/fa6'
import { BiLogoReddit } from 'react-icons/bi'
import { getNotes, signInWithPopupGoogle, XSignInWithEmail } from '../../services/firebase'

function ContainerLeft() {
  const NameRef = useRef()
  const EmailRef = useRef()
  const PasswordRef= useRef()

  const[invalid,setinvalid] = useState(false)

 
  function getEmail(){
    console.log(inputref.current.value)
  }
  function getPassword(){

  }

  function AuthenticateInputs(){
    let name = NameRef.current.value
    let email = EmailRef.current.value
    let password = PasswordRef.current.value

    console.log(name,email,password)
    async function getCorrect(){
      const res = await XSignInWithEmail(email,password)

      if (res.code=="auth/invalid-email")
      {
        setinvalid(true)
      }
    }
    getCorrect()

  }

  return (
    <div className='container'>
        <div className='logincontainer'>
            <h2>Get Started Now</h2>

            {invalid ? <p style={{fontSize:"14px",margin:0,textAlign:"left",color:"red",textDecoration:"bold"}}>invalid email or pass</p>:<h4></h4>}


            <div className="inputtextcontainer" >
                <p style={{fontSize:10,margin:0,textAlign:"initial"}}>Name</p>
                <InputX inputref={NameRef} placeholder="Name"></InputX>
            </div>
            <div className="inputtextcontainer" >
                <p style={{fontSize:10,margin:0,textAlign:"initial"}}>Email address</p>
                <InputX inputref={EmailRef}placeholder="Email"></InputX>
            </div>
            <div className="inputtextcontainer" >
                <p style={{fontSize:10,margin:0,textAlign:"initial"}}>Password</p>
                <InputX inputref={PasswordRef}placeholder="Password" type='password'></InputX>

            </div>
            <div className="check">

              <input type="checkbox">
              </input>
              <label>i agree to <a>Terms&condition</a></label>
            </div>

            <Button text="sign in" onClick={AuthenticateInputs}/>
            <span style={{
              fontSize:9+"px",
              marginTop:20+"px",
              color:"#616362",
              opacity:"50%"
            }} >--------OR----------</span>

            <div className="thirdpartysigninbox-">
              <Button type="icon" IconComponent={FcGoogle} onClick={signInWithPopupGoogle }></Button>
              <Button type="icon" IconComponent={FaXTwitter } onClick={getNotes}></Button>
              {/* <Button type="icon" IconComponent={BiLogoReddit}></Button>
              <Button type="icon" IconComponent={FcGoogle}></Button> */}
              
              </div>
            
        </div>
       

    </div>
  )
}

export default ContainerLeft