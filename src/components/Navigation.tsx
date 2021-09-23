import React from "react";
import {NavigationStyles} from "../styles/Navigation.styles";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => (
    <NavigationStyles>
        <div className={"row"}>
            <div className={'column'}>
                <Link to="/kirk2"><p>Kirk 2 ft. DJT Jr.</p></Link>
                <Link to="/notproudtobe"><p>Not Proud To Be</p></Link>
                <Link to="/prager"><p>Prager</p></Link>
            </div>
            <div className={'column'}>
                <Link to="/climatestrikedenver"><p>Climate Strike Denver</p></Link>
                <Link to="/kirk"><p>Kirk 1</p></Link>
                <Link to="/butterflypavillion"><p>Butterfly Pavillion</p></Link>
            </div>
        </div>
    </NavigationStyles>
)

export default Navigation;
