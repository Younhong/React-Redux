import DisplayNumber from '../components/display/DisplayNumber';
import { connect } from 'react-redux';

function mapReduxStateToReactProps(state) {
    return {
        number: state.number
    }
}

export default connect(
    mapReduxStateToReactProps)(DisplayNumber);

/*
import store from '../store';

class DisplayContainer extends Component {
    state = {
        number: store.getState().number
    }
    constructor(props) {
        super(props);
        store.subscribe(function(){
            this.setState({number: store.getState().number});
        }.bind(this));
    }
    render(){
        return <DisplayNumber number={this.state.number}/>
    }
}

export default DisplayContainer;
*/