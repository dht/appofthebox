import React from "react";
import { connect } from "react-redux";
import Panel from "../../layout_modules/panel/Panel";
import * as selectors from "../../selectors/selectors";
import * as thunks from "../../reducers/app_thunks";
import Properties from "./Properties";
import ActionsTools from "./ActionsTools";
import ActionsLibrary from "./ActionsLibrary";
import PanelSettingsTools from "./PanelSettingsTools";
import PanelSettingsTree from "./PanelSettingsTree";

const config = {
    tabs: [
        {
            id: 1,
            name: "Tools",
            content: [
                {
                    component: <ActionsTools />
                },
                {
                    header: "Properties",
                    component: <Properties />
                },
                {
                    header: "Settings",
                    component: <PanelSettingsTools />
                }
            ]
        },
        {
            id: 2,
            name: "Tree",
            content: [
                {
                    header: "Settings",
                    component: <PanelSettingsTree />
                }
            ]
        },
        {
            id: 3,
            name: "Library",
            content: [
                {
                    component: <ActionsLibrary />
                }
            ]
        }
    ]
};

const mapStateToProps = (state, ownProps) => {
    return {
        config,
        element: selectors.elementSelector(state)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addElement: () => {
            dispatch(thunks.addElement("TEXT"));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Panel);
