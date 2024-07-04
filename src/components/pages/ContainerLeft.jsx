import React, { useRef } from 'react'
import InputX from '../miniComponents/InputX'
import "./ContainerLeft.css"
import Button from '../miniComponents/Button'
import { FaBeer } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { FaXTwitter } from 'react-icons/fa6'
import { BiLogoReddit } from 'react-icons/bi'

function ContainerLeft() {
  const NameRef = useRef()
  const EmailRef = useRef()
  const PasswordRef= useRef()


 
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


  }

  return (
    <div className='container'>
        <div className='logincontainer'>
            <h2>Get Started Now</h2>


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
              <Button type="icon" IconComponent={FcGoogle}></Button>
              <Button type="icon" IconComponent={FaXTwitter }></Button>
              {/* <Button type="icon" IconComponent={BiLogoReddit}></Button>
              <Button type="icon" IconComponent={FcGoogle}></Button> */}
              
              </div>
            
        </div>
       

    </div>
  )
}

export default ContainerLeft