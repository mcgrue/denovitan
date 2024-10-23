import { Link as _link } from "react-router-dom";
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

export function Dredmor() {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <Tabs
            classID="tabContent"
            selectedIndex={tabIndex}
            onSelect={(index: number) => setTabIndex(index)}
            disableLeftRightKeys={true}
            disableUpDownKeys={true}
        >
            <TabList>
                <Tab>Items</Tab>
                <Tab>Crafts</Tab>
                <Tab>Encrusts</Tab>
                <Tab>Skills</Tab>
                <Tab>Spells</Tab>
                <Tab>Monsters</Tab>
                <Tab>Stats</Tab>
                <Tab>Templates</Tab>
                <Tab>Meta</Tab>
                <Tab>Search</Tab>
                <Tab>About</Tab>
                <Tab>Mods</Tab>
            </TabList>
            <TabPanel>The Items'd be here, but INVENTORY FULL</TabPanel>
            <TabPanel>Craftily Crafted Craftings</TabPanel>
            <TabPanel>I said ENCRUSTS, not UNCRUSTABLES</TabPanel>
            <TabPanel>Please place skillpoints here</TabPanel>
            <TabPanel>Magic Schmagic, just use fireball</TabPanel>
            <TabPanel>Their only crime is being ugly...</TabPanel>
            <TabPanel>
                <Tabs>
                    <TabList>
                        <Tab>Damage</Tab>
                        <Tab>Resistance</Tab>
                        <Tab>Primary</Tab>
                        <Tab>Secondary</Tab>
                    </TabList>
                    <TabPanel>these hurt you</TabPanel>
                    <TabPanel>these make it hurt less</TabPanel>
                    <TabPanel>these affect sec. stats</TabPanel>
                    <TabPanel>these more specific</TabPanel>
                </Tabs>
            </TabPanel>
            <TabPanel>
                These are where the magic happens, literally
            </TabPanel>
            <TabPanel>Some people call this "Miscellanea"</TabPanel>
            <TabPanel>
                Ask and you shall receive. Unless it's pewter.
            </TabPanel>
            <TabPanel>
                This looks like a great place to place my own info
            </TabPanel>
            <TabPanel>Enable, disable and add mods you'd like.</TabPanel>
        </Tabs>
    );
}
