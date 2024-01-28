import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp() {
    return(
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}

//const ReactElement = {
//    type: "a",
//    props: {
//        href: "https://google.com",
//        target: "_blank"
//    },
//    children: 'Click me to visit google'
//}

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "Chai aur react"

const reactElement = React.createElement(
    'a',
    {href:"https://google.com", target:'_blank'},
    'Click me to visit google',
    anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
    //<App />
    //<MyApp />
    //MyApp()
    //ReactElement
    //anotherElement
    //reactElement
    reactElement
  
)