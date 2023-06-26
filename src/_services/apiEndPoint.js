import config from '../config';

export const apiEndPoint = {
  LOGIN: `${config.apiUrl}/auth/login`,

  // *Buyer Api Url
  BUYER: `${config.apiUrl}/buyers`,

  // *Committee Api Url
  COMMITTEE: `${config.apiUrl}/committee`,

  // *Contact Api Url
  CONTACT: `${config.apiUrl}/contacts`,

  INVITATION: `${config.apiUrl}/invitation`,

  // *Department Api Url
  DEPARTMENT: `${config.apiUrl}/department`,

  // *Contact Api Url
  INVOICE: `${config.apiUrl}/invoice`,
  NEWINVOICE: `${config.apiUrl}/newInvoice`,

  // Requisition Api Url
  REQUISTIONS: `${config.apiUrl}/requisitions`,
  // APPROVEDREQUISITION: `${config.apiUrl}/approveRequisition`,

  CURRENCY: `${config.apiUrl}/currency`,

  // *Role Api Url
  ROLE: `${config.apiUrl}/roles`,

  // *Vendor Api Url
  VENDOR: `${config.apiUrl}/vendor`,
  VENDORQUOTATION: `${config.apiUrl}/vendorQuatation`,

  // *Rules Api Url
  RULES: `${config.apiUrl}/rules`,

  // *recievedrfp api url

  RFP: `${config.apiUrl}/rfp`,

  //*generate po api url

  PURCHASEORDERS: `${config.apiUrl}/purchaseorders`,

  //recievedefq api url

  RFQ: `${config.apiUrl}/rfq`,

  // email api url
  CHATS: `${config.apiUrl}/chat`,
  EMAIL: `${config.apiUrl}/mailList`,
  // MAILLIST: `${config.apiUrl}/mailList`,

  //*kanban api url
  KANBAN: `${config.apiUrl}/kanbanList`,

  //  dashboardApiURL
  DASHBOARDDATA: `${config.apiUrl}/dashboardData`,

  // frp track Api url
  TRACKFRPDATA: `${config.apiUrl}/trackfrpdata`,
  SENDRFQ: `${config.apiUrl}/sendrfq`,
  //GET NOTIFICATION DATA
  NOTIFICATIONS: `${config.apiUrl}/notifications`,

  // GET BUDGETOVERVIEW DATA
  BUDGET: `${config.apiUrl}/bugetOverviewData`,

  //GET REPORTS DATA 
  REPORTS: `${config.apiUrl}/reorts`,

  // config massages
  CONFIG_MESSAGE: `${config.apiUrl}/config-masters`,

  // slider massages
  SLIDRER: `${config.apiUrl}/slider`,

  // category massages
  CATEGORY: `${config.apiUrl}/menu`,
  GET_ALL_CATEGORY: `${config.apiUrl}/getAllMenu`,
  GET_BY_ID_CATEGORY: `${config.apiUrl}/getMenuById`,

  // product massages
  PRODUCT: `${config.apiUrl}/product`,

};