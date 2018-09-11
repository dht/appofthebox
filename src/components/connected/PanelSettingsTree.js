import { connect } from "react-redux";
import PanelSettings from "../../layout_modules/panel-settings/PanelSettings";

const mapStateToProps = (state, ownProps) => {
    const config = {
        settings: [
            {
                id: "simulate_titlebar",
                label: "Simulate titlebar"
            },
            {
                id: "simulate_tab",
                label: "Simulate tab"
            },
            {
                id: "simulate_list",
                label: "Simulate list"
            }
        ]
    };

    return { config };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onToggle: id => {
            console.log("id ->", id);
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PanelSettings);
