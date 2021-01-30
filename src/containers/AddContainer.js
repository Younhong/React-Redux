import AddNumber from '../components/add/AddNumber';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
    return {
        onClick: function(size){
            dispatch({type: 'INCREMENT', size: size});
        }
    }
}

export default connect(null, 
    mapDispatchToProps)(AddNumber);

/*
import store from '../store';

class AddContainer extends Component {
    render(){
        return <AddNumber onClick={function(size){
            store.dispatch({type: 'INCREMENT', size: size});
        }.bind(this)} />
    }
}

export default AddContainer;
*/