import React from "react";
import {
    Label,
    TableCell,
    TableColumn,
    TableRow,
    Table,
    Option,
  } from "@ui5/webcomponents-react";
  import { Select } from '@ui5/webcomponents-react';
import TableCells from "./components/TableCells";
import Data from './data.json';



 export function MyTable({ title }) {
  return(
     <>
     <h1>Stock overview</h1>
        <Table
          columns={
            <>
              <TableColumn
                style={{
                  width: "12rem",
                }}
              >

                <Label>Storage Bin</Label>
              </TableColumn>
              <TableColumn minWidth={800} popinText="Supplier">
                <Label>Handling Unit</Label>
              </TableColumn>
              <TableColumn minWidth={600} popinText="Dimensions" demandPopin>
                <Label>Product</Label>
              </TableColumn>
              <TableColumn minWidth={600} popinText="Weight" demandPopin>
                <Label>Product Desc</Label>
              </TableColumn>
              <TableColumn>
                <Label>Batch</Label>
              </TableColumn>
              <TableColumn>
                <Label>Quantity</Label>
              </TableColumn>
            </>
          }
        >
         
        { Data.map((product, index) => (
      <TableCells  key={index} storagebin={product.storagebin} 
                    handlingunit={product.handlingunit} 
                    product={product.product} 
                    productdesc={product.productdesc}
                    batch={product.batch}
                    quantity={product.quantity}
                    
                    />))};

      

 
       
       
         
            
     
          
        </Table>
      </>
    );
  }
  


  //            {data && data.map((o,i) => {
    //         <Option key={i}>{o.storagebin}</Option>