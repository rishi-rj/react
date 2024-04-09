import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherElement = (<a href ='https://google.com' target='_blank'> visit Google</a>);

ReactDOM.createRoot(document.getElementById('root')).render(  <>
  <React.StrictMode>
    <App />
    
  </React.StrictMode>,
  </>
  
)

// ReactDOM.createRoot(document.getElementById('root')).render(  
//   anotherElement
  
  
// )
