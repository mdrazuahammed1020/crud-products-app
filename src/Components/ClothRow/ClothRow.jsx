import React from 'react'

export default function({item, filterFunc}) {
    const removeItem = (id) => {
        filterFunc(id)
    }
  return (
        <tr>
            <td>{item.productName}</td>
                                
            <td>{item.productId}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>{item.description}</td>
            <td>{item.manufractureDate}</td>
            <td>{item.color}</td>
            <td>{item.size}</td>
            <td>{item.terms}</td>
            <td onClick={()=> removeItem(item.productId)} style={{cursor: 'pointer', color: "red"}}>Delete</td>
        </tr>
  )
}
