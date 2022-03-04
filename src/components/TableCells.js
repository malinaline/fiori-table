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
  class Tablecells extends React.Component {
      render(){
          return (
              <>
            <TableRow>
            <TableCell>
              <Label>{this.props.storagebin}</Label>
            </TableCell>
            <TableCell>
              <Label>{this.props.handlingunit}</Label>
            </TableCell>
            <TableCell>
              <Label>{this.props.product}</Label>
            </TableCell>
            <TableCell>
              <Label>{this.props.productdesc}</Label>
            </TableCell>
            <TableCell>
           <Label>{this.props.batch}</Label>
            </TableCell>
            <TableCell>
           <Label>{this.props.quantity}</Label>
            </TableCell>
          </TableRow>
          </>
          )

      }

  }

  export default Tablecells