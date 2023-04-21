import { Component } from 'react';

import TopNavigation from '../topNavigation/TopNavigation';

class ContentContainer extends Component {
    render() {
        return (
            <div className="content-container">
                <TopNavigation />
                <div className="content-list"></div>
            </div>
        );
    }
}

export default ContentContainer;
