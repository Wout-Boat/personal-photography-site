import React from "react";
import { ProjectDetailsStyles } from "../styles/ProjectDetails.styles";

type Props = {};
type State = {};

class ProjectDetails extends React.Component<Props, State> {
    render() {
        return (
            <ProjectDetailsStyles>
                <p>See My Source on <img src={"/github-icon.svg"}/> <a href={"https://github.com/Wout-Boat/personal-photography-site"} target={"_blank"}>Github</a> </p>
            </ProjectDetailsStyles>
        );
    }
}

export default ProjectDetails;
