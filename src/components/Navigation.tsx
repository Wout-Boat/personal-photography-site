import React from "react";
import {
    Drawer,
    List,
    ListItem,
    Typography,
} from "@mui/material";
import MenuIcon from "@material-ui/icons/Menu"
import {NavigationStyles} from "../styles/Navigation.styles";
import {Link} from "react-router-dom";
import {NavigationLinkStyles} from "../styles/NavigationLink.styles";

type Props = {
    pages: string[],
    pageNames: string[],
};

type State = {
    left: boolean
};

class Navigation extends React.Component<Props, State> {


    constructor(props: Props) {
        super(props);

        this.state = {
            left: false,
        }
    }


    render() {
        const {pages, pageNames} = this.props;
        const {left} = this.state;

        const toggleDrawer = (open: boolean) => (event: any) => {
            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'shift')) {
                return;
            }

            this.setState({
                left: open,
            });
        }

        return (
            <NavigationStyles>
                <div className={"heading"}>
                    <Typography variant={"h4"} onClick={toggleDrawer(true)} sx={{
                        color: "#f0f0f0",
                    }}>Navigation</Typography>
                    <div className={"icon"}>
                        <MenuIcon fontSize={"large"} color={'inherit'}/>
                    </div>
                </div>

                <Drawer open={left} onClose={toggleDrawer(false)}>
                    <List onClick={toggleDrawer(false)}>
                            {pages.map((page, index) =>
                                <ListItem>
                                    <NavigationLinkStyles>
                                        <p><Link to={"/" + page} key={Math.random()} style={{ textDecoration: 'none' }}>{pageNames[index]}</Link></p>
                                    </NavigationLinkStyles>
                                </ListItem>
                            )};
                    </List>
                </Drawer>

            </NavigationStyles>
        );
    }

}

export default Navigation;
