import React from "react";
import {connect} from "react-redux";
import App from './App';
import {loadApp, autosave} from "../reducers/app_thunks";
import * as api from "../utils/firebase";
import {currentSelector} from "../selectors/selectors";

const mapStateToProps = (state, ownProps) => {
        return {
        };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadWorkspaceData: (id, current = '_', currentIO = '1') => {
            dispatch(loadApp(id, current, currentIO));
        },
        autosave: () => {
            // console.log('save', true);
            dispatch(autosave());
        },
        setCurrent: (current) => {
        },
        navigateToCurrent: (current) => {
            const {match} = ownProps,
                {params} = match || {},
                {codeId} = params;

            ownProps.history.push(`/${codeId}/${current}`);
        },
        onNavigateHome: () => {
            const {match} = ownProps,
                {params} = match || {},
                {codeId} = params;

            setTimeout(() => {
                ownProps.history.push(`/${codeId}/_`);
            });
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
