import { Paper } from '@material-ui/core';
import React, {Component} from 'react';

class ResultComponent extends Component {


    render() {
        let {result} = this.props;
        return (
            <Paper className="result" elevation={3}>
                <p>{result}</p>
            </Paper>
    )
        ;
    }
}


export default ResultComponent;