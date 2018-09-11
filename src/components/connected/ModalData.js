import { connect } from "react-redux";
import ModalData from "../../layout_modules/modal-data/ModalData";

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
)(ModalData);
