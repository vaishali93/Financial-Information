import { useCallback, useState } from 'react';
import './App.css';

import Finance from './components/Finance';
import financeData from './data/financeData';
import { assestClassOrder } from './utils/utils';

function App() {

  const [financeDataList, setFinanceDataList] = useState(financeData);

  const sortBy = (field) =>{
    return function(a, b) {
      return (assestClassOrder[a[field]] < assestClassOrder[b[field]]) - (assestClassOrder[a[field]] > assestClassOrder[b[field]])
   };
  }

  const handleSort = useCallback((sortKey) => {
    let sortedData = [...financeDataList];
    if(sortKey === 'assetClass'){
      sortedData.sort(sortBy('assetClass'));
    } else if(sortKey === 'price'){
      sortedData.sort((a,b) =>  b.price - a.price);
    } else if(sortKey === 'ticker'){
      sortedData.sort((a,b) =>  a.ticker.localeCompare(b.ticker));
    }
    setFinanceDataList(sortedData);
  },[financeDataList]);

  return (
    <div className="App">
      <h1>Financial Instruments Data</h1>
      <Finance financeDataList={financeDataList} handleSort={handleSort}/>
    </div>
  );
}

export default App;
