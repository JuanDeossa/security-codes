import React from "react"
function UseState({name}) {
  const [error,setError]=React.useState(false)
  const [loading,setLoading]=React.useState(false)
  React.useEffect(()=>{
    if (loading) {
      setTimeout(() => {
        setLoading(!loading)
      }, 3000);
    }
  },[loading])
  return (
    <div>
      <h2>Delete {name}</h2>
      <p>Insert the security code here, please</p>
      <input placeholder="security code"/>
      {(!!error)&&
        <p>Error: incorret code</p>
      }
      {(!!loading)&&
        <p>Loading...</p>
      }
      <button
       onClick={
        ()=>{
         setError(!error)
         setLoading(!loading)
        }
       }
      >Go ahead
      </button>
    </div>
  )
}

export {UseState}