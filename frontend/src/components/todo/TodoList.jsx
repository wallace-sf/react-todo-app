import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import IconButton from '../utils/IconButton';
import { markAsDone, remove } from '../../store/actions/todosActions';

const TodoList = props => {
    const renderRows = () => {
        const list = props.list || [];
        const { description, filter } = props;

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>
                    {todo.description}
                </td>
                <td>
                    <IconButton style="success" icon="check" hide={todo.done}
                        onClick={() => props.markAsDone(todo, true, description, 
                            filter)} />
                    <IconButton style="warning" icon="undo" hide={!todo.done}
                        onClick={() => props.markAsDone(todo, false, description, 
                            filter)} />
                    <IconButton style="danger" icon="trash-o" hide={!todo.done}
                        onClick={() => props.remove(todo, description, filter)} />
                </td>
            </tr>
        ))
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({
    description: state.todos.description,
    list: state.todos.list,
    filter: state.todos.filter
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ markAsDone, remove }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)