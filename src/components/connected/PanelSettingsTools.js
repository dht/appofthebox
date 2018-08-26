import React from "react";
import {connect} from "react-redux";
import PanelSettings from '../../layout_modules/panel-settings/PanelSettings';

const mapStateToProps = (state, ownProps) => {
    const config = {
        settings: [
            {
                id: "clickable",
                label: "Is clickable"
            },
            {
                id: "visible",
                label: "Is visible"
            },
        ]
    };

    return {config};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onToggle: (id) => {
            console.log('id ->', id);
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PanelSettings);