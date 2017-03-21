import React, {Component} from "react";
import {connect} from "react-redux";

class UserDetail extends Component {

    render() {
        if (!this.props.user){
            return (<h3>Select a User...</h3>);
        }
        return (
            <div>
                <img src={this.props.user.thumbnail} alt=""/>
                <h2>{this.props.user.first} {this.props.user.last}</h2>
                <p>Age: {this.props.user.age}</p>
                <p>Description: {this.props.user.description}</p>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);