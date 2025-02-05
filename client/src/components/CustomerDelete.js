import React from "react";
import { DialogActions } from "@mui/material";
import {Dialog} from "@mui/material";
import {DialogTitle} from "@mui/material";
import {DialogContent} from "@mui/material";
import {TextField} from "@mui/material";
import {Button} from "@mui/material";
import {withStyles} from "@mui/styles";
import {Typography} from "@mui/material";

class CustomerDelete extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    }
    handleClose = () => {
        this.setState({
            open: false
        })
    }

    deleteCustomer(id) {
        const url = '/api/customers/' + id;
        fetch(url, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.props.stateRefresh(); // 상태 갱신
        })
        
    }

    render() {
        return (
        <div>
            <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>삭제</Button>
            <Dialog open={this.state.open} onClose={this.handleClose}>
                <DialogTitle onClose={this.handleClose}>
                    삭제 경고
                </DialogTitle>
                <DialogContent>
                    <Typography gutterButtom>
                        선택한 고객 정보가 삭제됩니다.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={(e) => {this.deleteCustomer(this.props.id)}}>삭제</Button>
                    <Button variant="outlined" color="primary" onClick={(e) => {this.deleteCustomer(this.props.id)}}>닫기</Button>
                </DialogActions>
            </Dialog>
        </div>
        )
    }
}

export default CustomerDelete;