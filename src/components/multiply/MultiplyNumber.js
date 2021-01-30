import React, { Component } from 'react';

class MultiplyNumber extends Component {
    state = {
        size: 1
    }
    render() {
        return (
        <div>
            <h1>Multiply Number</h1>
            <input type="button" value="X" onClick={function(){
                this.props.onClick(this.state.size);
            }.bind(this)}></input>
            <input type="text" value={this.state.size} onChange={function(e) {
                this.setState({size: Number(e.target.value)});
            }.bind(this)}></input>
        </div>
        )
    }
}

export default MultiplyNumber;