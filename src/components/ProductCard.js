import React from "react";
import {
    Label,
    TableCell,
    TableColumn,
    TableRow,
    Table,
    Button,
    Icon,
    Input,
    List,
    Option,
    StandardListItem,
  } from "@ui5/webcomponents-react";
  import "@ui5/webcomponents-icons/dist/AllIcons.js";
  import { Select } from '@ui5/webcomponents-react';
  import Data from '../data.json'
  class ProductCard extends React.Component {
      render(){
          return (
              <>
            <TableRow>
            <TableCell>
              <Label>{this.props.name}</Label>
            </TableCell>
            <TableCell>
              <Label>{this.props.price}</Label>
            </TableCell>
            <TableCell>
              <Label>{this.props.product}</Label>
            </TableCell>
           {/*  <TableCell>
              <Label>RRY1_JS_PSA</Label>
            </TableCell>
            <TableCell>
              <Label>1234567890</Label>
            </TableCell>
            <TableCell>
              <Label>12345</Label>
            </TableCell>
            <TableCell>
              <Label>BAHAHA 1212</Label>
            </TableCell>
            <TableCell>
              <Label>1232</Label>
            </TableCell>
            <TableCell>
              <Label>0.696</Label>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Label>RRY2_JS_PSA</Label>
            </TableCell>
            <TableCell>
              <Label>1112345672</Label>
            </TableCell>
            <TableCell>
              <Label>23456</Label>
            </TableCell>
            <TableCell>
              <Label>BHIGYU 2323</Label>
            </TableCell>
            <TableCell>
              <Label>3456</Label>
            </TableCell>
            <TableCell>
              <Label>0.678</Label>
            </TableCell>
            <TableCell>
              <Label>RRY1_JS_PSA</Label>
            </TableCell>
            <TableCell>
              <Label>1234567890</Label>
            </TableCell>
            <TableCell>
              <Label>12345</Label>
            </TableCell>
            <TableCell>
              <Label>BAHAHA 1212</Label>
            </TableCell>
            <TableCell>
              <Label>1232</Label>
            </TableCell>
            <TableCell>
              <Label>0.696</Label>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Label>RRY2_JS_PSA</Label>
            </TableCell>
            <TableCell>
              <Label>1112345672</Label>
            </TableCell>
            <TableCell>
              <Label>23456</Label>
            </TableCell>
            <TableCell>
              <Label>BHIGYU 2323</Label>
            </TableCell>
            <TableCell>
              <Label>3456</Label>
            </TableCell>
            <TableCell>
              <Label>0.678</Label>
            </TableCell> <TableCell>
              <Label>RRY1_JS_PSA</Label>
            </TableCell>
            <TableCell>
              <Label>1234567890</Label>
            </TableCell>
            <TableCell>
              <Label>12345</Label>
            </TableCell>
            <TableCell>
              <Label>BAHAHA 1212</Label>
            </TableCell>
            <TableCell>
              <Label>1232</Label>
            </TableCell>
            <TableCell>
              <Label>0.696</Label>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Label>RRY2_JS_PSA</Label>
            </TableCell>
            <TableCell>
              <Label>1112345672</Label>
            </TableCell>
            <TableCell>
              <Label>23456</Label>
            </TableCell>
            <TableCell>
              <Label>BHIGYU 2323</Label>
            </TableCell>
            <TableCell>
              <Label>3456</Label>
            </TableCell>
            <TableCell>
              <Label>0.678</Label>
            </TableCell> */}
          </TableRow>
          </>
          )

      }

  }

  export default ProductCard