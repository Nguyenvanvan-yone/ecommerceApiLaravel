import React from "react";
import { BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import MasterLayout from "./Layouts/Manage/MasterLayout";
import Home from "./Components/User/Home";
function App() {
    return (
        <div className="App">
           <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/admin" name="Admin" render={(props)=> <MasterLayout {...props}/>} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
