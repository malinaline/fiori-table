import React from 'react';
import { MyTable } from "./MyTable";
import MySecondTable from './components/MySecondTable';
import {
  ThemeProvider
} from '@ui5/webcomponents-react';



function App() {
  return (
    <ThemeProvider>
     <MyTable />
    {/*  <ProductList /> */}
    </ThemeProvider>
  );
}

export default App;
