import { Link } from "react-router-dom";
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

export function Dredmor() {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <main>
            <Link to={"/"}>Give me my dinos back!</Link>
            <Tabs
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
                <TabPanel>These kind of dictate every interaction</TabPanel>
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
        </main>
    );
}
