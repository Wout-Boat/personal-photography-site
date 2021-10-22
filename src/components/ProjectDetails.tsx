import React from "react";
import { ProjectDetailsStyles } from "../styles/ProjectDetails.styles";

type Props = {};
type State = {};

class ProjectDetails extends React.Component<Props, State> {
    render() {
        return (
            <ProjectDetailsStyles>
                <p>See My Source on <img src={"/github-icon.svg"} alt={"Github Logo"} /> <a href={"https://github.com/Wout-Boat/personal-photography-site"} target={"_blank"} rel={"noreferrer"}>Github</a>.</p>
                <p>Images  © of Wout Bouckaert.</p>
            </ProjectDetailsStyles>
        );
    }
}

export default ProjectDetails;
