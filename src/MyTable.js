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
import ProductCard from "./components/ProductCard";
import Data from './data.json';



 export function MyTable({ title }) {
  return(
     <>
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
      <ProductCard key={index} name={product.name} price={product.price} product={product.product}/>))};
      

 
       
       
         
            
     
          
        </Table>
      </>
    );
  }
  


  //            {data && data.map((o,i) => {
    //         <Option key={i}>{o.storagebin}</Option>