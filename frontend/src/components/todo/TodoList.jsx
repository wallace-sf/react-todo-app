import React from 'react';
import IconButton from '../utils/IconButton';

export default props => {
    const renderRows = () => {
        const list = props.list || [];

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>
                    {todo.description}
                </td>
                <td>
                    <IconButton style="success" icon="check" hide={todo.done}
                        onClick={() => props.handleMarkAsDone(todo, true)} />
                    <IconButton style="warning" icon="undo" hide={!todo.done}
                        onClick={() => props.handleMarkAsDone(todo, false)} />
                    <IconButton style="danger" icon="trash-o" hide={!todo.done}
                        onClick={() => props.handleRemove(todo)} />
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