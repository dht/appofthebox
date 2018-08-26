import React, { Component } from "react";
import "./ModalIconLibrary.css";
import Modal from "../Modal";
import icons from "../../../constants/icons";

export class ModalIconLibrary extends Component {
    state = {
        selectedIcon: "edit"
    };

    render() {
        const { selectedIcon } = this.state;
        return (
            <Modal
                title="Icon selection"
                description="select an icon from the list"
            >
                <div className="ModalIconLibrary-container">
                    <div className="content">
                        {icons.map(icon => (
                            <div
                                className="icon"
                                key={icon}
                                onMouseOver={() =>
                                    this.setState({ selectedIcon: icon })
                                }
                                onClick={() =>
                                    this.props.onDone({ icon: icon })
                                }
                            >
                                <i className="material-icons">{icon}</i>
                            </div>
                        ))}
                    </div>

                    <div className="preview">
                        <i className="material-icons">{selectedIcon}</i>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default ModalIconLibrary;
