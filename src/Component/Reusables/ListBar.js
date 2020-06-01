import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import {AppBar,Tabs,Tab,Typography,Button} from '@material-ui/core';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const theme=createMuiTheme({
    overrides:{
        MuiAppBar:{
            colorPrimary:{
                backgroundColor:"rgb(0, 69, 124)"
            },
            positionStatic:{
                flexDirection:"row"
        }
        },
        MuiTabs:{
            root:{
                minHeight:"10px",
                width:"85%"
            },
            fixed:{
                width:"85%"
            },
            flexContainer:{
                width:"85%"
            }
        },
        MuiTab:{
            labelContainer:{
                padding:"0.2vw 0.2vw"
            },
            root:{
                fontSize:"1.1vw",
                minHeight:"3vw"
            }
        },
        MuiButton:{
            outlined:{
                padding:"0.2px 0.2px"
            },
            root:{
                minWidth:"20px"
            },
            outlined:{
                border:"none"
            }
        },
    }
})

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "rgb(1,87,155)",
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };


  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
            <AppBar position="static">
            <Tabs value={value} onChange={this.handleChange}>
              <Link onClick={()=>{this.setState({value:0})}} to="/" style={{textDecoration:"none",color:"#fff"}}>
                <Tab label="Home" />
              </Link>
              <Link onClick={()=>{this.setState({value:1})}} to="/tender" style={{textDecoration:"none",color:"#fff"}}>
                <Tab label="Tender" />
              </Link>
              <Link onClick={()=>{this.setState({value:2})}} to="/About" style={{textDecoration:"none",color:"#fff"}}>
                <Tab label="About Us" />
              </Link>
            </Tabs>
            <a  href="user/login" style={{textDecoration:"none",color:"#fff"}}>
                <Button variant="outlined" color="inherit" style={{fontSize:"1vw",width:"5vw",float:"left",marginTop:"0.3vw"}}>Login</Button>
            </a>
            <a href="user/signup" style={{textDecoration:"none",color:"#fff"}}>
                <Button variant="outlined" color="inherit" style={{fontSize:"1vw",width:"5vw",float:"left",marginTop:"0.3vw"}}>SignUp</Button>
            </a>
            </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);