import React, { Component } from 'react';
import {AppBar, Toolbar, createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import Satyameva from '../../images/satyameva.png'
import bapu from '../../images/swatchhata.png'
import logoji from './logo.png'

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
      },
        palette: {
            primary: {
              light: '#757ce8',
              main: '#01579b',
              dark: '#002884',
              contrastText: '#fff',
            },
            secondary: {
              light: '#ff7961',
              main: '#01579b',
              dark: '#ba000d',
              contrastText: '#000',
            },
          },
          overrides:{
            MuiToolbar: {
              regular: {
                '@media (min-width: 600px)': {
                  minHeight: "18px"
                }
              }
            },
            MuiButton:{
              root:{
                minWidth:"30px",
                fontSize:"1vw"
              },
              outlined:{
                  padding:"0.5vw 7px"
              }
            }
          }  

        });

  const styles = theme => ({
    margin: {
      margin: theme.spacing.unit * 2,
      marginRight: theme.spacing.unit * 3,
      display:'flex',
    },
        
  });
  

class NavBar extends Component {


    render() { 
        
        const {classes}=this.props
        return ( 
            <MuiThemeProvider theme={theme}>
                <AppBar position="static" style={{zIndex: 1201}} >
                <Toolbar color="primary" >
                    <img src={Satyameva} width="7%" height="14%"/>
                    <div style={{flexGrow:"1",maxWidth:"83%"}}>
                        <h1 style={{fontSize:"2.5vw",marginTop:"9px",marginBottom:"0px"}}>MINISTRY OF WATER RESOURCES </h1>
                        <h1 style={{fontSize:"1.5vw",margin:"0",marginTop:"-0.2%"}}>(Ground Water Department)</h1>
                        <h1 style={{fontSize:"1.5vw",margin:"0",marginBottom:"8px"}}>जल संसाधन मंत्रालय <span style={{fontSize:"1vw"}}>(भूजल विभाग)</span></h1>
                    </div>


                        <img src={logoji} width="25%" height="12%" />
                        <img src={bapu} width="16%" height="8%" />
                          {/*<Link to="/" style={{textDecoration:"none",color:"#fff",marginTop:"2%",marginRight:"10px"}}>
                              <Button variant="outlined" color="inherit" style={{fontSize:"1vw",width:"5vw"}}>Login</Button>
                          </Link>
                          {/*<Link to="/" style={{textDecoration:"none",color:"#fff",marginTop:"2%"}}> 
                              <Button variant="outlined" color="inherit" className={classes.root}>Sign Up</Button>
                          </Link>
                          <Menu
                          id="simple-menu"
                          // anchorEl={anchorEl}
                          open={this.state.open}
                          onClose={this.handleClose}
                          style={{top: 56,left: 30}}
                            >
                            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                            <MenuItem onClick={this.handleClose}>My account</MenuItem>
                            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                          </Menu> */}
                     
                </Toolbar>
                </AppBar>
            </MuiThemeProvider>
         );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
 
export default withStyles(styles)(NavBar);