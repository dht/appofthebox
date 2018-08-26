import React, { Component } from "react";
import "./PanelSettings.css";
import Checkbox from "../checkbox/Checkbox";

export class PanelSettings extends Component {
    state = {};

    render() {
        const { config } = this.props;

        return (
            <div className="PanelSettings-container">
                {config.settings.map(setting => (
                    <Checkbox
                        onClick={() => this.props.toggle(setting.id)}
                        checked={setting.checked}
                        label={setting.label}
                    />
                ))}
            </div>
        );
    }
}

export default PanelSettings;
