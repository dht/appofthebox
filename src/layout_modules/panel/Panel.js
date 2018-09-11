import React, { Component } from "react";
import "./Panel.css";
import { Actions } from "../actions/Actions";
import { PanelSettings } from "../panel-settings/PanelSettings";

import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/TabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";
import "rc-tabs/dist/rc-tabs.css";
import Icon from "../icon/Icon";
import Checkbox from "../checkbox/Checkbox";
import IconButton from "../icon-button/IconButton";

export class Panel extends Component {
    state = {
        activeTab: "1"
    };

    render() {
        const { config } = this.props;
        const { activeTab } = this.state;

        return (
            <div className="Panel-container">
                <div className="top handle" />
                <Tabs
                    activeKey={activeTab}
                    defaultActiveKey="1"
                    tabBarGutter={0}
                    renderTabBar={() => <ScrollableInkTabBar />}
                    renderTabContent={() => <TabContent />}
                    tabBarPosition={"bottom"}
                    onChange={key => this.setState({ activeTab: key })}
                >
                    {config.tabs.map(tab => (
                        <TabPane tab={tab.name} key={tab.id}>
                            <div className="tab-inner-page">
                                {tab.content.map((content, index) => (
                                    <div key={index}>
                                        {content.header ? (
                                            <div className="headers">
                                                {content.header}
                                            </div>
                                        ) : null}
                                        <div className="content">
                                            {content.component}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabPane>
                    ))}
                </Tabs>
            </div>
        );
    }
}

/*
 <TabPane tab="Tools" key="1">
                        
                    </TabPane>
                    <TabPane tab="Tree" key="2" disabled={false}>
                        <div className="tab-inner-page">
                            <div className="settings">
                                <div className="headers">Settings</div>
                                <div className="content">
                                    <Checkbox
                                        onClick={() => {}}
                                        checked={true}
                                        label="Simulate titlebar"
                                    />
                                    <Checkbox
                                        onClick={() => {}}
                                        label="Simulate tab"
                                    />
                                    <Checkbox
                                        onClick={() => {}}
                                        label="Simulate list"
                                    />
                                </div>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="Library" key="3" disabled={false}>
                        <div className="tab-inner-page">
                            <div className="actions">
                                <IconButton icon="colorize" label="Colors" />
                                <IconButton icon="view_list" label="Data" />
                                <IconButton icon="color_lens" label="Theme" />
                                <IconButton
                                    icon="cloud_download"
                                    label="Export"
                                />
                            </div>
                        </div>
                    </TabPane>*/

export default Panel;
