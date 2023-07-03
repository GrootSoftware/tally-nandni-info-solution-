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
import { costCategoryAction } from '../../_actions/cost.category.action';
import { REFRESH_ICON } from '../../constant/Images';

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
        { field: 'NameMasterID' },
        { field: 'GUID' },
        { field: 'AlterID' }
      ],
      rowData: [],
      filterRowData: [],
      dropdowndata: [],
    };
  }

  componentDidMount = () => {
    this.props.dispatch(companyAction.getCompany({}))
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
    if (this.props.get_cost_category_id_status !== prevProps.get_cost_category_id_status && this.props.get_cost_category_id_status == status.SUCCESS) {
      if (this.props.cost_category_id_list) {
        this.setState({
          filterRowData: this.props.cost_category_id_list.Data,
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
      this.props.dispatch(costCategoryAction.getCostCategoryById({ CompanyID: requiData.CompanyID, ID: 0 }))
    }
  }
  render() {
    const { requiData, columnDefs, dropdowndata } = this.state;
    return (
      <>
        <div className="form-container">
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
