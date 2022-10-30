import React from "react"
const SECURITY_CODE="JR"
function UseState({name}) {
  const [state,setState]=React.useState({
    inputValue:'',
    ok:false,
    error:false,
    loading:false,
  })
  const {inputValue,ok,error,loading}=state
  React.useEffect(()=>{
    if (loading) {
      setTimeout(() => {
        if (inputValue===SECURITY_CODE) {
            setState({
                ...state,
                ok:true,
                error:false,
                loading:false,
            })
        } else {
            setState({
                ...state,
                ok:false,
                error:true,
                loading:false,
            })
        }
    }, 1000);
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
        setState({
         ...state,
         inputValue:e.target.value
        })
       }
      }
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
        setState({
         ...state,
         loading:true
        })
        }
       }
      >Go ahead
      </button>
    </div>
  )
}

export {UseState}