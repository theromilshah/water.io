import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Acon from './download-button.png'


const theme=createMuiTheme({
  overrides:{
    MuiTableCell:{
      head:{
        fontSize:"30px"
      }
    }
  },
})

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({

  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    marginTop:0,
    marginBottom:0,
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(name, calories) {
  id += 1;
  return { id, name, calories };
}

const rows = [
    createData('Draft RRs for the recruitment to the posts of Scientist ‘F and Scientist ‘G’ in the Central Soil & Materials Research Station, New Delhi, under the Ministry of Water Resources, RD & GR : Stake holders can mail their comments to etwo-mowr[at]nic[dot]in', 'http://mowr.gov.in/sites/default/files/RR_CWPRS_SC-F-G_Draft_Feb2019.pdf', 25),
createData('Draft RRs for the recruitment to the posts of Scientist ‘F and Scientist ‘G’ in the Central Water and Power Research Station, Pune, under the Ministry of Water Resources, RD & GR : Stake holders can mail their comments to etwo-mowr[at]nic[dot]in', 452, 25.0),
createData('Jal Charcha Monthly Magazine of Ministry of Water Resources, RD & GR', 262, 16.0),
createData('Amendment of Recruitment Regulations (RRs) for the Group \'B\' Posts in Brahmaputra Board - Comments on revised draft RRs', 159, 6.0),
createData('Guidelines to regulate and control Ground Water Extraction in India', 356, 16.0),
createData('Year End Review - 2018: Ministry of Water Resources, River Development and Ganga Rejuvenation', 408, 3.2),
createData('Amendment of Recruitment Rules for the Non-Statutory Group \'A\' Posts in Brahmaputra Board - comments of stakeholders invited on revised draft', 237, 9.0),
createData('Hydro-Meteorological Data Dissemination Policy, 2018', 375, 0.0),
createData('Operational Guidelines for Pradhan MantriKrishiSinchaiYojana(PMKSY) HarKhetKoPani (HKKP) - Ground Water Irrigation', 518, 26.0),
createData('1st International Conference on “Sustainable Water Management” (10-11 December 2018, Chandigarh, India), organized by Bhakra Beas Management Board (BBMB) under the aegis of National Hydrology Project (NHP), Ministry of Water Resources, River Development ', 392, 0.2),
];

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={theme}>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow style={{height:"70px",fontSize:"40px"}}>
            <CustomTableCell>Title</CustomTableCell>
            <CustomTableCell align="right">Download</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow className={classes.row} key={row.id}>
              <CustomTableCell component="th" scope="row">
                {row.name}
              </CustomTableCell>
              <CustomTableCell align="right"><a target="_blank" href={row.calories}><img width="20" height="20" style={{marginLeft:"60px"}} src={Acon}/></a></CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </MuiThemeProvider>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);