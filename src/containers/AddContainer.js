import { Component } from 'react';
import AddNumber from '../components/AddNumber';
import store from '../store';

class AddContainer extends Component {
    render(){
        return <AddNumber onClick={function(size){
            store.dispatch({type: 'INCREMENT', size: size});
        }.bind(this)} />
    }
}

export default AddContainer;