import React, {Component} from "react";

export default class TodoApp extends Component {

    render () {

        return(

            <div className="TodoApp">
                <LoginComponent />
            </div>
        )
    }
}


class LoginComponent extends Component {

    render () {

        return(

            <div className="LoginComponent">
                User Name : <input type="text" name="UserName" />
                Password : <input type= "password" name="Password"/>
                <button>Login</button>
            </div>
        )
    }
}