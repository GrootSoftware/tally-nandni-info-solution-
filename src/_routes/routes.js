import React from 'react';
const Dashbord = React.lazy(() => import('../PostLogin/Dashbord'));
const ListPartyMaster = React.lazy(() => import('../PostLogin/TallyData/ListPartyMaster'));
const ListStockMaster = React.lazy(() => import('../PostLogin/TallyData/ListStockMaster'));
const ListStockGroup = React.lazy(() => import('../PostLogin/TallyData/ListStockGroup'));
const ListStockCategory = React.lazy(() => import('../PostLogin/TallyData/ListStockCategory'));
const Uom = React.lazy(() => import('../PostLogin/TallyData/Uom'));
const Godown = React.lazy(() => import('../PostLogin/TallyData/Godown'));
const Group = React.lazy(() => import('../PostLogin/TallyData/Group'));
const VoucherType = React.lazy(() => import('../PostLogin/TallyData/VoucherType'));
const Transactions = React.lazy(() => import('../PostLogin/TallyData/Transactions'));
const CostCenter = React.lazy(() => import('../PostLogin/TallyData/CostCenter'));

const routes = [
    { path: '/postlogin/dashboard', exact: true, name: 'Dashbord', component: Dashbord },
    { path: '/postlogin/tally-party-master', exact: true, name: 'ListPartyMaster', component: ListPartyMaster },
    { path: '/postlogin/stock_master', exact: true, name: 'ListStockMaster', component: ListStockMaster },
    { path: '/postlogin/stock_group', exact: true, name: 'ListStockGroup', component: ListStockGroup },
    { path: '/postlogin/stock_category', exact: true, name: 'ListStockCategory', component: ListStockCategory },
    { path: '/postlogin/uom', exact: true, name: 'Uom', component: Uom },
    { path: '/postlogin/godown', exact: true, name: 'Godown', component: Godown },
    { path: '/postlogin/group', exact: true, name: 'Group', component: Group },
    { path: '/postlogin/voucher_type', exact: true, name: 'VoucherType', component: VoucherType },
    { path: '/postlogin/transactions', exact: true, name: 'Transactions', component: Transactions },
    { path: '/postlogin/cost_center', exact: true, name: 'CostCenter', component: CostCenter },



]

export default routes;