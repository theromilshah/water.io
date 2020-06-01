import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Input from './input'

import { bugs, website, server } from "variables/general.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    //


                            let d=new Date();
                            var month=d.getMonth();
                            let day=d.getDay();
                            let hours=d.getHours();
                            let min=d.getMinutes();
                            let sec=d.getSeconds();
                            let date=d.getDate();
                            switch(month){
                                case 0 :month='January';break;
                                case 1 :month='February';break;
                                case 2 :month='March';break;
                                case 3 :month='April';break;
                                case 4 :month='May';break;
                                case 5 :month='June';break;
                                case 6 :month='July';break;
                                case 7 :month='August';break;
                                case 8 :month='September';break;
                                case 9 :month='October';break;
                                case 10:month='November';break;
                                case 11:month='December';break;
                                default:break;
                            }
                            switch(day){
                                case 0:day='Sunday';break;
                                case 1:day='Monday';break;
                                case 2:day='Tuesday';break;
                                case 3:day='Wednesday';break;
                                case 4:day='Thursday';break;
                                case 5:day='Friday';break;
                                case 6:day='Saturday';break;
                            }
                            
                            if(hours<10)
                            {
                                    hours = "0"+hours;
                            }
                            if(min<10)
                            {
                                    min = "0"+min;
                            }
                            if(sec<10)
                            {
                                    sec = "0"+sec;
                            }
              



    //
    const { classes } = this.props;
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
                <h3 className={classes.cardTitle}>
                  5
                </h3>
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
                  As on {hours}:{min} {day}, {date}{date==1?('st'):(date==2?('nd'):(date==3?('rd'):('th')))} {month} 
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={["ID", "Name", "Surname", "E-Mail"]}
                  tableData={[
                    ["1", "Sanjay", "Nayak", "sanjayjnayak99@gmail.com"],
                    ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                    ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                    ["4", "Philip Chaney", "$38,735", "Korea, South"]
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer 
        direction="row"
      justify="center"
      alignItems="center"
            >
                  <GridItem xs={12} sm={12} md={6}>
                    <Input/>
                  </GridItem>
        </GridContainer>
        <GridContainer>
        <GridItem xs={24} sm={24} md={6}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
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
              <p className={classes.cardCategory}>
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
        {/*<GridItem xs={12} sm={12} md={4}>
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
              <h4 className={classes.cardTitle}>Water Level Forecast (Ground Water)</h4>
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
                </GridItem>*/}
      </GridContainer>
        <GridContainer>
        <GridItem xs={24} sm={24} md={6}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
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
              <p className={classes.cardCategory}>
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
        {/*<GridItem xs={12} sm={12} md={4}>
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
              <h4 className={classes.cardTitle}>Water Level Forecast (Ground Water)</h4>
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
              </GridItem>*/}
      </GridContainer>
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
              <h4 className={classes.cardTitle}>Water Level Forecast (Ground Water)</h4>
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

export default withStyles(dashboardStyle)(Dashboard);


{/*  


  <GridItem xs={12} sm={12} md={6}>
            <CustomTabs
              title="Notifications:"
              headerColor="primary"
              tabs={[
                {
                  tabName: "Bugs",
                  tabIcon: BugReport,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0, 3]}
                      tasksIndexes={[0, 1, 2, 3]}
                      tasks={bugs}
                    />
                  )
                },
                {
                  tabName: "Website",
                  tabIcon: Code,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0]}
                      tasksIndexes={[0, 1]}
                      tasks={website}
                    />
                  )
                },
                {
                  tabName: "Server",
                  tabIcon: Cloud,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[1]}
                      tasksIndexes={[0, 1, 2]}
                      tasks={server}
                    />
                  )
                }
              ]}
            />
          </GridItem>


*/}
