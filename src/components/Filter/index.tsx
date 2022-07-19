import React from 'react'
import './style.css'

const Filter = () => {
    return (
        <div className="mainDivFilter textSMBSLG">
            <table className='filterTable'>
                <tr className='filterRow'>
                    <td className='filterContent'>
                        <label htmlFor="type">Type</label><br />
                        <input id='type' className='filterInput' type="text" />
                    </td>
                    <td className='filterContent'>
                        <label htmlFor="id">ID</label><br />
                        <input id='id' className='filterInput' type="text" />
                    </td>
                    <td className='filterContent'>
                        <label htmlFor="logo">Type</label><br />
                        <input id='logo' className='filterInput' type="text" />
                    </td>
                    <td className='filterContent'>
                        <label htmlFor="quantity">Quantity</label><br />
                        <input id='quantity' className='filterInput' type="text" />
                    </td>
                    <td className='filterContent'>
                        <label htmlFor="rate">Rate</label><br />
                        <input id='rate' className='filterInput' type="text" />
                    </td>
                    <td className='filterContent'>
                        <label htmlFor="counterParty">Counter Party</label><br />
                        <input id='counterParty' className='filterInput' type="text" />
                    </td>
                    <td className='filterContent'>
                        <label htmlFor="createDate">Create Date</label><br />
                        <input id='createDate' className='filterInput' type="text" />
                    </td>
                    <td className='filterContent'>
                        <label htmlFor="settleDate">Settle Date</label><br />
                        <input id='settleDate' className='filterInput' type="text" />
                    </td>
                    <td className='filterContent'>
                        <label htmlFor="annotation">Annotation</label><br />
                        <input id='annotation' className='filterInput' type="text" />
                    </td>
                    <td className='filterContent'>
                        <div>Status</div><br />
                    </td>
                    <td className='filterContent'>
                        <div></div><br />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Filter