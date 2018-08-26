import React, { Component } from "react";
import "./Actions.css";
import { IconButton } from "../icon-button/IconButton";

export class Actions extends Component {
    state = {};

    render() {
        const { config } = this.props;

        return (
            <div className="Actions-container">
                {config.buttons.map(button => (
                    <IconButton
                        key={button.id}
                        icon={button.icon}
                        label={button.label}
                        onClick={() => this.props.onClick(button.id)}
                    />
                ))}
            </div>
        );
    }
}

/*
 <IconButton icon="colorize" label="Colors" />
                                <IconButton icon="view_list" label="Data" />
                                <IconButton icon="color_lens" label="Theme" />
                                <IconButton
                                    icon="cloud_download"
                                    label="Export"
                                />
                                */

export default Actions;
