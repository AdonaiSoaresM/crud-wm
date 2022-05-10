const Form = props =>{
    return (
        <div className="form">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Nome</label>
                        <input type="text" className="form-control"
                            name="name"
                            value={props.user.name}
                            onChange={e => props.updateField(e)}
                            placeholder="Digite o nome..." />
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>E-mail</label>
                        <input type="text" className="form-control"
                            name="email"
                            value={props.user.email}
                            onChange={e => props.updateField(e)}
                            placeholder="Digite o e-mail..." />
                    </div>
                </div>
            </div>

            <hr />
            <div className="row">
                <div className="col-12 d-flex justify-content-end">
                    <button className="btn btn-primary"
                        onClick={e => props.save(e)}>
                        Salvar
                    </button>

                    <button className="btn btn-secondary ml-2"
                        onClick={e => props.clear(e)}>
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Form