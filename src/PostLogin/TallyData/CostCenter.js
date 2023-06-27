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
class CostCenter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        { field: 'athlete' },
        { field: 'age' },
        { field: 'country' },
        { field: 'sport' },
        { field: 'year' },
        { field: 'date' },
        { field: 'gold' },
        { field: 'silver' },
        { field: 'bronze' },
        { field: 'total' },
      ],
    };
  }

  
  render() {
    return (
      <div >
     <Table columnDefs={this.state.columnDefs} rowData={apps}/>
      </div>
    );
  }
}
export default CostCenter;