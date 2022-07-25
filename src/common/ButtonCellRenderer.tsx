import React from "react";
// import { ICellRendererParams } from "ag-grid-community";

export default function ButtonCellRenderer(props: any) {
    // const onClick = () => {
    //     localStorage.removeItem('rowData');
    //     const { data } = props.node;
    //     let message = "";
    //     Object.keys(data).forEach((key) => {
    //         message += key + ":" + data[key] + "\n";
    //     });
    //     alert(message);
    //     console.log('data: ', data);
    //     return props.click(data);
    // };
    return <span style={props.style}>{props.value}</span>;
}
