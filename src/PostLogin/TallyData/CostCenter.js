import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import apps from './aaps.json'
class CostCenter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        { field: 'athlete',filter: 'agNumberColumnFilter' },
        { field: 'age' ,filter: 'agNumberColumnFilter'},
        { field: 'country',filter: 'agNumberColumnFilter' },
        { field: 'sport' ,filter: 'agNumberColumnFilter'},
        { field: 'year' ,filter: 'agNumberColumnFilter'},
        { field: 'date' ,filter: 'agNumberColumnFilter'},
        { field: 'gold' ,  filterParams: daysValuesNotProvidedFilterParams,},
        { field: 'silver',  filterParams: daysValuesNotProvidedFilterParams, },
        { field: 'bronze',  filterParams: daysValuesNotProvidedFilterParams, },
        { field: 'total',  filterParams: daysValuesNotProvidedFilterParams, },
      ],
      defaultColDef: {
        sortable: true,
        resizable: true,
        width: 100,
        enableRowGroup: true,
        enablePivot: true,
        enableValue: true,
      },
      sideBar: {
        toolPanels: ['columns','filters'],
      },
      rowGroupPanelShow: 'always',
      pivotPanelShow: 'always',
      excelStyles: [
        {
          id: 'fullName',
          dataType: 'Formula',
        },
      ],
      // rowData: getRowData(),
    };
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };

  onFirstDataRendered = (params) => {
    params.api.getToolPanelInstance('filters')?.expandFilters();
  };

  onBtExport = () => {
    this.gridApi.exportDataAsExcel();
  };
  render() {
    console.log(this.state.sideBar)
    return (
      <div style={{ width: '100%', height: '500px' }}>
        <div
          style={{
            height: '100%',
            width: '100%',
          }}
          className="ag-theme-alpine"
        >
           <div>
            <button
              onClick={() => this.onBtExport()}
              style={{ marginBottom: '5px', fontWeight: 'bold' }}
            >
              Export to Excel
            </button>
          </div>
          <AgGridReact
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            sideBar={this.state.sideBar}
            rowGroupPanelShow={this.state.rowGroupPanelShow}
            rowData={apps}
            pagination={true}
            onGridReady={this.onGridReady}
            onFirstDataRendered={this.onFirstDataRendered.bind(this)}
          />
        </div>
      </div>
    );
  }
}


var listOfDays = apps
var daysValuesNotProvidedFilterParams = {
  comparator: (a, b) => {
    var aIndex = a == null ? -1 : listOfDays.indexOf(a);
    var bIndex = b == null ? -1 : listOfDays.indexOf(b);
    if (aIndex === bIndex) return 0;
    return aIndex > bIndex ? 1 : -1;
  },
};
var daysValuesProvidedFilterParams = {
  values: listOfDays,
  suppressSorting: true, // use provided order
};
function getRowData() {
  var weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  var rows = [];
  for (var i = 0; i < 200; i++) {
    var index = Math.floor(Math.random() * 5);
    rows.push({ days: weekdays[index] });
  }
  return rows;
}

export default CostCenter;