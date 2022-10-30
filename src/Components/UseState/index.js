import React from "react"
const SECURITY_CODE="JR"
function UseState({name}) {
  const [inputValue,setInputValue]=React.useState('')
  const [error,setError]=React.useState(false)
  const [ok,setOk]=React.useState(false)
  const [loading,setLoading]=React.useState(false)
  console.log(inputValue)
  React.useEffect(()=>{
    if (loading) {
      setTimeout(() => {
        if (inputValue===SECURITY_CODE) {
            setOk(true)
            setError(false)
            setLoading(false)
        } else {
            setOk(false)
            setError(true)
            setLoading(false)
        }
      }, 3000);
    }
  },[loading])
  return (
    <div>
      <h2>Delete {name}</h2>
      <p>Insert the security code here, please</p>
      <input
       type="password"
       placeholder="security code"
       value={inputValue}
       onChange={(e)=>{
        setInputValue(e.target.value)
       }}
      />
      {(!!error && !loading && !ok)&&
        <p>Error: incorret code</p>
      }
      {(!!ok && !loading && !error)&&
        <p>OK</p>
      }
      {(!!loading)&&
        <p>Loading...</p>
      }
      <button
       onClick={
        ()=>{
         setLoading(!loading)
        }
       }
      >Go ahead
      </button>
    </div>
  )
}

export {UseState}