import Rows from "./RowsUsers"

const Table = props =>
    <table className="table mt-4">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            <Rows user={props.user} list={props.list} load={props.load} remove={props.remove}/>
        </tbody>
    </table>

export default Table