import React, { Component } from "react";
import PropTypes from "prop-types";
import colors from "../../src/constants/colors";
import { all } from "@ubeya/client-spark/i18n/index";
import { widthScale } from "../../src/stylesheet_fixes";
import { buildHeadersWithToken } from "@ubeya/client-spark/api/utils/fetch";
import { View, Platform, I18nManager } from "react-native";
import { initStore } from "@ubeya/client-spark/reducers/reducers/store";

import { Provider } from "react-redux";

const blank = store => next => action => next(action);
let store = initStore(null, blank);

const fontFamily = {
    fontFamily: Platform.OS === "ios" ? "Gotham" : "GothamNormal"
};

export class Context extends Component {
    getChildContext = () => {
        const { locale } = this.state;

        return {
            isInternetOn: true,
            locale,
            colors: colors,
            i18n: all[locale],
            fontFamily,
            scale: widthScale || 1,
            token: buildHeadersWithToken(),
            navMethods: {},
            alignStyle: "left", //getLanguageTextAlign(),
            arrowName: locale === "he" ? "arrow-left2" : "arrow-right2",
            materialArrows: {}
        };
    };

    constructor(props) {
        super(props);

        I18nManager.forceRTL(false);

        this.state = {
            locale: props.locale || "en"
        };
    }

    render() {
        return (
            <Provider store={store}>
                <View
                    style={{
                        alignItems: "stretch",
                        justifyContent: "center",
                        flex: 1
                    }}
                >
                    {this.props.children}
                </View>
            </Provider>
        );
    }
}

Context.childContextTypes = {
    isInternetOn: PropTypes.bool,
    locale: PropTypes.string,
    colors: PropTypes.object,
    i18n: PropTypes.object,
    fontFamily: PropTypes.object,
    scale: PropTypes.number,
    alignStyle: PropTypes.string,
    navMethods: PropTypes.object,
    token: PropTypes.string,
    arrowName: PropTypes.string,
    materialArrows: PropTypes.object
};

export default Context;
