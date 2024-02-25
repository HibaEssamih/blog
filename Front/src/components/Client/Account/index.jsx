import React from 'react'
import { AccountInfo } from './AccountInfo'
import { SaveList } from './SaveList'
import { MyOrders } from './MyOrders'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ChangePassword } from './ChangePassword';

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
            {value === index && (
                <Box sx={{ p: 4 ,paddingX:'0px'}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const index = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div class="mt-14 sm:mt-20 px-3 md:px-9">
                <div class="max-w-4xl mx-auto">
                    <div class="max-w-2xl">
                        <h2 class="text-3xl xl:text-4xl font-semibold">Account</h2>
                        <span class="block mt-4 text-neutral-500 text-base sm:text-lg">
                            <span class="text-slate-900 font-semibold">Enrico Cole,</span> ciseco@gmail.com · Los Angeles, CA
                        </span>
                    </div>
                    <hr class="mt-10 border-slate-200" />
                    <Box sx={{ width: '100%', padding:'0px' }}>
                        <Box sx={{ borderBottom: 1, overflow:'auto',borderColor: 'divider' }} >
                            <Tabs value={value}  onChange={handleChange}  variant="scrollable"  scrollButtons="auto"  aria-label="scrollable auto tabs example" >
                                <Tab sx={{ paddingY: {md:'30px', xs:'25px'}, fontSize: '16px', textTransform:'capitalize' }} label="Account info" {...a11yProps(0)} />
                                <Tab sx={{ paddingY: {md:'30px', xs:'25px'}, fontSize: '16px', textTransform:'capitalize' }} label="Save lists" {...a11yProps(1)} />
                                <Tab sx={{ paddingY: {md:'30px', xs:'25px'}, fontSize: '16px', textTransform:'capitalize' }} label="My order" {...a11yProps(2)} />
                                <Tab sx={{ paddingY: {md:'30px', xs:'25px'}, fontSize: '16px', textTransform:'capitalize' }} label="Change Password" {...a11yProps(3)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel  value={value} index={0}>
                            <AccountInfo />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <SaveList />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <MyOrders />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={3}>
                            <ChangePassword />
                        </CustomTabPanel>
                    </Box>
                </div>

            </div>
        </>
    )
}



export default index