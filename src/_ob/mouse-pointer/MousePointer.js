import React, { Component } from "react";
import "./MousePointer.css";
import cursorDefault from "./default.svg";
import BezierEasing from "bezier-easing";
import * as dom from "../dom";

export class MousePointer extends Component {
    state = {};

    changeDestination = (x, y, steps = 200) => {
        this.clear();

        this.steps = steps;
        this.i = 0;
        this.sx = this.x;
        this.sy = this.y;
        this.dx = x - this.x;
        this.dy = y - this.y;

        this.easing = BezierEasing(0.28, 0.45, 0.83, 0.57);
        this.interval = setInterval(this.step, 10);
        this.intervalHover = setInterval(this.hoverCheck, 50);
    };

    clear = () => {
        this.hookHover();
        clearInterval(this.interval);
        clearInterval(this.intervalHover);
        this.hoverCheck();
    };

    step = () => {
        this.i += 1;
        this.x = this.sx + (this.dx * this.i) / this.steps;
        this.y = this.sy + this.dy * this.easing(this.i / this.steps);
        this.refs.img.style.left = this.x + "px";
        this.refs.img.style.top = this.y + "px";

        if (this.i > this.steps) {
            this.clear();
        }
    };

    hoverCheck = () => {
        if (!this.elements) return;

        this.elements.forEach(el => {
            dom.addClassIfInBox(el.el, el.box, this.x, this.y, "hover");
        });
    };

    componentDidMount() {
        this.x = 0;
        this.y = 0;
    }

    hookHover = () => {
        this.elements = Array.prototype.slice
            .call(document.querySelectorAll("[data-hover]"))
            .map(el => {
                return {
                    el: el,
                    box: el.getBoundingClientRect()
                };
            });
    };

    componentWillReceiveProps(props) {
        const { cursor } = props;

        if (cursor !== this.state.cursor) {
            const { duration = 3000 } = cursor;
            this.setState({ cursor });
            // alert(cursor.left + ":" + cursor.top);
            this.changeDestination(cursor.left, cursor.top, duration / 10);
        }
    }

    componentWillUnmount() {
        this.clear();
    }

    render() {
        return (
            <div className="MousePointer-container">
                <div className="left">
                    <div className="top">
                        <img
                            ref="img"
                            src={cursorDefault}
                            style={{ position: "absolute" }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default MousePointer;
