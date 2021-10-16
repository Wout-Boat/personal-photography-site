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

        const list = pages.map((page, index) =>
            <ListItem>
                <Link to={"/" + page} key={Math.random()} ><p>{pageNames[index]}</p></Link><br />
            </ListItem>
        );

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
                    <List>
                        <ListItem onClick={toggleDrawer(false)}>
                            {list}
                        </ListItem>
                    </List>
                </Drawer>

            </NavigationStyles>
        );
    }

}

// const Navigation: React.FC = () => (
//
// <NavigationStyles>
//     // <div className={"row"}>
//     // <div className={'column'}>
//     // <Link to="/kirk2"><p>Kirk 2 ft. DJT Jr.</p></Link>
//     // <Link to="/notproudtobe"><p>Not Proud To Be</p></Link>
//     // <Link to="/prager"><p>Prager</p></Link>
//     // </div>
//     // <div className={'column'}>
//     // <Link to="/climatestrikedenver"><p>Climate Strike Denver</p></Link>
//     // <Link to="/kirk"><p>Kirk 1</p></Link>
//     // <Link to="/butterflypavillion"><p>Butterfly Pavillion</p></Link>
//     // </div>
//     // </div>
//     // </NavigationStyles>
// )

export default Navigation;
