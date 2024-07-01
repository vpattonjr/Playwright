export const loginSelectors = {
    nav: {
        episodesTab: '.ant-tabs-nav-wrap',
        tasksTab: '.ant-tabs-nav'
    },
    generation: {
        spinner: '.ant-spin-spinning'
    },
    buttons: {
        clearAllFilters: 'text=Clear All Filters',
        okButton: 'text=OK',
        nextButton: 'text=Next',
        updateAlerts: 'text=Update',
        cancel: 'text=Cancel'
    },
    links: {
        tasksSubMenu: 'ul[id="tasks$Menu"] > li[class="ant-menu-item"]:not(.ant-menu-item-disabled):first',
        currentLocationsSubMenu: 'ul[id="currentLocations$Menu"] > li[class="ant-menu-item"]:not(.ant-menu-item-disabled):first',
        locationDropdown: 'div[class^="SeriveLocationLocationDataTable__task-label"]'
    },
    inputs: {
        accountDropdown: '.account-dropdown',
        alertSettingsDialog: '.dropdown-menu-item_alerts'
    },
    content: {
        episodesListItems: '.ant-list-items',
        taskCountCell: 'td[class^="cell-clickable SeriveLocationTasksDataTable__count-cell"]',
        locationCountCell: 'td[class^="cell-clickable SeriveLocationLocationDataTable__count-cell"]'
    }
};