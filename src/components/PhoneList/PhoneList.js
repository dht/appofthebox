import React, { Component } from "react";
import "./PhoneList.css";
import { PhonesArrUnique } from "./phones";

export class PhoneList extends Component {
    state = {};

    renderItem(resolution) {
        const { phone } = resolution || {},
            { imageName = "", name = "" } = phone || {};

        return (
            <div
                className="phone"
                key={resolution.id}
                onClick={() => this.props.onClick(resolution)}
            >
                <div
                    className="image"
                    style={{
                        backgroundImage: `url(/images/${imageName})`
                    }}
                />
                <div className="name">{name}</div>
                <div className="viewport">
                    {resolution.viewport.x}x{resolution.viewport.y}
                </div>
                <div className="pixels">
                    {resolution.pixels.x}x{resolution.pixels.y}
                </div>
                {resolution.popularity ? (
                    <div className="popularity">{resolution.popularity}</div>
                ) : null}
            </div>
        );
    }

    render() {
        const { resolutions } = this.props;

        return (
            <div className="PhoneList-container">
                <div className="inner">
                    {resolutions.map(resolution => this.renderItem(resolution))}
                </div>
            </div>
        );
    }
}

export default PhoneList;
