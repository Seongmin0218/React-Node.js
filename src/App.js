import React, {Component} from 'react';
import Customer from './components/Customer';
import './App.css';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { withStyles } from '@mui/styles';

const styles = (theme) => ({
  root: {
    width: '100%',
    padding: theme.spacing * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
{
  'id': '1',
  'image': 'https//placeimg.com/64/64/any',
  'name': '홍길동',
  'birthday': 20020218,
  'gender': 'male',
},
{
  'id': '2',
  'image': 'https//placeimg.com/64/64/any',
  'name': '김철수',
  'birthday': 20030916,
  'gender': 'male',
}
] //배열로 저장되는 고객정보

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              customers.map(c => { //map함수로 여러 고객정보를 불러올 수 있음
                return (
                  <Customer
                    key={c.id}
                    id={c.id}
                    image={c.image}
                    name={c.name}
                    birthday={c.birthday}
                    gender={c.gender}
                  />
                )
              })
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
