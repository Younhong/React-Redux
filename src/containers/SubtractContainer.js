import SubtractNumber from '../components/subtract/SubtractNumber';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
    return {
        onClick: function(size){
            dispatch({type: 'DECREMENT', size: size});
        }
    }
}

export default connect(null, 
    mapDispatchToProps)(SubtractNumber);