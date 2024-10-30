'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import { SidebarContext } from '@/context/SidebarContext';
import { IconType } from 'react-icons';
import SidebarItem from './SidebarItem';

interface SidebarItem {
    title: string;
    path: string;
    Icon: IconType;
    subMenu?: undefined;
}

interface SidebarProps {
    routes: SidebarItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ routes }: { routes: any }) => {
    const pathname = usePathname();
    const { isOpen, handleOpenSidebar, windowSize } = useContext(SidebarContext);

    const handleCloseSidebar = () => {
        if (windowSize < 1024) {
            handleOpenSidebar();
        }
        return;
    };

    return (
        <>
            <aside
                className={`${
                    isOpen
                        ? 'w-[190px] translate-x-0 shadow-[11px_0px_4px_-1px_rgba(0,0,0,0.54)]'
                        : 'w-0 -translate-x-full'
                } z-20  ease-in-out duration-300 fixed top-0 left-0 bottom-0 min-w-40 min-h-full bg-primary-green  text-white bg-secondary-cyan`}
            >
                <div className="px-12 py-4 my-4 w-full">
                    <div className="w-full">
                        <svg viewBox="0 0 157 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M47.3113 19.9688H36.1124C35.9079 18.5199 35.4903 17.233 34.8596 16.108C34.2289 14.9659 33.4192 13.9943 32.4306 13.1932C31.442 12.392 30.2999 11.7784 29.0045 11.3523C27.7261 10.9261 26.3369 10.7131 24.8369 10.7131C22.1266 10.7131 19.7658 11.3864 17.7545 12.733C15.7431 14.0625 14.1834 16.0057 13.0755 18.5625C11.9675 21.1023 11.4136 24.1875 11.4136 27.8182C11.4136 31.5511 11.9675 34.6875 13.0755 37.2273C14.2005 39.767 15.7687 41.6847 17.78 42.9801C19.7914 44.2756 22.1181 44.9233 24.7601 44.9233C26.2431 44.9233 27.6153 44.7273 28.8766 44.3352C30.155 43.9432 31.2886 43.3722 32.2772 42.6222C33.2658 41.8551 34.084 40.9261 34.7317 39.8352C35.3965 38.7443 35.8567 37.5 36.1124 36.1023L47.3113 36.1534C47.0215 38.5568 46.2971 40.875 45.138 43.108C43.9959 45.3239 42.4533 47.3097 40.5101 49.0653C38.584 50.804 36.2829 52.1847 33.6067 53.2074C30.9476 54.2131 27.9391 54.7159 24.5812 54.7159C19.9107 54.7159 15.7346 53.6591 12.0528 51.5455C8.38799 49.4318 5.49026 46.3722 3.35958 42.3665C1.24594 38.3608 0.189123 33.5114 0.189123 27.8182C0.189123 22.108 1.26299 17.25 3.41071 13.2443C5.55844 9.23864 8.47321 6.1875 12.155 4.09091C15.8369 1.97727 19.9789 0.920453 24.5812 0.920453C27.6153 0.920453 30.4278 1.34659 33.0187 2.19886C35.6266 3.05114 37.9363 4.29545 39.9476 5.93181C41.959 7.55113 43.5954 9.53693 44.8567 11.8892C46.1351 14.2415 46.9533 16.9347 47.3113 19.9688ZM53.0902 1.63636H66.7436L81.1641 36.8182H81.7777L96.1982 1.63636H109.852V54H99.1129V19.9176H98.6783L85.1271 53.7443H77.8146L64.2635 19.7898H63.8288V54H53.0902V1.63636ZM145.219 16.696C145.015 14.6335 144.137 13.0312 142.586 11.8892C141.035 10.7472 138.929 10.1761 136.27 10.1761C134.464 10.1761 132.938 10.4318 131.694 10.9432C130.449 11.4375 129.495 12.1278 128.83 13.0142C128.182 13.9006 127.858 14.9062 127.858 16.0312C127.824 16.9688 128.02 17.7869 128.447 18.4858C128.89 19.1847 129.495 19.7898 130.262 20.3011C131.029 20.7955 131.915 21.2301 132.921 21.6051C133.927 21.9631 135.001 22.2699 136.143 22.5256L140.847 23.6506C143.131 24.1619 145.228 24.8437 147.137 25.696C149.046 26.5483 150.699 27.5966 152.097 28.8409C153.495 30.0852 154.577 31.5511 155.344 33.2386C156.128 34.9261 156.529 36.8608 156.546 39.0426C156.529 42.2472 155.711 45.0256 154.091 47.3778C152.489 49.7131 150.171 51.5284 147.137 52.8239C144.12 54.1023 140.481 54.7415 136.219 54.7415C131.992 54.7415 128.31 54.0938 125.174 52.7983C122.054 51.5028 119.617 49.5852 117.861 47.0455C116.123 44.4886 115.211 41.3267 115.126 37.5597H125.839C125.958 39.3153 126.461 40.7812 127.347 41.9574C128.251 43.1165 129.452 43.9943 130.952 44.5909C132.469 45.1705 134.182 45.4602 136.091 45.4602C137.966 45.4602 139.594 45.1875 140.975 44.642C142.373 44.0966 143.455 43.3381 144.222 42.3665C144.989 41.3949 145.373 40.2784 145.373 39.017C145.373 37.8409 145.023 36.8523 144.324 36.0511C143.643 35.25 142.637 34.5682 141.307 34.0057C139.995 33.4432 138.384 32.9318 136.475 32.4716L130.773 31.0398C126.358 29.9659 122.873 28.2869 120.316 26.0028C117.759 23.7187 116.489 20.642 116.506 16.7727C116.489 13.6023 117.333 10.8324 119.037 8.46307C120.759 6.09375 123.12 4.24432 126.12 2.91477C129.12 1.58523 132.529 0.920453 136.347 0.920453C140.233 0.920453 143.626 1.58523 146.523 2.91477C149.438 4.24432 151.705 6.09375 153.324 8.46307C154.944 10.8324 155.779 13.5767 155.83 16.696H145.219Z"
                                fill="#fff"
                            />
                        </svg>
                    </div>
                </div>
                {routes.map((ele: any, idx: number) => {
                    const { Icon, path } = ele;
                    return path !== '' ? (
                        <SidebarItem key={idx} data={ele} />
                    ) : (
                        <button
                            key={idx}
                            className="w-full select-none capitalize font-medium flex items-center py-5 px-4 transition-colors duration-75 hover:bg-primary-red hover:opacity-60 hover:transition-all"
                        >
                            <Icon className="mr-3" />
                            {ele.title}
                        </button>
                    );
                })}
            </aside>

            {/* overlay */}
            {isOpen && (
                <div
                    onClick={handleOpenSidebar}
                    className="fixed lg:hidden top-0 left-0 right-0 bottom-0 z-10 bg-black opacity-50"
                ></div>
            )}
        </>
    );
};

export default Sidebar;
