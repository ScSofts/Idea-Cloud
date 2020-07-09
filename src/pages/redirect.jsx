import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import UIActions from "../actions/ui.actions";
import isLogin from "../lib/checkLogin";

class RedirectPage extends Component {
    static propTypes = {
        history: PropTypes.any.isRequired,
    };
    /**
     *
     * @param {React.Props<propTypes>} props
     */
    constructor(props) {
        super(props);
        this.state = {};
        this.props.dispatch({
            type: UIActions.pathChange,
            path: "/redirect",
        });
    }
    render() {
        if (isLogin) {
            this.props.history.push("/login");
        }
        return <div></div>;
    }
}

export default connect()(withRouter(RedirectPage));
