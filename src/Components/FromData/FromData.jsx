
import './FromData.css'

export default function FromData({inputs, setInputs}) {
  // const [inputs, setInputs] = useState([])
  const inputHandler = (e) => {
        e.preventDefault()
        const inptElements = [...e.target.elements];
        const product = {};
    
    
        inptElements.forEach((element) => {
          if(element.type === 'radio' && !element.checked){
            return
          }
          // product[element.name] = element.value;
          product[element.name] = element.type === 'radio' ? (element.checked ? element.value : '') : element.value;
        });
      
      const productId = product.productId; // Change this to your actual ID field name
      const existingProduct = inputs.find((item) => item.productId === productId);
      
      if(!existingProduct){
        setInputs([...inputs, product]);
      console.log(inputs);

      // Clear form inputs after submission
      inptElements.forEach((element) => {
      if (element.type !== 'radio' && element.type !== 'checkbox') {
        element.value = ''; // Set input value to an empty string
      } else if (element.type === 'radio' || element.type === 'checkbox') {
        element.checked = false; // Uncheck radio and checkbox inputs
      }else {
        alert('Please give another Id')
      }
      });

      }
     
  }
  console.log(inputs)



  return (
    <div className='form-wrapper'>
      <form onSubmit={inputHandler} >
        <label htmlFor="productName">Product Name:
        <input type="text" name='productName' required/>
        </label>

        <label htmlFor="productId">Product Id:
        <input type="text" name='productId' required/>
        </label>

        <label htmlFor="price">Price:
        <input type="text" name='price' required/>
        </label>

        <label htmlFor="quantity">Quantity:
        <input type="text" name='quantity' required/>
        </label>

        <label htmlFor="description">Description:
        <input type="text" name='description' required/>
        </label>

        <label htmlFor="manufracture date">Manufracture:
        <input type="date" name='manufractureDate'/>
        </label>
        <label htmlFor="color">Color:
        <select name="color" required>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
        </label>


        <label style={{display: 'inline'}} htmlFor="size">Size:
          <input  style={{display: 'inline'}} type="radio" name='size' value="M"/><span>M</span>
          <input  style={{display: 'inline'}} type="radio" name='size' value="L"/><span>L</span>
          <input  style={{display: 'inline'}} type="radio" name='size' value="XL"/><span>XL</span>
        </label>

        <label htmlFor="terms">
        <input  style={{display: 'inline'}} required type="checkbox" id="terms" name="terms" />
        Terms and Condition
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}



// const productId = product.productId; // Change this to your actual ID field name
//   const existingProduct = inputs.find((item) => item.productId === productId);

//   if (!existingProduct) {
//     setInputs([...inputs, product]);
//     console.log(inputs);

//     // Clear form inputs after submission
//     inptElements.forEach((element) => {
//       if (element.type !== 'radio' && element.type !== 'checkbox') {
//         element.value = ''; // Set input value to an empty string
//       } else if (element.type === 'radio' || element.type === 'checkbox') {
//         element.checked = false; // Uncheck radio and checkbox inputs
//       }
//     });
//   } else {
//     console.log('Product with the same ID already exists.');
//     // Handle the case where the product ID already exists in state
//   }
// };
// try------------------2

// export default function FormData() {

//   const [date, setDate] = useState([])
  // const handelSubmit = (event) => {
    // event.preventDefault();
    // const inptElements = [...event.target.elements];
    // const product = {};


    // inptElements.forEach((element) => {
    //   // console.log(`${element.name}: ${element.value}`);
    //   if(element.type === 'radio' && !element.checked){
    //     return
    //   }else{
    //     // element.checked=''
    //   }
    //   product[element.name] = element.value;
    //   // element.value=''
     
    // });

    // for (const item of formInput) {
    //   if (item.ClothId === product.ClothId) {
    //     return alert("Give another id");
    //   }
    // }
    
  //   setFormInput([...formInput, product]);       
  // };

//   function getCurrentFormattedDate() {
//     const currentDate = new Date();
//     const year = currentDate.getFullYear();
//     const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
//     const day = currentDate.getDate().toString().padStart(2, '0');
//     return `${year}-${month}-${day}`;
//   }




//   return (
//     <>
//       <div className="form-container">
//         <form className="product-form" action="Submit" onSubmit={handelSubmit}>
//           <Input
//             name="ClothId"
//             type="number"
//             autoComplete='off'
//             min='1'           
//             max='9999'
//             required
//             labelText="Cloth Id"
//             placeholder="please give a number"
//           />
//           <Input
//             name="ClothName"
//             maxLength="15"
//             autoComplete='off'
//             required
//             labelText="Cloth Name"
//             placeholder="Cloth Name"
//           />
//           <Input
//             name="Price"
//             min="0"
//             max='9999'
//             autoComplete='off'
//             required
//             type="number"
//             labelText="Price"
//             placeholder="please give a number"
//           />
//           <Input
//             name="Quantity"
//             type="number"
//             min='1'
//             max='99'
//             autoComplete='off'
//             required
//             labelText="Quantity"
//             placeholder="please give a number"
//           />
//             <label className="texarea">
//               Discription
//             <textarea name="Description"cols="37" rows="10" placeholder="Optional" >
              
//               </textarea>
//             </label>
          // <div className="div lastRow">
          //   <select name="Color" id="select" required>
          //     <option value={""}>Color</option>
          //     <option value={"Red"}>Red</option>
          //     <option value={"Blue"}>Blue</option>
          //     <option value={"Yallow"}>Yallow</option>
          //   </select>
          //   <div className="redio">
          //     <label>               
          //       Size:
          //       <div className="m">
          //         <label>
          //           <input type="radio" required name="size" value="M" />M
          //         </label>
          //       </div>
          //       <div className="xl">
          //         <label>
          //           <input type="radio" required name="size" value="XL" />
          //           XL
          //         </label>
          //       </div>
          //       <div className="xxl">
          //         <label>
          //           <input type="radio" required name="size" value="XXL" />
          //           XXL
          //         </label>
          //       </div>
          //     </label>
          //   </div>
          // </div>
          // <div className="terms-date">
          //   <div className="terms">
              // <input required type="checkbox" id="terms" name="terms" value="terms" />
          //     <label htmlFor="terms">Terms And Condition</label>
          //   </div>
          //   <div className="date">
          //     <label htmlFor="date">Date: </label>
          //     <input required type="date" id="date" onChange={(e)=>setDate(e.target.value)} value={date} name="date" />
          //   </div>
          // </div>

//           <input type="submit" className="submit" value="Submit" required />
//         </form>
//       </div>
//     </>
//   );
//


// try------------1


// import React, { useState } from 'react';

// function CheckoutForm() {
//   const [formData, setFormData] = useState({
//     clothName: '',
//     clothId: '',
//     price: '',
//     quantity: '',
//     description: '',
//     size: 'M',
//     color: 'red',
//     terms: false
//   });

//   const [formSubmissions, setFormSubmissions] = useState([]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     const newValue = type === 'checkbox' ? checked : value
//     setFormData({ ...formData, [name]: newValue });
//   };

  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Store the current form data along with previous submissions
//     setFormSubmissions([...formSubmissions, formData]);
//     // Reset form fields after submission
//     setFormData({
//       clothName: '',
//       clothId: '',
//       price: '',
//       quantity: '',
//       description: '',
//       size: 'M',
//       color: 'red',
//       terms: false
//     });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         {/* Form fields remain the same */}
    
//         <label>
//         Cloth Name:
//         <input
//           type="text"
//           name="clothName"
//           value={formData.clothName}
//           onChange={handleChange}
//         />
//       </label>

//       <label>
//         Cloth Id:
//         <input
//           type="text"
//           name="clothId"
//           value={formData.clothId}
//           onChange={handleChange}
//         />
//       </label>

//       <label>
//         Price:
//         <input
//           type="text"
//           name="price"
//           value={formData.price}
//           onChange={handleChange}
//         />
//       </label>

//       <label>
//         Quantity:
//         <input
//           type="text"
//           name="quantity"
//           value={formData.quantity}
//           onChange={handleChange}
//         />
//       </label>

//       <label>
//         Description:
//         <input
//           type="text"
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//         />
//       </label>

//       <label>
//         Size:
//         <div>
//           <label>
//             <input
//               type="radio"
//               name="size"
//               value="M"
//               checked={formData.size === 'M'}
//               onChange={handleChange}
//             />
//             M
//           </label>

//           <label>
//             <input
//               type="radio"
//               name="size"
//               value="L"
//               checked={formData.size === 'L'}
//               onChange={handleChange}
//             />
//             L
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="size"
//               value="XL"
//               checked={formData.size === 'XL'}
//               onChange={handleChange}
//             />
//             XL
//           </label>

//         </div>
//       </label>

//       <label>
//         Color:
//         <select
//           name="color"
//           value={formData.color}
//           onChange={handleChange}
//         >
//           <option value="red">Red</option>
//           <option value="green">Green</option>
//           <option value="orange">Orange</option>

//         </select>
//       </label>
//       <label htmlFor="terms"><input type="checkbox" name='terms' checked={formData.terms} onChange={handleChange} />Terms and Condition</label>
//       <button type="submit">Submit</button>
//       </form>

//       <div>
//         <h3>Previous Submissions:</h3>
//         <ul>
//           {formSubmissions.map((submission, index) => (
//             <li key={index}>
//              <h3>{submission.clothName}</h3>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default CheckoutForm;

