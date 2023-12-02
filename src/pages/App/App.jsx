import { useState } from "react";
import FromData from "../../Components/FromData/FromData";
import ClothTable from "../../Components/ClothTable/ClothTable";

export default function App() {
  const [inputs, setInputs] = useState([])
  console.log(inputs)

  const filterFunc = (id) => {
    const filterArr = inputs.filter(item => item.productId !== id)
    setInputs(filterArr)
  }
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'top', gap: '50px'}}>
        <FromData inputs={inputs} setInputs={setInputs} />
        <ClothTable inputs = {inputs} filterFunc={filterFunc} />
    </div>
  )
}
