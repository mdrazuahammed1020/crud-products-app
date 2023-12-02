import React from 'react'
import './ClothTable.css'
import ClothRow from '../ClothRow/ClothRow'
export default function ({inputs, filterFunc}) {
  return (
    <div className='table-container'>
        <table>
            <tbody>
                <tr>
                    <th>ProductName</th>
                    <th>ProductId</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Description</th>
                    <th>Man. Date</th>
                    <th>Color</th>
                    <th>Size</th>
                    <th>Terms&Con.</th>
                    <th>Delete</th>
                </tr>

                {/* <ClothRow />                */}

                {
                    inputs.map(item => (
                       <ClothRow key={item.productId} item={item} filterFunc={filterFunc} />
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
