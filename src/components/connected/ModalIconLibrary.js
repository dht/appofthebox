import { connect } from "react-redux";
import ModalIconLibrary from "../../layout_modules/modal-icon-library/ModalIconLibrary";

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
)(ModalIconLibrary);
