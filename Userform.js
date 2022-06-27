import React, {useState} from 'react'
export default function Userform(){
       const[userName,updateUserName] = useState('userName');
       const[Email,updateEmail] = useState('Email abc@gmail.com');
       const[PhoneNumber,updatePhoneNumber] = useState('100');
    return(
    <div>
         <p>Username {userName}</p>
        <input id="myInput1"onChange={(event)=>{
           let changeUserName =  event.target.value;
           updateUserName(changeUserName);
        }}>
        </input>
        <p>Email {Email}</p>
        <input id="myInput2"onChange={(event)=>{
            let changeEmailid =  event.target.value;
            updateEmail( changeEmailid);
        }}>
        </input>
        <p>PhoneNumber {PhoneNumber} </p>
        <input id="myInput3"onChange={(event)=>{
            let changePhoneNumber =  event.target.value;
            updatePhoneNumber( changePhoneNumber);
        }}></input>

        <button style={{
            'marginBottom':'2em'
        }} onClick={() => {
            (alert`${userName} ${Email} ${PhoneNumber}`)
        }} >submit</button>
    </div>
          )
}