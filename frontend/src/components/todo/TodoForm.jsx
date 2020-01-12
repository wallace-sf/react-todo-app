import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { add, changeDescription, search, clear } from '../../store/actions/todosActions';
import Grid from '../utils/Grid';
import IconButton from '../utils/IconButton';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.keyHandler = this.keyHandler.bind(this);
    }

    componentDidMount() {
        this.props.search();
    }

    keyHandler(e) {
        const { add, search, description, clear } = this.props;

        if (e.key === 'Enter') {
            e.shiftKey ? search(description) : add(description);
        } else if (e.key === 'Escape') {
            clear();
        }
    }

    render() {
        const { add, search, description, clear } = this.props;

        return (
            <div role="form" className="todoForm">
                <Grid cols="12 9 10">
                    <input type="text" id="description" placeholder="Adicione uma tarefa"
                        className="form-control"
                        value={this.props.description}
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler} />
                </Grid>
                <Grid cols="12 3 2">
                    <IconButton style="primary" icon="plus"
                        onClick={() => add(description)} />
                    <IconButton style="info" icon="search"
                        onClick={() => search(description)} />
                    <IconButton style="default" icon="close"
                        onClick={() => clear()} />
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    description: state.todos.description
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ add, changeDescription, search, clear }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)