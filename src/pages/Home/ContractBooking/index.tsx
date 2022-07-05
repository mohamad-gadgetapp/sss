import React from 'react'
import Filter from '../../../components/Filter'
import DataTable from '../../../components/DataTable'
import './style.css';

const ContractBooking = () => {
    // const [columnDefs, setColumnDefs] = useState<Array<object>>([
    //     { headerName: "Make", field: "make" },
    //     { headerName: "Model", field: "model" },
    //     { headerName: "Price", field: "price" },
    // ]);
    // const [rowData, setRowData] = useState<Array<object>>([
    //     { make: "Toyota", model: "Celica", price: 35000 },
    //     { make: "Ford", model: "Mondeo", price: 32000 },
    //     { make: "Porsche", model: "Boxster", price: 72000 }
    // ]);

    return (
        <div className='mainDivContractBooking'>
            <Filter />
            <DataTable />
        </div>
    )
}

export default ContractBooking