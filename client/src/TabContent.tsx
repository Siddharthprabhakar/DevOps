import React from "react";

type CourseTab = "home" | "material" | "assignment" | "query" | "certificate" | "reviewform" | "queryform" | "assignmentform" | "materialform"

type TabContentProps = {
    tabType: CourseTab,
    activeTab: CourseTab,
    children: React.ReactElement
}
export function TabContent({ tabType, activeTab, children} : TabContentProps) {
    return(
        <React.Fragment>
                {activeTab === tabType 
                    ? (
                        <div className="pt-6">
                            { children }
                        </div>
                    ): null
                }
        </React.Fragment>
    )
}