import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {grey} from "@mui/material/colors";
import {Avatar, Box, Button, Card, Icon, Stack, Typography, Divider} from "@mui/material";
import {Add} from "@mui/icons-material";

class Country extends Component {
    state = {
        name: 'Nauru',
        capitol: 'Yaren District',
        flag: 'http://worldometers.info/img/flags/nr-flag.gif',
        gold: 0,
    }

    handleClick = () => {
        this.setState({ gold: this.state.gold + 1 } )
    }

    render() {
        return (
            <Card className="Country" align="center" >
                <Box sx={{ p: 2, display: 'flex' }}>
                    <Avatar variant="rounded" src={this.state.flag} className="CountryFlag"  />
                    <Stack spacing={0.5} alignItems="left" className="CountryName">
                        <Typography fontWeight={700}>{this.state.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                            {this.state.capitol}
                        </Typography>
                    </Stack>
                </Box>
                <Divider />
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 2, py: 1, bgcolor: 'background.default' }}>
                    <Stack direction="column" alignItems="center" justifyContent="space-between">
                        <Avatar sx={{ color: 'black', bgcolor: 'gold' }} >
                            {this.state.gold}
                        </Avatar>
                        <Typography fontWeight={400}>Gold Medals</Typography>
                    </Stack>
                    <Divider />
                    <Button variant="contained" className='IncrMedalButtom' onClick={ this.handleClick } >
                        <Icon><Add fontSize='medium' /></Icon>Increment Medal Count
                    </Button>
                </Stack>
            </Card>
        );
    }
}

export default Country
