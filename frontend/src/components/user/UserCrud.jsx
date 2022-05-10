import { Component } from 'react'
import Main from '../template/Main'
import axios from 'axios'
import Table from '../template/TableUsers'
import Form from '../template/Form'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

const baseUrl = 'http://192.168.1.109:3001/users'

const initialState = {
    user: { name: '', email: '' },
    list: []
}

export default class UserCrud extends Component {

    state = { ...initialState }

    componentDidMount() {
        axios.get(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear = () => {
        this.setState({ user: initialState.user })
    }

    save = () => {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl

        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if (add) list.unshift(user)
        return list
    }

    updateField = event => {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    load = user => {
        this.setState({ user })
    }

    remove = user => {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({ list })
        })
    }

    render() {
        return (
            <Main {...headerProps}>
                <Form user={this.state.user} save={this.save} clear={this.clear} updateField={this.updateField}/>
                <Table user={this.state.user} list={this.state.list} load={this.load} remove={this.remove} />
            </Main>
        )
    }
}

