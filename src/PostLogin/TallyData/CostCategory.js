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
import { costCategoryAction } from '../../_actions/cost.category.action';
class CostCategory extends Component {
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
      rowData:[],
      filterRowData:[]
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
    if (this.props.get_cost_category_id_status !== prevProps.get_cost_category_id_status && this.props.get_cost_category_id_status == status.SUCCESS) {
      if (this.props.cost_category_id_list) {
        this.setState({
          filterRowData: this.props.cost_category_id_list.Data,
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
      this.props.dispatch(costCategoryAction.getCostCategoryById({ CompanyID: requiData.CompanyID, ID:0 }))
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
                style={{border:'1px solid grey'}}
              >
                <option value="">-Select-</option>
                {this.companyList()}
              </NativeSelect>
            </FormControl>
            <Button variant="contained"  className="alert-white-button ml-5" onClick={this.refreshData}>
              <i className="fa fa-refresh"></i>&nbsp;&nbsp; 
            </Button>
          </div>
        </div>

        <div >
          <Table columnDefs={columnDefs} rowData={this.props.cost_category_id_list?.Data} />
        </div>
      </>
    );
  }
}
function mapStateToProps(state) {
  const { get_company_data, get_company_status, get_company_id_status, cost_category_id_list } = state.procurement;
  return {
    get_company_data,
    get_company_status,
    get_company_id_status,
    cost_category_id_list
  };
}

const connectedLogin = connect(mapStateToProps)(CostCategory);
export default (connectedLogin);
