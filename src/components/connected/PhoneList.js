import { connect } from "react-redux";
import PhoneList from "../../layout_modules/phone-list/PhoneList";
import * as selectors from "../../selectors/selectors";
import { patchEditorState } from "../../reducers/appState/appState";
import { refreshBoxes } from "../../reducers/app_thunks";
import * as api from "../../utils/firebase";

const mapStateToProps = (state, ownProps) => {
    return {
        resolutions: selectors.resolutionsSelector(state),
        currentResolutionId: selectors.currentResolutionIdSelector(state)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: resolution => {
            api.setResolutionId(resolution.id);

            dispatch(
                patchEditorState({
                    currentResolutionId: resolution.id
                })
            );

            dispatch(refreshBoxes());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhoneList);
