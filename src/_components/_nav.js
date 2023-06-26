import 'react-pro-sidebar/dist/css/styles.css'

const _nav = [
 
         {
        _tag: 'SidebarNavItem',
        name: 'Dashboard',
        to: '/postlogin/dashboard',
        activeArr: ['/postlogin/dashboard'],
        open: false,
        icon: <i className="fas fa-tachometer-fast"></i>,
    
    },
    {
        _tag: 'SidebarNavItem',
        name: 'BI Dashboard',
        open: false,
        icon: <i className="fas fa-tachometer-fast"></i>,
        children: [
            {
                _tag: 'SidebarNavItem',
                name: 'Sales Dashboard',
                to: '/postlogin/sales_dashboard',
                activeArr: ['/postlogin/sales_dashboard'],
                open: false,
            },
            {
                _tag: 'SidebarNavItem',
                name: 'HR Dashboard',
                to: '/postlogin/hr_dashboard',
                activeArr: ['/postlogin/hr_dashboard'],
                open: false,
            },
            {
                _tag: 'SidebarNavItem',
                name: 'Outstanding Dashboard',
                to: '/postlogin/outstanding_dashboard',
                activeArr: ['/postlogin/outstanding_dashboard'],
                open: false,
            },
        ]
    },
    {
        _tag: 'SidebarNavItem',
        name: 'Masters',
        open: false,
        icon: <i className="fas fa-tachometer-fast"></i>,
        children: [
            {
                _tag: 'SidebarNavItem',
                name: 'Department Master',
                to: '/postlogin/department_master',
                activeArr: ['/postlogin/department_master'],
                open: false,
            },
            {
                _tag: 'SidebarNavItem',
                name: 'Company Master',
                to: '/postlogin/company_master',
                activeArr: ['/postlogin/company_master'],
                open: false,
            },
            {
                _tag: 'SidebarNavItem',
                name: 'Location Master',
                to: '/postlogin/location_master',
                activeArr: ['/postlogin/location_master'],
                open: false,
            },
            {
                _tag: 'SidebarNavItem',
                name: 'Des',
                to: '/postlogin/location_master',
                activeArr: ['/postlogin/location_master'],
                open: false,
            },
            {
                _tag: 'SidebarNavItem',
                name: 'Location Master',
                to: '/postlogin/location_master',
                activeArr: ['/postlogin/location_master'],
                open: false,
            },
            {
                _tag: 'SidebarNavItem',
                name: 'Location Master',
                to: '/postlogin/location_master',
                activeArr: ['/postlogin/location_master'],
                open: false,
            },

        ]
    },
    {
        _tag: 'SidebarNavItem',
        name: 'Tally Data',
        open: false,
        icon: <i className="fas fa-comments"></i>,
        children: [
            {
                _tag: 'SidebarNavItem',
                name: 'List Party Master',
                to: '/postlogin/tally-party-master',
                activeArr: ['/postlogin/tally-party-master'],
                open: false,
            },
            {
                _tag: 'SidebarNavItem',
                name: 'List Stock Master',
                to: '/postlogin/stock_master',
                activeArr: ['/postlogin/stock_master'],
                open: false,
            },
            {
                _tag: 'SidebarNavItem',
                name: 'Stock Group',
                to: '/postlogin/stock_group',
                activeArr: ['/postlogin/stock_group'],
                open: false,
            },
            {
                _tag: 'SidebarNavItem',
                name: 'Stock Category',
                to: '/postlogin/stock_category',
                activeArr: ['/postlogin/stock_category'],
                open: false,
            },
            {
                _tag: 'SidebarNavItem',
                name: 'UOM',
                to: '/postlogin/uom',
                activeArr: ['/postlogin/uom'],
                open: false,
            },
            {
                _tag: 'SidebarNavItem',
                name: 'Godown',
                to: '/postlogin/godown',
                activeArr: ['/postlogin/godown'],
                open: false,
            },
            {
                _tag: 'SidebarNavItem',
                name: 'Group',
                to: '/postlogin/group',
                activeArr: ['/postlogin/group'],
                open: false,
            },
            {
                _tag: 'SidebarNavItem',
                name: 'Voucher Type',
                to: '/postlogin/voucher_type',
                activeArr: ['/postlogin/voucher_type'],
                open: false,
            },
            {
                _tag: 'SidebarNavItem',
                name: 'Transactions',
                to: '/postlogin/transactions',
                activeArr: ['/postlogin/transactions'],
                open: false,
            },
            {
                _tag: 'SidebarNavItem',
                name: 'Cost Center',
                to: '/postlogin/cost_center',
                activeArr: ['/postlogin/cost_center'],
                open: false,
            },
        ]
    },
    // {
    //     _tag: 'SidebarNavItem',
    //     name: 'Configuration',
    //     to: '/postlogin/config/message',
    //     activeArr: ['/postlogin/config/message'],
    //     open: false,
    //     icon: <i className="fa-regular fa-envelope-open"></i>,

    // },
    // {
    //     _tag: 'SidebarNavItem',
    //     name: 'Slider',
    //     to: '/postlogin/slider',
    //     activeArr: ['/postlogin/slider'],
    //     open: false,
    //     icon: <i class="fa fa-sliders" aria-hidden="true"></i>,

    // },
    // {
    //     _tag: 'SidebarNavItem',
    //     name: 'Category',
    //     to: '/postlogin/category',
    //     activeArr: ['/postlogin/category'],
    //     open: false,
    //     icon: <i class="fa fa-sitemap"></i>,

    // },

    // {
    //     _tag: 'SidebarNavItem',
    //     name: 'Product',
    //     to: '/postlogin/product',
    //     activeArr: ['/postlogin/product'],
    //     open: false,
    //     icon: <i class='fas fa-boxes'></i>,

    // },

    //     {
    //       _tag: 'Setting',
    //       name: 'Setting',
    //       to: '/postlogin/setting',
    //       activeArr: ['/postlogin/setting'],
    //       open: false,
    //       icon: <i className="fab fa-microsoft" />,
    //     },



]


export default _nav;