import React from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import Header from "./components/Header";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

function App() {
  const [columnDefs, setColumnDefs] = React.useState<Array<object>>([
    { headerName: "Make", field: "make" },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price" },
  ]);
  const [rowData, setRowData] = React.useState<Array<object>>([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 }
  ]);
  const defaultColDef = {
    sortable: true,
    flex: 1,
    filter: true,
    floatingFliter: true,
  }
  return (
    <div>
      <Header title={"hello"} />
      <div
        className="ag-theme-balham"
        style={{
          height: '100vh',
          width: '100%'
        }}
      >
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          defaultColDef={defaultColDef}>
        </AgGridReact>
      </div>
    </div>
  );
}

export default App;
