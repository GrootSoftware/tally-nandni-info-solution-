import React from "react";

import Company from "../Pages/TallyData/Company";
import CostCategory from "../Pages/TallyData/CostCategory"
import CostCenter from "../Pages/TallyData/CostCenter"
import Currency from "../Pages/TallyData/Currency"
import Group from "../Pages/TallyData/Group"
import Ledger from "../Pages/TallyData/Ledger"
import StockCategory from "../Pages/TallyData/StockCategory"
import StockGodown from "../Pages/TallyData/StockGodown"
import StockGroup from "../Pages/TallyData/StockGroup"
import StockItem from "../Pages/TallyData/StockItem";
import StockUnit from "../Pages/TallyData/StockUnit";
import VoucherType from "../Pages/TallyData/VoucherType";

export const AppControler = ({ tabpage }) => {
    let tab_coponent = tabpage.name;
    
    const tabbComponents = () => {
        switch (tab_coponent) {
            case "Company":
                return (
                    <Company />
                );
            case "Cost Category":
                return (
                    <CostCategory />
                );

            case "Cost Center":
                return (
                    <CostCenter />
                );

            case "Currency":
                return (
                    <Currency />
                );
            case "Group":
                return (
                    <Group />
                );

            case "Ledger":
                return (
                    <Ledger />
                );

            case "Stock Category":
                return (
                    <StockCategory />
                );

            case " Stock Godown":
                return (
                    <StockGodown />
                );
            case "Stock Group":
                return (
                    <StockGroup />
                );

            case "Stock Item":
                return (
                    <StockItem />
                );

            case "Stock Unit":
                return (
                    <StockUnit />
                );

            case "Voucher Type":
                return (
                    <VoucherType />
                );
        }
    }

    return (
        <>
            {tabbComponents()}
        </>
    )
}