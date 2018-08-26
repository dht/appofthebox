import React, { Component } from "react";
import "./ModalData.css";
import Modal from "../Modal";

export class ModalData extends Component {
    state = {
        selectedIcon: "edit"
    };

    componentDidMount() {
        this.timeout = setTimeout(() => {
            this.refs["input"].focus();
        }, 50);
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        const { value } = this.props;
        const { selectedIcon } = this.state;
        return (
            <Modal
                title="Content"
                description="Change the content of the element"
                onSave={() => this.props.onSave(this.refs.input.value)}
                width={400}
                height={106}
            >
                <div className="ModalData-container">
                    <div className="content">
                        <input
                            defaultValue={value}
                            ref="input"
                            type="text"
                            placeholder="text"
                        />
                    </div>
                </div>
            </Modal>
        );
    }
}

export default ModalData;
