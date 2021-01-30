import MultiplyNumber from '../components/multiply/MultiplyNumber';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
    return {
        onClick: function(size){
            dispatch({type: 'MULTIPLY', size: size});
        }
    }
}

export default connect(null, 
    mapDispatchToProps)(MultiplyNumber);