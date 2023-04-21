import { Component } from 'react';
import SidebarIcon from './SidebarIcon';
import { FaFire, FaPoo } from 'react-icons/fa';
import { BsPlus, BsFillLightningFill } from 'react-icons/bs';
import { BsGearFill } from 'react-icons/bs';
import Divider from '../core/divider/Divider';

class Sidebar extends Component {
    render() {
        return (
            <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-white dark:bg-gray-900 shadow-lg">
                {/* transition-transform -translate-x-full sm:translate-x-0 */}
                <SidebarIcon icon={<FaFire size="28" />} text="Dashboard" link="/" />
                <Divider />
                <SidebarIcon icon={<BsPlus size="32" />} text="" link="" />
                <SidebarIcon icon={<BsFillLightningFill size="20" />} text="" link="" />
                <SidebarIcon icon={<FaPoo size="20" />} text="" link="" />
                <Divider />
                <SidebarIcon icon={<BsGearFill size="22" />} text="Settings" link="/settings" />
            </div>
        );
    }
}

export default Sidebar;
