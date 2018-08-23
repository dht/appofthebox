import React from "react";
import { connect } from "react-redux";
import PhoneList from "./PhoneList";
import { resolutionsSelector } from "../../selectors/selectors";
import { patchEditorState } from "../../reducers/appState/appState";
import { refreshBoxes } from "../../reducers/app_thunks";

const mapStateToProps = (state, ownProps) => {
    return {
        resolutions: resolutionsSelector(state)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: resolution => {
            dispatch(
                patchEditorState({
                    currentResolutionId: resolution.id,
                })
            );

            dispatch(refreshBoxes())
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhoneList);
