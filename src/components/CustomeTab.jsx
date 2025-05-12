import React from 'react';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box>{children}</Box>}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const CustomeTab = ({ tabsData, tabPanelData }) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: '100%' }} className={'customeTab'}>
            <Box>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {tabsData?.map((data, index) => {
                        return (
                            <Tab disableRipple key={index} label={data} {...a11yProps(index)} />
                        )
                    })}
                </Tabs>
            </Box>
            {tabPanelData?.map((data, index) => {
                return (
                    <CustomTabPanel key={index} value={value} index={index}>
                        {data}
                    </CustomTabPanel>
                )
            })}
        </Box>
    )
}

export default CustomeTab
