import * as React from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import MainContent from '../layout/MainContent';
import Sidebar from '../SideNav/Sidebar';




const drawerWidthOpen = 240;
const paddingIconButton = 10;
const marginIconButton = 14;
const iconFontSize = 20;
const drawerWidthClose =
    (paddingIconButton + marginIconButton) * 2 + iconFontSize;

export default function Main() {
    const [sidebarOpen, setSidebarOpen] = useState(false);


    return (
        <div className="flex h-screen overflow-hidden">

            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                  {/*  Site header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main>
                <div className="w-full max-w-9xl mx-auto">
                    <MainContent/>
                </div>
                </main>
            </div>

        </div>
    );
}
