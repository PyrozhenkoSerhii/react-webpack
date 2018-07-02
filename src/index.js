import React from "react";
import ReactDOM from "react-dom";
import Home from './components/home';

class Index extends React.Component{
    render(){
        return(
            <div>
                <p>React webpack</p>
                <Home/>
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById("index"));