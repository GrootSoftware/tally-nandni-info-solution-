import React, { Component } from 'react';
// import { createRoot } from 'react-dom/client';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
// import './App.css'
import 'ag-grid-community/styles/ag-theme-alpine.css';
import apps from './aaps.json'
import '../../assets/login.css'
// import Tabs1 from './components/Tabs';
class CostCenter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        { field: 'athlete', rowDrag: true },
        { field: 'country' },
        { field: 'year', width: 100 },
        { field: 'date' },
        { field: 'sport' },
        { field: 'gold' },
        { field: 'silver' },
        { field: 'bronze' },
      ],
      defaultColDef: {
        width: 170,
        sortable: true,
        filter: true,
      },
      rowSelection: 'multiple',
      rowData: null,
    };
  }

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <div
          style={{
            height: '100%',
            width: '100%',
          }}
          className="ag-theme-alpine"
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            rowDragManaged={true}
            rowDragMultiRow={true}
            rowSelection={this.state.rowSelection}
            animateRows={true}
            rowData={apps}
          />
        </div> 
        {/* <Tabs1 /> */}
      </div>
    );
  }
}
export default CostCenter