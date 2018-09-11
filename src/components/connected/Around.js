import { connect } from "react-redux";
import Around from "../../layout_modules/around/Around";
import { selectedBoxSelector } from "../../selectors/selectors";

const mapStateToProps = (state, ownProps) => {
    const mode = ownProps.mode;

    const data = selectedBoxSelector(state);

    return {
        elementId: data.elementId,
        box: data.box
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        method: () => {}
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Around);
