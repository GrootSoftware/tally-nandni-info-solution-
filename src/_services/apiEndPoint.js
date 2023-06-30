import config from '../config';

export const apiEndPoint = {
  LOGIN: `${config.apiUrl}/Login/PostData`,
  COMPANY: `${config.apiUrl}/Company/GetData`,
  COMPANY_BY_ID: `${config.apiUrl}/Company/GetByIdData`,

  COST_CATEGORY_BY_ID: `${config.apiUrl}/CostCategory/GetByIdData`,
  COST_CENTER_BY_ID: `${config.apiUrl}/CostCenter/GetByIdData`,
  CURRENCY_BY_ID: `${config.apiUrl}/Currency/GetByIdData`,
  GROUP_BY_ID: `${config.apiUrl}/Group/GetByIdData`,
  LEDGER_BY_ID: `${config.apiUrl}/Ledger/GetByIdData`,
  STOCK_CATEGORY_BY_ID: `${config.apiUrl}/StockCategory/GetByIdData`,
  STOCK_GODOWN_BY_ID: `${config.apiUrl}/StockGodown/GetByIdData`,
  STOCK_GROUP_BY_ID: `${config.apiUrl}/StockGroup/GetByIdData`,
  STOCK_ITEM_BY_ID:`${config.apiUrl}/StockItem/GetByIdData`,
  STOCK_UNIT_BY_ID:`${config.apiUrl}/StockUnit/GetByIdData`,
  VOUCHER_TYPE_BY_ID:`${config.apiUrl}/VoucherType/GetByIdData`
};