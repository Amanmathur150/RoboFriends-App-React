import  { Component } from "react";
import Cardlist from "../components/Cardlist";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./Font.css";
import ErrorBoundry from "../components/ErrorBoundry.js";

class App extends Component {
    constructor(props){
    super(props)
    this.state = { 
        'robots': [],
        'searchfield': ''
    }
}

    componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json()).then(users => this.setState({"robots" : users}))
}


    onSearchChange = (event)=>{
        this.setState({searchfield : event.target.value});
        
       
    }
    render(){
    
        const filteredrobo = this.state.robots.filter(robo=>{
        return (robo.name).toLowerCase().includes((this.state.searchfield).toLowerCase())
         })
        return !this.state.robots.length ? <h1>Loading</h1> :
            (<div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox Search={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <Cardlist robots={filteredrobo} />
                    </ErrorBoundry>
                </Scroll>
            </div>)
        
}
}

export default App;
