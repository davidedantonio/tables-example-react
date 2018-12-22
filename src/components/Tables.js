import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class Tables extends Component {
  state = {
    tables: []
  };

  componentDidMount() {
    axios.get('http://localhost:3001/tables')
      .then(response => {
        if (response.status === 200) {
          this.setState({tables: response.data});
        }
      })
  }

  render() {
    const { classes } = this.props;
    const { tables } = this.state;

    return (
      <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Seats</TableCell>
            <TableCell align="right">Busy</TableCell>
            <TableCell align="right">Covered</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tables.map(table => {
            return (
              <TableRow key={table._id}>
                <TableCell component="th" scope="row">
                  {table.name}
                </TableCell>
                <TableCell align="right">{table.seats}</TableCell>
                <TableCell align="right">{table.busy ? 'Occupato' : 'Libero'}</TableCell>
                <TableCell align="right">{table.covered}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(Tables);