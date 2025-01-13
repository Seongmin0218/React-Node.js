import React from "react";

class Customer extends React.Component {
    render() {
        return(
            <div>
                <CustomerProfile id={this.props.id} img={this.props.img}/>
                <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} />
            </div>
        )
    }
}

class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="profile" />
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <P>{this.props.birthday}</P>
                <P>{this.props.gender}</P>
            </div>
        )
    }
}

export default Customer;