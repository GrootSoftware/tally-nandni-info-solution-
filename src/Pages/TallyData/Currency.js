import React, { Component } from 'react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import '../../assets/login.css';
import Button from '@mui/material/Button';
import Table from '../../Table/Table';
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import { companyAction } from '../../_actions/company.action';
import { status } from '../../_constants';
import { connect } from 'react-redux';
import { costCenterAction } from '../../_actions/currency.action';

import { REFRESH_ICON } from '../../constant/Images';

class Currency extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requiData: {
        CompanyID: null
      },
      columnDefs: [
        { field: 'CompanyName' },
        { field: 'Name' },
        { field: 'NameMasterID' },
        { field: 'GUID' },
        { field: 'AlterID' },
        { field: 'MailingName' },
        { field: 'OriginalName' },
        { field: 'ExpandedSymbol' },
        { field: 'DecimalSymbol' },
        { field: 'DecimalPlaces' },
        { field: 'DecimalPlacesForPrinting' }
      ],
      rowData: [],
      filterRowData: [],
      dropdowndata: []
    };
  }

  componentDidMount = () => {
    // this.props.dispatch(companyAction.getCompany({}))
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.get_company_status !== prevProps.get_company_status && this.props.get_company_status == status.SUCCESS) {
      if (this.props.get_company_data.Data && this.props.get_company_data.Data.length > 0) {
        let drop_down_data = [{ ID: "", RemoteCmpName: "-select-" }]
        this.props.get_company_data.Data.map((item) => {
          drop_down_data.push(item)
        })
        this.setState({
          dropdowndata: drop_down_data,
          rowData: this.props.get_company_data.Data,
        })
      }
    }
    if (this.props.get_currency_status !== prevProps.get_currency_status && this.props.get_currency_status == status.SUCCESS) {
      if (this.props.currency_list) {
        this.setState({
          filterRowData: this.props.currency_list.Data,
        })
      }
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
  refreshData = () => {
    const { requiData } = this.state;
    if (requiData) {
      this.props.dispatch(costCenterAction.getCurrencyById({ CompanyID: requiData.CompanyID }))
    }
  }
  render() {
    const { requiData, columnDefs, dropdowndata } = this.state;
    return (
      <>
        <div className='form-container'>
          <div className="col-12 col-sm-12 col-md-4">
            <div className="form-group form-group-common d-flex">
              <FormControl className="select">
                <NativeSelect
                  name="CompanyID"
                  value={requiData.CompanyID}
                  onChange={this.handleStateChange}
                >
                  {
                    dropdowndata && dropdowndata.map((list, index) => (
                      <option value={list.ID}>{list.RemoteCmpName}</option>
                    ))
                  }
                </NativeSelect>
              </FormControl>
              <Button variant="contained" className="action-button-theme ml-4" onClick={this.refreshData}>
                <img src={REFRESH_ICON} alt="" title="Reload" />
              </Button>
            </div>
          </div>

          <div >
            <Table columnDefs={columnDefs} rowData={this.state.filterRowData} />
          </div>
        </div>
      </>
    );
  }
}
function mapStateToProps(state) {
  const { get_company_data, get_company_status, get_currency_status, currency_list } = state.procurement;
  return {
    get_company_data,
    get_company_status,
    get_currency_status,
    currency_list
  };
}

const connectedLogin = connect(mapStateToProps)(Currency);
export default (connectedLogin);
