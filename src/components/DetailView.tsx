import React from "react";
import {DetailViewStyle} from "../styles/DetailView.styles";

type Props = {
    imgUrl: string;
    closeFunction: any;
};

type State = {
};

class DetailView extends React.Component<Props, State> {

    render() {

        return (
            <DetailViewStyle>
                <div className={'background-fade'} onClick={this.props.closeFunction}>
                    <img src={this.props.imgUrl} alt={''} />
                </div>
            </DetailViewStyle>
        )
    }

}

export default DetailView;
