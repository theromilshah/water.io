import React, { Component } from 'react';
import { Paper, TextField, Grid, Button, Typography } from '@material-ui/core';
import './signup.css'

class RegForm extends Component {
    state = { data:null,mail:false,names:false,surname:false,pass:false,confirm:false }

    styles={
        paper:{
            paddingTop:40,
            paddingBottom:40,
            borderRadius: 10,
            backgroundColor:"rgba(255,255,255,0.6)"
        },
        outterGrid:{
            paddingTop: 40,
            // backgroundImage: `url("${Bg}")`
        }
    }

    sgnclick=async(e)=>{
        e.preventDefault();
        var fname=document.getElementById('outlined-fname').value
        var lname=document.getElementById('outlined-lname').value
        var mail=document.getElementById('outlined-email').value
        var pass=document.getElementById('outlined-pass').value
        var cpass=document.getElementById('outlined-cpass').value
        console.log(fname)
        console.log(lname)
        console.log(mail)
        console.log(cpass)
        console.log(pass)
            //firstname
        console.log(cpass!=pass)
        if(fname=='')
            this.setState({names:false})
        else
            this.setState({names:true})
            //lname
        if(lname=='')
            this.setState({surname:false})
        else
            this.setState({surname:true})
            //mail
        if(mail==''||!mail.includes('@')||!mail.includes('.'))
            this.setState({mail:false})
        else
            this.setState({mail:true})
            //pass
        if(pass=='')
            this.setState({pass:false})
        else
            this.setState({pass:true})
            //repass
        if(cpass!=pass)
            this.setState({confirm:false})
        else
            this.setState({confirm:true})
        
        if(this.state.mail==true&&this.state.names==true&&this.state.surname==true&&this.state.pass==true&&this.state.confirm==true)
        {
            console.log("inside")
            const res=await fetch('http://localhost:3001/signup',{     ///dont change to axios
            headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            method:"POST",
            body:JSON.stringify({"fname":fname,"lname":lname,"mail":mail,"pass":pass})
            })
            const data=await res.json()
            if(data!=false){
            this.setState({data})

            console.log(this.state.data)
            this.props.history.push('/')
            }
            else
                alert('Already exists')    
            // this.props.history.push('/Error')
        }
        else
        {
            // if(this.state.names==false)
            //     document.querySelector("#wrongsub").textContent="Invalid FirstName"
            // else if(this.state.surname==false)
            //     document.querySelector("#wrongsub").textContent="Invalid LastName"
            if(this.state.mail==false)
                document.querySelector("#wrongsub").textContent="Invalid E-Mail"
            else if(this.state.pass==false)
                document.querySelector("#wrongsub").textContent="Invalid Password"
            else if(this.state.confirm==false)
                document.querySelector("#wrongsub").textContent="Passwords do not match"
            else
                document.querySelector("#wrongsub").textContent="Invalid Attributes"
        }
    }

   

    mailchange=(e)=>{
        if(e.target.value.includes('@')&&e.target.value.includes('.'))
        {
            this.setState({
                name:true
            })
        }
        else
        {
            this.setState({
                name:false
            })
        }
    }



    render() { 
        return ( 
            <React.Fragment >
                <div id="regbg">
                <Grid container direction="row" justify="center" style={this.styles.outterGrid} >

                <Grid item xs={6} style={{marginBottom:"2vw"}}>
                <Paper style={this.styles.paper} >
                    <form action="">
                    <Grid container direction="row" justify="center">
                    <Typography variant="overline" style={{fontSize:"2.5vw", color: "#607d8b"}} >
                    Register
                    </Typography>
                    
                    <Grid item xs={12}>
                    
                    </Grid>
                    <Grid item xs={6}>
                    <TextField
                    fullWidth
                    autoFocus
                    required
                    style={{marginTop:"3vw"}}
                    id="outlined-fname"
                    label="First Name"

                    // value={this.state.name}
                    // onChange={this.namechange}
                    margin="normal"
                    variant="outlined"
                    />
                    </Grid>

                    <Grid item xs={12}>

                    </Grid>

                    <Grid item xs={6}>
                    <TextField
                    fullWidth
                    required
                    id="outlined-lname"
                    label="Last Name"           
                    // onChange={this.surnamechange}
                    margin="normal"
                    variant="outlined"
                    />
                    </Grid>
                    
                    <Grid item xs={12}>

                    </Grid>
                    
                    
                    <Grid item xs={6}>
                    <TextField
                    fullWidth
                    required
                    id="outlined-email"
                    label="Email"           
                    onChange={this.mailchange}
                    margin="normal"
                    variant="outlined"
                    />
                    </Grid>
                    
                    <Grid item xs={12}>

                    </Grid>
                    
                    
                    <Grid item xs={6}>
                    <TextField
                    fullWidth
                    required
                    id="outlined-pass"
                    label="Password" 
                    type="password"
                    // onChange={this.passwordchange}
                    margin="normal"
                    variant="outlined"
                    />
                    </Grid>
                    
                    <Grid item xs={12}>

                    </Grid>
                    
                    
                    <Grid item xs={6}>
                    <TextField
                    fullWidth
                    required
                    id="outlined-cpass"
                    type="password"
                    label="Confirm Password"
                    // onChange={this.repasswordchange}
                    margin="normal"
                    variant="outlined"
                    />
                    </Grid>
                    
                    <Grid item xs={12}>

                    </Grid>
                    
                    
                    
                    <Grid container justify="center">
                        <Grid item xs={12}>
                            <Typography id="wrongsub" variant="subtitle2" style={{fontSize:"1.5vw",marginLeft:"300px",marginTop:"20px",marginBottom:"-20px"}}></Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Button onClick={this.sgnclick} variant="contained" color="primary" style={{marginTop:"3vw"}} >
                            Register
                        </Button>
                    </Grid>
                    </Grid>
                    </form>
                </Paper>
                </Grid>
                </Grid>
                </div>
            </React.Fragment>
         );
        }
    }
//  
export default RegForm;