import React, { Component } from 'react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import '../../assets/login.css';

import Table from '../../Table/Table';
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import { companyAction } from '../../_actions/company.action';
import { status } from '../../_constants';
import { connect } from 'react-redux';

import { lederAction } from '../../_actions';
import { Button } from '@mui/material';

import { REFRESH_ICON } from '../../constant/Images';

class Ledger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requiData: {
        CompanyID: null
      },
      columnDefs: [
        { field: 'CompanyName' },
        { field: 'LedgerName' },
        { field: 'LedgerMasterID' },
        { field: 'GUID' },
        { field: 'AlterID' },
        { field: 'ParentGUID' },
        { field: 'ParentName' },
        { field: 'CurrencyName' },
        { field: 'IsBillWiseOn' },
        { field: 'IsCostCentresOn' },
        { field: 'AffectsStock' },
        { field: 'CreditDays' },
        { field: 'CreditLimit' },
        { field: 'MailingName' },
        { field: 'FullAddress' },
        { field: 'CountryName' },
        { field: 'StateName' },
        { field: 'Pincode' },
        { field: 'ContactPerson' },
        { field: 'MobileNo' },
        { field: 'PhoneNo' },
        { field: 'EmailId' },
        { field: 'CCEmail' },
        { field: 'PANNo' },
        { field: 'GSTRegType' },
        { field: 'GSTNo' },
        { field: 'OpeningBalance' }
      ],
      rowData: [],
      dropdowndata:[],
      filterRowData: []
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
    if (this.props.get_leder_status !== prevProps.get_leder_status && this.props.get_leder_status == status.SUCCESS) {
      if (this.props.ledger_list) {
        this.setState({
          filterRowData: this.props.ledger_list.BillData,
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
      this.props.dispatch(lederAction.getLederById({ CompanyID: requiData.CompanyID }))
    }
  }

  render() {
    const { requiData, columnDefs, dropdowndata } = this.state;
    return (
      <>
        <div className='form-container'>
          <div className="col-12 col-sm-12 col-md-4">
            <div className="form-group form-group-common d-flex">
              <FormControl className="select" style={{border: "1px solid #9c82bd"}}>
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
  const { get_company_data, get_company_status, get_leder_status, ledger_list } = state.procurement;
  return {
    get_company_data,
    get_company_status,
    get_leder_status,
    ledger_list
  };
}

const connectedLogin = connect(mapStateToProps)(Ledger);
export default (connectedLogin);
