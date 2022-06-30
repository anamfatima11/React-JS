import React from "react";

class UserInfoByClass extends React.Component {
    constructor(){
        super();
        this.state = {
            username: 'Anam', 
            email: 'anam@tekisky.com',
            phonenumber: '9289994397'
        }
    }
    componentDidMount(){
        console.log('Running componentDidMount')
    }
shouldComponentUpdate(){
    console.log('Running shouldComponentUpdate');
    return false;
}
componentDidUpdate(){
    console.log('Running ComponentDidUpdate')
}
    render(){
        return(
        <>
            <p>This is Class Component</p>
            <p>username{this.state.username}</p>
            <input id='myInput1' onChange={(event) => {
                let changeUserName = event.target.value;
                this.setState({username:changeUserName})
            }}></input>

 <p> Email{ this.state.email}</p>
 <input id='myInput2' onChange={(event) => {
    let changeEmailid = event.target.value;
    this.setState({email:changeEmailid})
            }}>
            </input>
            <p>PhoneNumber {this.state.phonenumber}</p>
            <input id='myInput3' onChange={(event) =>{
            let changePhoneNumber = event.target.value;
            this.setState({phonenumber:changePhoneNumber})
        }}>
            </input>
         </>
        )
    }
}
export default UserInfoByClass;





































































































































































