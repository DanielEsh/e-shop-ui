import React, {useState} from "react";
import { Meta, Story } from "@storybook/react";

import Tab from "./Tab";
import TabsBar from "./TabsBar";

export default {
    title: 'Example/Tabs',
    component: TabsBar,
    subcomponents: {Tab},
} as Meta;

export const HorizontalTabs = () => {
    const [activeTab, changeActiveTab] = useState('cards');

    const handleTabClick = (value) => changeActiveTab(value);

    return (
        <>
            <TabsBar>
                <Tab
                    isActive={ activeTab === 'cards' }
                    onClick={ () => handleTabClick('cards') }
                >
                    Cards
                </Tab>
                <Tab
                    isActive={ activeTab === 'list' }
                    onClick={ () => handleTabClick('list') }
                >
                    List
                </Tab>
            </TabsBar>


            { activeTab === 'cards' && <div>Cards</div> }
            { activeTab === 'list' && <div>List</div> }
        </>

    )
}

export const VerticalTabs = () => {
    const [activeTab, changeActiveTab] = useState('cards');

    const handleTabClick = (value) => changeActiveTab(value);

    return (
        <>
            <TabsBar direction={ "vertical" }>
                <Tab
                    isActive={ activeTab === 'cards' }
                    onClick={ () => handleTabClick('cards') }
                >
                    Cards
                </Tab>
                <Tab
                    isActive={ activeTab === 'list' }
                    onClick={ () => handleTabClick('list') }
                >
                    List
                </Tab>
                <Tab
                    isActive={ activeTab === 'viewOnMap' }
                    onClick={ () => handleTabClick('viewOnMap') }
                >
                    View on Map
                </Tab>
            </TabsBar>


            { activeTab === 'cards' && <div>Cards</div> }
            { activeTab === 'list' && <div>List</div> }
            { activeTab === 'viewOnMap' && <div>viewOnMap</div> }
        </>

    )
}

export const DisabledTabs = () => {
    const [activeTab, changeActiveTab] = useState('cards');

    const handleTabClick = (value) => changeActiveTab(value);

    return (
        <>
            <TabsBar direction={ "vertical" }>
                <Tab
                    isActive={ activeTab === 'cards' }
                    onClick={ () => handleTabClick('cards') }
                >
                    Cards
                </Tab>
                <Tab
                    isActive={ activeTab === 'list' }
                    onClick={ () => handleTabClick('list') }
                >
                    List
                </Tab>
                <Tab
                    isActive={ activeTab === 'viewOnMap' }
                    isDisabled
                    onClick={ () => handleTabClick('viewOnMap') }
                >
                    View on Map
                </Tab>
            </TabsBar>


            { activeTab === 'cards' && <div>Cards</div> }
            { activeTab === 'list' && <div>List</div> }
            { activeTab === 'viewOnMap' && <div>viewOnMap</div> }
        </>

    )
}

export const SuccessTabs = () => {
    const [activeTab, changeActiveTab] = useState('cards');

    const handleTabClick = (value) => changeActiveTab(value);

    return (
        <>
            <TabsBar
                direction="vertical"
                theme="success"
            >
                <Tab
                    isActive={ activeTab === 'cards' }
                    onClick={ () => handleTabClick('cards') }
                >
                    Cards
                </Tab>
                <Tab
                    isActive={ activeTab === 'list' }
                    onClick={ () => handleTabClick('list') }
                >
                    List
                </Tab>
                <Tab
                    isActive={ activeTab === 'viewOnMap' }
                    isDisabled
                    onClick={ () => handleTabClick('viewOnMap') }
                >
                    View on Map
                </Tab>
            </TabsBar>


            { activeTab === 'cards' && <div>Cards</div> }
            { activeTab === 'list' && <div>List</div> }
            { activeTab === 'viewOnMap' && <div>viewOnMap</div> }
        </>

    )
}
