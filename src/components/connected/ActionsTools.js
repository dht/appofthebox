import { connect } from "react-redux";
import Actions from "../../layout_modules/actions/Actions";

const config = {
    buttons: [
        {
            id: "text",
            icon: "text_format",
            label: "Text"
        },
        {
            id: "image",
            icon: "image",
            label: "Image"
        },
        {
            id: "view",
            icon: "view_column",
            label: "View"
        },
        {
            id: "placeholder",
            icon: "tab_unselected",
            label: "Placer"
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
        onClick: id => {
            console.log("id ->", id);
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Actions);
