import { connect } from "react-redux";
import PanelSettings from "../../layout_modules/panel-settings/PanelSettings";

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
            {
                id: "scrollable",
                label: "Is scrollable"
            }
        ]
    };

    return { config };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onToggle: id => {}
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PanelSettings);
