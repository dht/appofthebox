import React, { Component } from "react";
import "./Modal.css";
import { connect } from "react-redux";
import * as actions from "../../reducers/modal/modal";

export class Modal extends Component {
    state = {};

    keyDown = ev => {
        if (ev.which === 27) {
            this.props.hideModal();
        }
    };

    click = ev => {
        const target = ev.target;

        if (target === this.refs.modal) {
            this.props.hideModal();
        }
    };

    componentWillMount() {
        document.addEventListener("keydown", this.keyDown);
        document.addEventListener("click", this.click);
    }

    componentDidUnmount() {
        document.removeEventListener("keydown", this.keyDown);
        document.removeEventListener("click", this.click);
    }

    style() {
        const { width, height } = this.props;

        let output = {};

        if (width) {
            output["width"] = width + "px";
        }

        if (height) {
            output["height"] = height + "px";
        }

        return output;
    }

    buttonClick = value => {
        if (this.props.onSave) {
            this.props.onSave(value);
        }

        this.props.hideModal();
    };

    render() {
        const { title, description } = this.props;

        const buttonLabel = this.props.onSave ? "Save" : "Done";

        return (
            <div className="Modal-container" ref="modal">
                <div
                    className="modal"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    style={this.style()}
                >
                    <div id="modal-title">{title}</div>
                    <div id="modal-description">{description}</div>
                    {this.props.children}

                    <div className="actions">
                        <button onClick={this.buttonClick}>
                            {buttonLabel}
                        </button>
                    </div>
                    <div className="close" onClick={this.props.hideModal}>
                        <i className="material-icons">close</i>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        hideModal: () => {
            dispatch(actions.hideModal());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);
