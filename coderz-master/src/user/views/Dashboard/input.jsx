import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {MenuItem,TextField,MuiThemeProvider,createMuiTheme} from '@material-ui/core';


const theme = createMuiTheme({
  overrides:{
    MuiSelect:{
      selectMenu:{
          width:"30vw"
          }
      },
    }
  })

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width:"300px"
    },
  });
  
  const currencies = [
    {
    "key": "AN",
    "value": "Andaman and Nicobar Islands",
    "label": "Andaman and Nicobar Islands"
    },
    {
    "key": "AP",
    "value": "Andhra Pradesh",
    "label": "Andhra Pradesh"
    },
    {
    "key": "AR",
    "value": "Arunachal Pradesh",
    "label": "Arunachal Pradesh"
    },
    {
    "key": "AS",
    "value": "Assam",
    "label": "Assam"
    },
    {
    "key": "BR",
    "value": "Bihar",
    "label": "Bihar",
    },
    {
    "key": "CG",
    "value": "Chandigarh",
    "label": "Chandigarh",
    },
    {
    "key": "CH",
    "value": "Chhattisgarh",
    "label": "Chhattisgarh",
    },
    {
    "key": "DH",
    "value": "Dadra and Nagar Haveli",
    "label": "Dadra and Nagar Haveli",
    },
    {
    "key": "DD",
    "value": "Daman and Diu",
    "label": "Daman and Diu",
    },
    {
    "key": "DL",
    "value": "Delhi",
    "label": "Delhi"
    },
    {
    "key": "GA",
    "value": "Goa",
    "label": "Goa",
    },
    {
    "key": "GJ",
    "value": "Gujarat",
    "label": "Gujarat",
    },
    {
    "key": "HR",
    "value": "Haryana",
    "label": "Haryana",
    },
    {
    "key": "HP",
    "value": "Himachal Pradesh",
    "label": "Himachal Pradesh",
    },
    {
    "key": "JK",
    "value": "Jammu and Kashmir",
    "label": "Jammu and Kashmir",
    },
    {
    "key": "JH",
    "value": "Jharkhand",
    "label": "Jharkhand",
    },
    {
    "key": "KA",
    "value": "Karnataka",
    "label": "Karnataka",
    },
    {
    "key": "KL",
    "value": "Kerala",
    "label": "Kerala",
    },
    {
    "key": "LD",
    "value": "Lakshadweep",
    "label": "Lakshadweep",
    },
    {
    "key": "MP",
    "value": "Madhya Pradesh",
    "label": "Madhya Pradesh",
    },
    {
    "key": "MH",
    "value": "Maharashtra",
    "label": "Maharashtra",
    },
    {
    "key": "MN",
    "value": "Manipur",
    "label": "Manipur",
    },
    {
    "key": "ML",
    "value": "Meghalaya",
    "label": "Meghalaya",
    },
    {
    "key": "MZ",
    "value": "Mizoram",
    "label": "Mizoram",
    },
    {
    "key": "NL",
    "value": "Nagaland",
    "label": "Nagaland",
    },
    {
    "key": "OR",
    "value": "Odisha",
    "label": "Odisha",
    },
    {
    "key": "PY",
    "value": "Puducherry",
    "label": "Puducherry",
    },
    {
    "key": "PB",
    "value": "Punjab",
    "label": "Punjab",
    },
    {
    "key": "RJ",
    "value": "Rajasthan",
    "label": "Rajasthan",
    },
    {
    "key": "SK",
    "value": "Sikkim",
    "label": "Sikkim",
    },
    {
    "key": "TN",
    "value": "Tamil Nadu",
    "label": "Tamil Nadu",
    },
    {
    "key": "TS",
    "value": "Telangana",
    "label": "Telangana",
    },
    {
    "key": "TR",
    "value": "Tripura",
    "label": "Tripura",
    },
    {
    "key": "UK",
    "value": "Uttar Pradesh",
    "label": "Uttar Pradesh",
    },
    {
    "key": "UP",
    "value": "Uttarakhand",
    "label": "Uttarakhand",
    },
    {
    "key": "WB",
    "value": "West Bengal",
    "label": "West Bengal",
    }
    ]
  


class Input extends React.Component{
    
    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'Maharashtra',
      };
    
      handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

    render(){


          const { classes } = this.props;


        return(
            <div>
              <MuiThemeProvider theme={theme}>
                  <TextField
                  id="outlined-select-currency"
                  select
                  label="Select"
                  className={classes.textField}
                  value={this.state.currency}
                  onChange={this.handleChange('currency')}
                  SelectProps={{
                      MenuProps: {
                      className: classes.menu,
                      },
                  }}
                  helperText="Please select your State"
                  margin="normal"
                  variant="outlined"
                  >
                  {currencies.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                      {option.label}
                      </MenuItem>
                  ))}
                  </TextField>   
                  <TextField
                  id="outlined-select-currency"
                  select
                  label="Select"
                  className={classes.textField}
                  value={this.state.currency}
                  onChange={this.handleChange('currency')}
                  SelectProps={{
                      MenuProps: {
                      className: classes.menu,
                      },
                  }}
                  helperText="Please select your Block"
                  margin="normal"
                  variant="outlined"
                  >
                  {currencies.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                      {option.label}
                      </MenuItem>
                  ))}
                  </TextField>   
                </MuiThemeProvider>
            </div> 
        )
    }
}


Input.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Input);