import React from 'react';
import Grid from '../utils/Grid';
import IconButton from '../utils/IconButton';

export default props => {
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd();
        } else if (e.key === 'Escape'){
            props.handleClear();
        }
    }

    return (
        <div role="form" className="todoForm">
            <Grid cols="12 9 10">
                <input type="text" id="description" placeholder="Adicione uma tarefa"
                    className="form-control"
                    value={props.description}
                    onChange={(e) => props.handleChange(e)}
                    onKeyUp={keyHandler} />
            </Grid>
            <Grid cols="12 3 2">
                <IconButton style="primary" icon="plus"
                    onClick={props.handleAdd} />
                <IconButton style="info" icon="search"
                    onClick={props.handleSearch} />
                <IconButton style="default" icon="close"
                    onClick={props.handleClear} />
            </Grid>
        </div>
    )
}