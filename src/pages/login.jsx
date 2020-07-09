import React, { Component } from "react";
import UIActions from "../actions/ui.actions";
import { connect } from "react-redux";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.props.dispatch({
            type: UIActions.pathChange,
            path: "/login",
        });
    }
    render() {
        return <div></div>;
    }
}

export default connect()(Login);
