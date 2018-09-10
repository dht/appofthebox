// @flow
import React, { Component } from "react";
import "./EventList.css";
import PropTypes from "prop-types";
import classnames from "classnames";

type props = {};

export class EventList<props> extends Component {
    static defaultProps: props = {};

    state = {};

    render() {
        const { timeline } = this.props;

        return (
            <div className="EventList-container">
                <div className="inner">
                    {timeline.map(event => {
                        const className = classnames("event", {
                            selected: event.isCurrent
                        });

                        return (
                            <div key={event.id} className={className}>
                                <div className="id">{event.id}</div>
                                <div className="ts">{event.timeStr}</div>
                                <div className="type">{event.type}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

EventList.contextTypes = {
    i18n: PropTypes.object
};

export default EventList;
