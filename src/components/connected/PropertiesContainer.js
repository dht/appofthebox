import React from "react";
import {connect} from "react-redux";
import Properties from '../../layout_modules/properties/Properties';
import * as selectors from "../../selectors/selectors";
import * as thunks from "../../reducers/app_thunks";

const mapStateToProps = (state, ownProps) => {
    console.log('selectors.propertiesSelector(state) ->', JSON.stringify(selectors.propertiesSelector(state)));
    
    return {
        properties: selectors.propertiesSelector(state)
    };
};


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onValue: (value) => {
            dispatch(thunks.patchProperty(value));
          }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Properties);