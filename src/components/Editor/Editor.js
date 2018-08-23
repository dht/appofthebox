import React, { Component } from "react";
import "./Editor.css";
import Draggable from "react-draggable";
import Panel from "../Panel/Panel";
import Element from "../Element/ElementContainer";
import Around from "../Around/AroundContainer";

export class Editor extends Component {
    state = {
        resolution: {
            phone: {
                name: ""
            }
        }
    };

    componentDidMount() {
        const { resolution } = this.props;
        this.setState({ resolution });
    }

    componentWillReceiveProps(props) {
        const { phone, resolution } = props;

        if (phone && phone !== this.state.phone) {
            this.setState({ phone });
        }

        if (resolution && resolution !== this.state.resolution) {
            this.setState({ resolution });
        }
    }

    render() {
        const { resolution } = this.state,
            { phone, viewport } = resolution || {},
            { name } = phone || {},
            { x, y } = viewport || {};

        return (
            <div className="Editor-container">
                <div className="canvas" style={{ width: x, height: y }}>
                    <div className="phone-name">{name}</div>
                    <div className="phone-viewport">
                        {x}x{y}
                    </div>
                    <Element id={1} />
                    <Around mode="HOVER" />
                    <Around mode="SELECTED" />
                </div>

                <Draggable defaultPosition={{ x: 50, y: -50 }}>
                    <div>
                        <Panel />
                    </div>
                </Draggable>
            </div>
        );
    }
}

export default Editor;
