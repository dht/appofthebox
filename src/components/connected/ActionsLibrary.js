import { connect } from "react-redux";
import Actions from "../../layout_modules/actions/Actions";

const config = {
    buttons: [
        {
            id: "colors",
            icon: "colorize",
            label: "Colors"
        },
        {
            id: "data",
            icon: "view_list",
            label: "Data"
        },
        {
            id: "theme",
            icon: "color_lens",
            label: "Theme"
        },
        {
            id: "export",
            icon: "cloud_download",
            label: "Export"
        }
    ]
};

const mapStateToProps = (state, ownProps) => {
    return {
        config
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: id => {}
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Actions);
