import React from 'react';
const Dashbord = React.lazy(() => import('../Pages/Dashbord'));
const Company = React.lazy(() => import('../Pages/TallyData/Company'));
const CostCategory = React.lazy(() => import('../Pages/TallyData/CostCategory'));
const CostCenter = React.lazy(() => import('../Pages/TallyData/CostCenter'));
const Currency = React.lazy(() => import('../Pages/TallyData/Currency'));
const Group = React.lazy(() => import('../Pages/TallyData/Group'));
const Ledger = React.lazy(() => import('../Pages/TallyData/Ledger'));
const StockCategory = React.lazy(() => import('../Pages/TallyData/StockCategory'));
const StockGodown = React.lazy(() => import('../Pages/TallyData/StockGodown'));
const StockGroup = React.lazy(() => import('../Pages/TallyData/StockGroup'));
const StockItem = React.lazy(() => import('../Pages/TallyData/StockItem'));
const StockUnit = React.lazy(() => import('../Pages/TallyData/StockUnit'));
const VoucherType = React.lazy(() => import('../Pages/TallyData/VoucherType'));


const routes = [
    { path: '/postlogin/dashboard', exact: true, name: 'Dashbord', component: Dashbord },
    { path: '/postlogin/company', exact: true, name: 'Company', component: Company },
    { path: '/postlogin/cost_category', exact: true, name: 'Cost Category', component: CostCategory },
    { path: '/postlogin/cost_center', exact: true, name: 'Cost Center', component: CostCenter },
    { path: '/postlogin/currency', exact: true, name: 'Currency', component: Currency },
    { path: '/postlogin/group', exact: true, name: 'Group', component: Group },
    { path: '/postlogin/ledger', exact: true, name: 'Ledger', component: Ledger },
    { path: '/postlogin/stock_category', exact: true, name: 'Stock Category', component: StockCategory },
    { path: '/postlogin/stock_godown', exact: true, name: 'Stock Godown', component: StockGodown },
    { path: '/postlogin/stock_group', exact: true, name: 'Stock Group', component: StockGroup },
    { path: '/postlogin/stock_item', exact: true, name: 'Stock Item', component: StockItem },
    { path: '/postlogin/stock_unit', exact: true, name: 'Stock Unit', component: StockUnit },
    { path: '/postlogin/voucher_type', exact: true, name: 'Voucher Type', component: VoucherType },
]

export default routes;