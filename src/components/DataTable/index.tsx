import React, { useState } from 'react';
import './style.css';

const data = [
    {
        type: 'Loan',
        id: '1002002',
        logo: 'TSLA',
        quantity: '10,000',
        rate: '5.15%',
        counterParty: 'Wells Fargo',
        createDate: '12/12/2022 12:22 PM',
        settleDate: '12/12/2022 12: 22 PM',
        annotation: 'Lorem ipsum dolor sit amet',
        status: 'Complete',
        blank: '-'
    },
    {
        type: 'Loan',
        id: '1002002',
        logo: 'TSLA',
        quantity: '10,000',
        rate: '5.15%',
        counterParty: 'Wells Fargo',
        createDate: '12/12/2022 12:22 PM',
        settleDate: '12/12/2022 12: 22 PM',
        annotation: 'Lorem ipsum dolor sit amet',
        status: 'Complete',
        blank: '-'
    },
    {
        type: 'Loan',
        id: '1002002',
        logo: 'TSLA',
        quantity: '10,000',
        rate: '5.15%',
        counterParty: 'Wells Fargo',
        createDate: '12/12/2022 12:22 PM',
        settleDate: '12/12/2022 12: 22 PM',
        annotation: 'Lorem ipsum dolor sit amet',
        status: 'Complete',
        blank: '-'
    },
    {
        type: 'Loan',
        id: '1002002',
        logo: 'TSLA',
        quantity: '10,000',
        rate: '5.15%',
        counterParty: 'Wells Fargo',
        createDate: '12/12/2022 12:22 PM',
        settleDate: '12/12/2022 12: 22 PM',
        annotation: 'Lorem ipsum dolor sit amet',
        status: 'Complete',
        blank: '-'
    },
]

const DataTable = () => {

    const [list, setList] = useState([...data]);

    return (
        <div className="mainDivDataTable textSMBSLG">
            {list.map((item, index) => {
                return (
                    <div className='dataDiv'>
                        <table className='dataTable'>
                            <tr key={index} className='dataTableRow' >
                                <td className='dataTableContent'>
                                    <span>{item.type}</span>
                                </td>
                                <td className='dataTableContent'>
                                    <span>{item.id}</span>
                                </td>
                                <td className='dataTableContent'>
                                    <span>{item.logo}</span>
                                </td>
                                <td className='dataTableContent'>
                                    <span>{item.quantity}</span>
                                </td>
                                <td className='dataTableContent'>
                                    <span>{item.rate}</span>
                                </td>
                                <td className='dataTableContent'>
                                    <span>{item.counterParty}</span>
                                </td>
                                <td className='dataTableContent'>
                                    <span>{item.createDate}</span>
                                </td>
                                <td className='dataTableContent'>
                                    <span>{item.settleDate}</span>
                                </td>
                                <td className='dataTableContent'>
                                    <span>{item.annotation}</span>
                                </td>
                                <td className='dataTableContent'>
                                    <span>{item.status}</span>
                                </td>
                                <td className='dataTableContent'>
                                    <span>{item.blank}</span>
                                </td>
                            </tr>
                        </table>
                    </div>
                )
            })}
        </div>
    )
}

export default DataTable