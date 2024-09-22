import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import TopBar from "./topBar/TopBar";


export default function Layout() {
    return (
        <>
            <Sidebar />
            <TopBar />
            <div id='page-wrapper' className='gray-bg'>
                <Outlet />
            </div>
        </>
    )
}