import React from "react";

type CourseTab = "home" | "material" | "assignment" | "query" | "certificate" | "review"

type TabNavItemProps = {
    tabType: CourseTab,
    tabTitle: string,
    activeTab: CourseTab,
    setActiveTab: React.Dispatch<React.SetStateAction<CourseTab>>
}

export function TabNavItem({ tabType, tabTitle, activeTab, setActiveTab} : TabNavItemProps) {
    return(
        <React.Fragment>
            <a 
                className={`tab tab-lg
                ${activeTab === tabType ? "tab-active" : ""}`}
                onClick={() => setActiveTab(tabType)}
            >
                    {tabTitle}
            </a> 
        </React.Fragment>
    )
}