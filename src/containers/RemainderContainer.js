import RemainderNumber from '../components/remainder/RemainderNumber';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
    return {
        onClick: function(size){
            dispatch({type: 'REMAINDER', size: size});
        }
    }
}

export default connect(null, 
    mapDispatchToProps)(RemainderNumber);