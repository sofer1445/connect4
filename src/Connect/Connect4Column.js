import React from 'react';
 class Connect4Column extends React.Component {



    render(){
        return(
            <div className="connect4-column">
                {this.props.column}
            </div>
        )
    }
}
export default Connect4Column;