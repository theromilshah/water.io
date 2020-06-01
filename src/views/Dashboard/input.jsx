import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  MenuItem,
  TextField,
  MuiThemeProvider,
  createMuiTheme,
  Button
} from "@material-ui/core";
import Files from "../../deep.json";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { updateInputDetails } from "../../actions/inputs";
import { bindActionCreators } from "redux";
import { getPredictedDataForGroundWater } from "../../actions/predictedData";
import { getDepthDataForGroundWater } from "../../actions/predictedData";
import map from "lodash/map";

const theme = createMuiTheme({
  overrides: {
    MuiSelect: {
      selectMenu: {
        width: "30vw"
      }
    }
  }
});

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: "300px"
  }
});

const years = [
  {
    value: "2017",
    label: "2017"
  },
  {
    value: "2018",
    label: "2018"
  },
  {
    value: "2019",
    label: "2019"
  },
  {
    value: "2020",
    label: "2020"
  },
  {
    value: "2021",
    label: "2021"
  },
  {
    value: "2022",
    label: "2022"
  },
  {
    value: "2023",
    label: "2023"
  },
  {
    value: "2024",
    label: "2024"
  },
  {
    value: "2025",
    label: "2025"
  },
  {
    value: "2026",
    label: "2026"
  }
];

const currencies = [
  {
    key: "AN",
    value: "Andaman and Nicobar Islands",
    label: "Andaman and Nicobar Islands"
  },
  {
    key: "AP",
    value: "Andhra Pradesh",
    label: "Andhra Pradesh"
  },
  {
    key: "AR",
    value: "Arunachal Pradesh",
    label: "Arunachal Pradesh"
  },
  {
    key: "AS",
    value: "Assam",
    label: "Assam"
  },
  {
    key: "BR",
    value: "Bihar",
    label: "Bihar"
  },
  {
    key: "CG",
    value: "Chandigarh",
    label: "Chandigarh"
  },
  {
    key: "CH",
    value: "Chhattisgarh",
    label: "Chhattisgarh"
  },
  {
    key: "DH",
    value: "Dadra and Nagar Haveli",
    label: "Dadra and Nagar Haveli"
  },
  {
    key: "DD",
    value: "Daman and Diu",
    label: "Daman and Diu"
  },
  {
    key: "DL",
    value: "Delhi",
    label: "Delhi"
  },
  {
    key: "GA",
    value: "Goa",
    label: "Goa"
  },
  {
    key: "GJ",
    value: "Gujarat",
    label: "Gujarat"
  },
  {
    key: "HR",
    value: "Haryana",
    label: "Haryana"
  },
  {
    key: "HP",
    value: "Himachal Pradesh",
    label: "Himachal Pradesh"
  },
  {
    key: "JK",
    value: "Jammu and Kashmir",
    label: "Jammu and Kashmir"
  },
  {
    key: "JH",
    value: "Jharkhand",
    label: "Jharkhand"
  },
  {
    key: "KA",
    value: "Karnataka",
    label: "Karnataka"
  },
  {
    key: "KL",
    value: "Kerala",
    label: "Kerala"
  },
  {
    key: "LD",
    value: "Lakshadweep",
    label: "Lakshadweep"
  },
  {
    key: "MP",
    value: "Madhya Pradesh",
    label: "Madhya Pradesh"
  },
  {
    key: "MH",
    value: "Maharashtra",
    label: "Maharashtra"
  },
  {
    key: "MN",
    value: "Manipur",
    label: "Manipur"
  },
  {
    key: "ML",
    value: "Meghalaya",
    label: "Meghalaya"
  },
  {
    key: "MZ",
    value: "Mizoram",
    label: "Mizoram"
  },
  {
    key: "NL",
    value: "Nagaland",
    label: "Nagaland"
  },
  {
    key: "OR",
    value: "Odisha",
    label: "Odisha"
  },
  {
    key: "PY",
    value: "Puducherry",
    label: "Puducherry"
  },
  {
    key: "PB",
    value: "Punjab",
    label: "Punjab"
  },
  {
    key: "RJ",
    value: "Rajasthan",
    label: "Rajasthan"
  },
  {
    key: "SK",
    value: "Sikkim",
    label: "Sikkim"
  },
  {
    key: "TN",
    value: "Tamil Nadu",
    label: "Tamil Nadu"
  },
  {
    key: "TS",
    value: "Telangana",
    label: "Telangana"
  },
  {
    key: "TR",
    value: "Tripura",
    label: "Tripura"
  },
  {
    key: "UK",
    value: "Uttar Pradesh",
    label: "Uttar Pradesh"
  },
  {
    key: "UP",
    value: "Uttarakhand",
    label: "Uttarakhand"
  },
  {
    key: "WB",
    value: "West Bengal",
    label: "West Bengal"
  }
];

