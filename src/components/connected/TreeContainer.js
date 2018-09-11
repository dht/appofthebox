import { connect } from "react-redux";
import Tree from "../../layout_modules/tree/Tree";

const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        method: () => {}
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tree);
