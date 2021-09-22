import React from "react";
import {NavigationStyles} from "./Navigation.styles";
import {Link} from "react-router-dom";

const Navigation: React.FC = () => (
    <NavigationStyles>
            <div className={"row"}>
                <div className={'column'}>
                    <Link to={'/'}><p>Kirk 2 ft. DJT Jr.</p></Link>
                    <Link to={'/Not-Proud-To-Be'}><p>Not Proud To Be</p></Link>
                </div>
                <div className={'column'}>
                    <Link to={'/Climate-Strike-Denver'}><p>Climate Strike Denver</p></Link>
                </div>
            </div>
    </NavigationStyles>
)

export default Navigation;