class Input extends React.Component {
  state = {
    age: "",
    multiline: "Controlled",
    currency: "Maharashtra",
    districts: [],
    year: "2021"
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
    if (name == "currency") this.currencycaller(event.target.value);
    else if (name == "dist") this.distcaller(event.target.value);
  };

  submits = async e => {
    e.preventDefault();
    var state = document.getElementById("outlined-select-currency").value;
    var district = document.getElementById("outlined-select-dist").value;
    var block = document.getElementById("outlined-select-block").value;
    var year = document.getElementById("outlined-select-year").value;
    this.props.updateInputDetails(state, district, block, year);
    this.props.getPredictedDataForGroundWater(state, district, block, year);
    this.props.getDepthDataForGroundWater(state, district, block);
  };

  componentDidMount() {
    let districts = [];
    districts = Files.Worksheet.filter(function(elm) {
      return elm.STATE == "MAHARASHTRA";
    });
    var blocks = Files.Worksheet.filter(function(elm) {
      return elm.DISTRICT == districts[0].DISTRICT;
    });
    this.setState({
      districts,
      blocks,
      dist: districts[0].DISTRICT,
      block: districts[0].BLOCK
    });
  }

  currencycaller = rajya => {
    rajya = rajya.toUpperCase();
    var districts = Files.Worksheet.filter(function(elm) {
      return elm.STATE == rajya;
    });
    var blocks = Files.Worksheet.filter(function(elm) {
      return elm.DISTRICT == districts[0].DISTRICT;
    });
    this.setState({
      districts,
      blocks,
      dist: districts[0].DISTRICT,
      block: districts[0].BLOCK
    });
  };

  distcaller = jilha => {
    jilha = jilha.toUpperCase();
    var blocks = Files.Worksheet.filter(function(elm) {
      return elm.DISTRICT == jilha;
    });
    this.setState({ blocks, block: blocks[0].BLOCK });
  };

  render() {
    const { classes } = this.props;

    let y = null;
    let b = null;

    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Grid container>
            <Grid container>
              <Grid item xs={6} md={6} sm={4}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Select"
                  className={classes.textField}
                  value={this.state.currency}
                  onChange={this.handleChange("currency")}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu
                    }
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
              </Grid>
              <Grid item xs={6} md={6} sm={4}>
                <TextField
                  id="outlined-select-dist"
                  select
                  label="Select"
                  className={classes.textField}
                  value={this.state.dist}
                  onChange={this.handleChange("dist")}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu
                    }
                  }}
                  helperText="Please select your District"
                  margin="normal"
                  variant="outlined"
                >
                  {this.state.districts.map(function(option) {
                    if (y != option.DISTRICT) {
                      y = option.DISTRICT;
                      console.log(option.DISTRICT);
                      return (
                        <MenuItem key={option.DISTRICT} value={option.DISTRICT}>
                          {option.DISTRICT}
                        </MenuItem>
                      );
                    } else return false;
                  })}
                </TextField>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6} md={6} sm={4}>
                <TextField
                  id="outlined-select-block"
                  select
                  label="Select"
                  className={classes.textField}
                  value={this.state.block}
                  onChange={this.handleChange("block")}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu
                    }
                  }}
                  helperText="Please select your Block"
                  margin="normal"
                  variant="outlined"
                >
                  {console.log(this.state.blocks)}
                  {map(this.state.blocks, function(option) {
                    if (b != option.BLOCK) {
                      b = option.BLOCK;
                      console.log(option.DISTRICT);
                      return (
                        <MenuItem key={option.BLOCK} value={option.BLOCK}>
                          {option.BLOCK}
                        </MenuItem>
                      );
                    } else return false;
                  })}
                </TextField>
              </Grid>
              <Grid item xs={6} md={6} sm={4}>
                <TextField
                  id="outlined-select-year"
                  select
                  label="Select"
                  className={classes.textField}
                  value={this.state.year}
                  onChange={this.handleChange("year")}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu
                    }
                  }}
                  helperText="Please select the year"
                  margin="normal"
                  variant="outlined"
                >
                  {years.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </Grid>
        </MuiThemeProvider>
        <Button
          id="submitter"
          onClick={this.submits}
          style={{ backgroundColor: "#007bff", color: "#eee" }}
        >
          Submit
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateInputDetails,
      getPredictedDataForGroundWater,
      getDepthDataForGroundWater
    },
    dispatch
  );

Input.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(Input));
