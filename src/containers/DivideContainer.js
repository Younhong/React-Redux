import DivideNumber from '../components/divide/DivideNumber';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
    return {
        onClick: function(size){
            dispatch({type: 'DIVIDE', size: size});
        }
    }
}

export default connect(null, 
    mapDispatchToProps)(DivideNumber);