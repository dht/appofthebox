import React, { Component } from "react";
import "./Panel.css";
import { IconButton, Checkbox } from "../UI/UI";
import { Properties } from "../Properties/Properties";
import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/TabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";
import "rc-tabs/dist/rc-tabs.css";

export class Panel extends Component {
  state = {
    activeTab: "1"
  };

  render() {
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
          <TabPane tab="Tools" key="1">
            <div className="tab-inner-page">
              <div className="actions">
                <IconButton icon="text_format" label="Text" />
                <IconButton icon="image" label="Image" />
                <IconButton icon="view_column" label="View" />
                <IconButton icon="tab_unselected" label="Placer" />
              </div>
              <div className="properties">
                <div className="headers">Properties</div>
                <div className="content">
                  <Properties />
                </div>

                <div className="settings">
                  <div className="headers">Settings</div>
                  <div className="content">
                    <Checkbox
                      onClick={() => {}}
                      checked={true}
                      label="Simulate titlebar"
                    />
                    <Checkbox onClick={() => {}} label="Simulate tab" />
                    <Checkbox onClick={() => {}} label="Simulate list" />
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Tree" key="2" disabled={false}>
            <div className="tab-inner-page">gerg</div>
          </TabPane>
          <TabPane tab="Library" key="3" disabled={false}>
            <div className="tab-inner-page">
            <div className="actions">
                <IconButton icon="colorize" label="Colors" />
                <IconButton icon="view_list" label="Data" />
                <IconButton icon="color_lens" label="Theme" />
                <IconButton icon="cloud_download" label="Export" />
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Panel;
