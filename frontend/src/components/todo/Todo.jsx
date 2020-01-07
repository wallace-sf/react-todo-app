import React, { Component } from 'react';
import PageHeader from '../template/PageHeader';
import axios from 'axios';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const url = 'http://localhost:3003/api/todos';
const initialState = {
    description: '',
    list: []
}

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            list: []
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.refresh();
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : '';

        axios.get(`${url}?sort=-createdAt${search}`)
            .then(res => this.setState({ ...initialState, list: res.data, description}));
    }

    handleClear() {
        this.refresh();
    }

    handleChange(e) {
        this.setState({
            description: e.target.value
        });
    }

    handleAdd() {
        const description = this.state.description;

        axios.post(url, { description })
            .then(res => this.refresh());
    }

    handleSearch() {
        this.refresh(this.state.description);
    }

    handleRemove(todo) {
        axios.delete(`${url}/${todo._id}`)
            .then(res => this.refresh(this.state.description));
    }

    handleMarkAsDone(todo, bool) {
        axios.put(`${url}/${todo._id}`, { done: bool })
            .then(res => this.refresh(this.state.description));
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    description={this.state.description}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear} />
                <TodoList list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone} />
            </div>
        )
    }
}