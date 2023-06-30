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
import Excel from '../../assets/images/icons/clipart2394456.png'
import Button from '@mui/material/Button';
import Table from '../../Table/Table';
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import { companyAction } from '../../_actions/company.action';
import { status } from '../../_constants';
import { connect } from 'react-redux';
class Company extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requiData: {
        ID: null
      },
      columnDefs: [
        { field: 'RemoteCmpName' },
        { field: 'RemoteCmpAddress' },
        { field: 'RemoteCmpCountry' },
        { field: 'RemoteCmpState' },
        { field: 'RemoteCmpPincode' },
        { field: 'RemoteCmpEmail' },
        { field: 'RemoteCmpBaseCurrency' },
        { field: 'RemoteCmpBooksDate' },
        { field: 'GSTNo' },
        { field: 'PANNo' }

      ],
      rowData: []
    };

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
      this.props.dispatch(companyAction.getCompanyById({ ID: requiData.ID }))
    }
  }

  componentDidMount = () => {
    this.props.dispatch(companyAction.getCompany({}))
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.get_company_status !== prevProps.get_company_status && this.props.get_company_status == status.SUCCESS) {
      this.setState({
        rowData: this.props.get_company_data.Data,
      })
    }
    if (this.props.get_company_id_status !== prevProps.get_company_id_status && this.props.get_company_id_status == status.SUCCESS) {
      if (this.props.company_id_list) {
        this.setState({
          filterRowData: this.props.company_id_list.Data,
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
  render() {
    const { requiData, columnDefs, rowData, filterRowData } = this.state;
    return (
      <>
        <div style={{ border: "1px solid #9c82bd", padding: "20px", borderRadius:"10px" }}>
          <div className="col-12 col-sm-12 col-md-4">
            <div className="form-group form-group-common d-flex">
              <FormControl className="select" style={{border: "1px solid #9c82bd"}}>
                <NativeSelect
                  name="ID"
                  value={requiData.ID}
                  onChange={this.handleStateChange}
                >
                  <option value="">-Select-</option>
                  {this.companyList()}
                </NativeSelect>
              </FormControl>
              <Button variant="contained" className="alert-white-button ml-4" onClick={this.refreshData}>
                <i className="fa fa-refresh"></i>
              </Button>
            </div>
          </div>
          <Table columnDefs={columnDefs} rowData={filterRowData ? filterRowData : rowData} />
        </div>
      </>
    );
  }
}
function mapStateToProps(state) {
  const { get_company_data, get_company_status, company_id_list, get_company_id_status } = state.procurement;
  return {
    get_company_data,
    get_company_status,
    company_id_list,
    get_company_id_status
  };
}

const connectedLogin = connect(mapStateToProps)(Company);
export default (connectedLogin);
