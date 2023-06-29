import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import apps from './aaps.json'
import { Padding } from '@mui/icons-material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import '../../assets/login.css';

import Table from '../../Table/Table';
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import { companyAction } from '../../_actions/company.action';
import { status } from '../../_constants';
import { connect } from 'react-redux';


import { Button } from '@mui/material';
import { stockGodownAction } from '../../_actions';

class StockGodown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requiData: {
        CompanyID: null
      },
      columnDefs: [
        { field: 'CompanyName' },
        { field: 'Name' },
        { field: 'GUID' }
      ],
      rowData: [],
      filterRowData: []
    };
  }

  componentDidMount = () => {
    this.props.dispatch(companyAction.getCompany({}))
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.get_company_status !== prevProps.get_company_status && this.props.get_company_status == status.SUCCESS) {
      if (this.props.get_company_data) {
        this.setState({
          rowData: this.props.get_company_data.Data,
        })
      }
    }
    if (this.props.get_stock_godown_status !== prevProps.get_stock_godown_status && this.props.get_stock_godown_status == status.SUCCESS) {
      if (this.props.stock_godown_list) {
        this.setState({
          filterRowData: this.props.stock_godown_list.Data,
        })
      }
    }
  }
  companyList = () => {
    const { rowData } = this.state

    if (rowData) {
      let retData = [];
      for (let i = 0; i < rowData.length; i++) {
        let row = rowData[i];
        if (row) {
          retData.push(
            <>
              <option value={row.ID} >{row.RemoteCmpName}</option>
            </>
          );
        }
      }
      return retData;
    }
  }

  handleStateChange = (e) => {
    const { name, value } = e.target;
    const { requiData } = this.state;
    requiData[name] = value;
    this.setState({
      requiData,
    });
   
  };
  refreshData=()=>{
    const { requiData } = this.state;
    if (requiData) {
      this.props.dispatch(stockGodownAction.getStockGodownById({ CompanyID: requiData.CompanyID }))
    }
  }

  render() {
    const { requiData, columnDefs } = this.state;
    return (
      <>
        <div className="col-12 col-sm-12 col-md-4">
          <div className="form-group form-group-common d-flex">
            <FormControl className="select">
              <NativeSelect
                name="CompanyID"
                value={requiData.CompanyID}
                onChange={this.handleStateChange}
              >
                <option value="">-Select-</option>
                {this.companyList()}
              </NativeSelect>
            </FormControl>
            <Button variant="contained"  className="alert-white-button ml-4" onClick={this.refreshData}>
              <i className="fa fa-refresh"></i>&nbsp;&nbsp; Refresh
            </Button>
          </div>
        </div>

        <div >
          <Table columnDefs={columnDefs} rowData={this.state.filterRowData} />
        </div>
      </>
    );
  }
}
function mapStateToProps(state) {
  const { get_company_data, get_company_status, get_stock_godown_status, stock_godown_list } = state.procurement;
  return {
    get_company_data,
    get_company_status,
    get_stock_godown_status,
    stock_godown_list
  };
}

const connectedLogin = connect(mapStateToProps)(StockGodown);
export default (connectedLogin);
