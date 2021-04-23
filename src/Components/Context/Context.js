import React, { Component } from 'react'

const UserContext = React.createContext();

export class UserProvider extends Component {
    state = {
        data:null
    }
    async componentDidMount() {
        fetch('')
        const url = "https://newsapi.org/v2/top-headlines?country=tr&apiKey=fa3cd65f238a4aad85ffd7c76374b80b";
        const response = await fetch(url);
        const apiData = await response.json();
        this.setState({data: apiData.articles});
        let newData = []
        this.state.data.map((item)=> newData.push({...item, id :  Math.floor(Math.random() * 10000)}))
        this.setState({data: newData});
        
    
      }
      
    render() {
        return (
            <div>
                <UserContext.Provider value={this.state}>{this.props.children}</UserContext.Provider>
            </div>
        )
    }
}
const UserConsumer = UserContext.Consumer

export default UserConsumer;