import React  from "react";
import uuid from 'react-uuid';
import { FaSortDown } from 'react-icons/fa';

import { assetClass } from "../utils/utils";

const Finance = ({financeDataList, handleSort}) => {

    return(
        <div className="finance-table">
            <table>
            <tbody>
                <tr>
                    <th>Ticker<FaSortDown className="sort-icon" onClick={()=>handleSort('ticker')}/></th>
                    <th>Price<FaSortDown className="sort-icon" onClick={()=>handleSort('price')}/></th>
                    <th>Asset Class<FaSortDown className="sort-icon" onClick={()=>handleSort('assetClass')}/></th>
                </tr>
                {
                    financeDataList.length > 0 && financeDataList.map((items) => {
                        return(
                            <tr key={uuid()} style={{backgroundColor: assetClass[items.assetClass]}}>
                                <td>{items.ticker}</td>
                                <td style={{ color: items.price < 0? 'red': 'black'}}>{items.price}</td>
                                <td>{items.assetClass}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </table>
        </div>
    )
};

export default Finance;