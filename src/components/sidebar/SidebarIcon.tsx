import { Component } from 'react';

interface ISidebarIconProps {
    icon: JSX.Element;
    text: string;
    link: string;
}

interface ISidebarIconState {
    active: boolean;
}

class SidebarIcon extends Component<ISidebarIconProps, ISidebarIconState> {
    render() {
        return (
            <a href={this.props.link}>
                <div className="sidebar-icon group">
                    {this.props.icon}
                    <span className="sidebar-tooltip group-hover:scale-100">{this.props.text}</span>
                </div>
            </a>
        );
    }
}

export default SidebarIcon;
