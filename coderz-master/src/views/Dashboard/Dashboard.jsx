import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import { AccessTime } from "@material-ui/icons";
import { Typography } from "@material-ui/core";
import Accessibility from "@material-ui/icons/Accessibility";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import { connect } from "react-redux";
import Input from "./input";
import "./index.css";
import concat from "lodash/concat";
import getDepthData from "../../services/getDepthData";
import isNil from "lodash/isNil";
import Loading from "./Loading";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      loading: true
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  // componentDidMount(){
  //   this.props
  //   .allUserDetails('sanjayjnayak99@gmail.com', 'nayak')
  //   .then(() => {
  //     console.log("login successful");
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
    
  // }
  render() {
    var delays = 80,
      durations = 500;
    var delays2 = 80,
      durations2 = 500;
    var Chartist = require("chartist");

    const depthData = {
      data: {
        labels: ["70-90", "90-110", "110-130", "130-150", ">150"],
        series: [[12, 17, 7, 17, 23], [10, 7, 5, 20, 35]]
      },
      options: {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
        }),
        low: 0,
        high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      },
      // for animation
      animation: {
        draw: function(data) {
          if (data.type === "line" || data.type === "area") {
            data.element.animate({
              d: {
                begin: 600,
                dur: 700,
                from: data.path
                  .clone()
                  .scale(1, 0)
                  .translate(0, data.chartRect.height())
                  .stringify(),
                to: data.path.clone().stringify(),
                easing: Chartist.Svg.Easing.easeOutQuint
              }
            });
          } else if (data.type === "point") {
            data.element.animate({
              opacity: {
                begin: (data.index + 1) * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: "ease"
              }
            });
          }
        }
      }
    };
    const emailsSubscriptionChart = {
      data: depthData,
      options: {
        axisX: {
          showGrid: false
        },
        low: 0,
        high: 50,
        chartPadding: {
          top: 0,
          right: 5,
          bottom: 0,
          left: 0
        }
      },
      responsiveOptions: [
        [
          "screen and (max-width: 640px)",
          {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function(value) {
                return value[0];
              }
            }
          }
        ]
      ],
      animation: {
        draw: function(data) {
          if (data.type === "bar") {
            data.element.animate({
              opacity: {
                begin: (data.index + 1) * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: "ease"
              }
            });
          }
        }
      }
    };
    const dailySalesChart2 = {
      data: {
        labels: ["70-90", "90-110", "110-130", "130-150", ">150"],
        series: [[12, 17, 7, 17, 23], [10, 7, 5, 20, 35]]
      },
      options: {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
        }),
        low: 0,
        high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      },
      // for animation
      animation: {
        draw: function(data) {
          if (data.type === "line" || data.type === "area") {
            data.element.animate({
              d: {
                begin: 600,
                dur: 700,
                from: data.path
                  .clone()
                  .scale(1, 0)
                  .translate(0, data.chartRect.height())
                  .stringify(),
                to: data.path.clone().stringify(),
                easing: Chartist.Svg.Easing.easeOutQuint
              }
            });
          } else if (data.type === "point") {
            data.element.animate({
              opacity: {
                begin: (data.index + 1) * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: "ease"
              }
            });
          }
        }
      }
    };

    const emailsSubscriptionChart2 = {
      data: {
        labels: ["70-90", "90-110", "110-130", "130-150", ">150"],
        series: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
      },
      options: {
        axisX: {
          showGrid: false
        },
        low: 0,
        high: 50,
        chartPadding: {
          top: 0,
          right: 5,
          bottom: 0,
          left: 0
        }
      },
      responsiveOptions: [
        [
          "screen and (max-width: 640px)",
          {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function(value) {
                return value[0];
              }
            }
          }
        ]
      ],
      animation: {
        draw: function(data) {
          if (data.type === "bar") {
            data.element.animate({
              opacity: {
                begin: (data.index + 1) * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: "ease"
              }
            });
          }
        }
      }
    };

    const completedTasksChart = {
      data: {
        labels: [
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021"
        ],
        series: [[12, 17, 7, 17, 23], [1, 2, 3, 4, 6]]
      },
      options: {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
        }),
        low: 0,
        high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      },
      animation: {
        draw: function(data) {
          if (data.type === "line" || data.type === "area") {
            data.element.animate({
              d: {
                begin: 600,
                dur: 700,
                from: data.path
                  .clone()
                  .scale(1, 0)
                  .translate(0, data.chartRect.height())
                  .stringify(),
                to: data.path.clone().stringify(),
                easing: Chartist.Svg.Easing.easeOutQuint
              }
            });
          } else if (data.type === "point") {
            data.element.animate({
              opacity: {
                begin: (data.index + 1) * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: "ease"
              }
            });
          }
        }
      }
    };

    let d = new Date();
    var month = d.getMonth();
    let day = d.getDay();
    let hours = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let date = d.getDate();
    switch (month) {
      case 0:
        month = "January";
        break;
      case 1:
        month = "February";
        break;
      case 2:
        month = "March";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "August";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "October";
        break;
      case 10:
        month = "November";
        break;
      case 11:
        month = "December";
        break;
      default:
        break;
    }
    switch (day) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        break;
    }

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }


   

    //
    const { classes } = this.props;
    const { loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    completedTasksChart.data.series[0] = concat(
      completedTasksChart.data.series[0],
      this.props.predictedDataState.groundWaterValues
    );

    completedTasksChart.data.series[1] = concat(
      completedTasksChart.data.series[1],
      this.props.predictedDataState.groundWaterValues
    );

    // depthData.data.series = concat(
    //   depthData.data.series,
    //   this.props.predictedDataState.depthValue
    // );

    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>content_copy</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Visitors</p>
                <h3 className={classes.cardTitle}>5</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Total no. of Visitors
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Store />
                </CardIcon>
                <p className={classes.cardCategory}>Comments</p>
                <h3 className={classes.cardTitle}>0</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  From the users
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <Icon>info_outline</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Active Issues</p>
                <h3 className={classes.cardTitle}>0</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <LocalOffer />
                  Tracked from the Ministry
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>Users</p>
                <h3 className={classes.cardTitle}>2</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={24} sm={24} md={12}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>User Stats</h4>
                <p className={classes.cardCategoryWhite}>
                  As on {hours}:{min} {day}, {date}
                  {date == 1
                    ? "st"
                    : date == 2
                      ? "nd"
                      : date == 3
                        ? "rd"
                        : "th"}{" "}
                  {month}
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={["ID", "Name", "Email", "Contact"]}
                  tableData={[
                    ["1", "Dakota Rice", "$36,738", "Niger"],
                    ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                    ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                    ["4", "Philip Chaney", "$38,735", "Korea, South"]
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer direction="row" justify="center" alignItems="center">
          <Typography variant="h2">INPUTS</Typography>
          <GridItem xs={24} sm={24} md={24}>
            <Input />
          </GridItem>
        </GridContainer>
        <Typography variant="h2" style={{ marginTop: "30px" }}>
          DEEP TUBEWELLS
        </Typography>
        <GridContainer>
          <GridItem xs={24} sm={24} md={6}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={depthData.data}
                  type="Line"
                  options={depthData.options}
                  listener={depthData.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Depth Trend (Line Graph)</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    {/*<ArrowUpward className={classes.upArrowCardCategory} /> 55%*/}
                  </span>{" "}
                  Change in depth of wells
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={24} sm={24} md={6}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Depth Trend (Bar Graph)</h4>
                <p className={classes.cardCategory}>Change in depth of wells</p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <Typography variant="h2">SHALLOW TUBEWELLS</Typography>
        <GridContainer id="dad">
          <GridItem xs={24} sm={24} md={6}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart2.data}
                  type="Line"
                  options={dailySalesChart2.options}
                  listener={dailySalesChart2.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Depth Trend (Line Graph)</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    {/*<ArrowUpward className={classes.upArrowCardCategory} /> 55%*/}
                  </span>{" "}
                  Change in depth of wells
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={24} sm={24} md={6}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart2.data}
                  type="Bar"
                  options={emailsSubscriptionChart2.options}
                  responsiveOptions={emailsSubscriptionChart2.responsiveOptions}
                  listener={emailsSubscriptionChart2.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Depth Trend (Bar Graph)</h4>
                <p className={classes.cardCategory}>Change in depth of wells</p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <div id="andha">
            Your current request for shallow tubewells cannot be processed due
            to the insufficient data. Please try after some days.
          </div>
        </GridContainer>
        <Typography variant="h2">WATER LEVEL FORECAST</Typography>
        <GridContainer>
          <GridItem xs={24} sm={24} md={12}>
            <Card chart>
              <CardHeader color="danger">
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>
                  Water Level Forecast (Ground Water)
                </h4>
                <p className={classes.cardCategory}>
                  Forecast of Ground Water for the next period
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ inputState, predictedDataState }) => ({
  inputState,
  predictedDataState
});

export default connect(
  mapStateToProps,
  null
)(withStyles(dashboardStyle)(Dashboard));
