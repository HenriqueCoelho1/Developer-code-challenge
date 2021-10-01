import React from 'react'


const UpdateForm = ({ values, handleSubmit, handleChange, cpf, setCpf }) => {

    const { name, email } = values
    const formatingCPF = (cpf) => {
        cpf = cpf.replace(/[^\d]/g, "");
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3 offset-md-4 pt-5">
                    <h1 className="text-center pb-2">Editar</h1>
                    <form layout="vertical" onSubmit={handleSubmit}>

                        <div className="form-group">
                            <label className="col-form-label">Nome Completo:</label>
                            <input
                                onChange={handleChange}
                                value={name}
                                name="name"
                                type="text"
                                className="form-control"
                                placeholder="Ex.: João da Silva Santos" />
                        </div>

                        <div className="form-group">
                            <label className="col-form-label">Email:</label>
                            <input
                                onChange={handleChange}
                                value={email}
                                name="email"
                                type="email"
                                className="form-control"
                                placeholder="exemplo@gmail.com" />
                        </div>

                        <div className="form-group">
                            <label className="col-form-label">Cpf:</label>
                            <input
                                value={formatingCPF(cpf)}
                                name="cpf"
                                type="number"
                                className="form-control"
                                disabled />
                        </div>

                        <br />
                        <button type="submit" className="btn btn-outline-info centered">Atualizar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateForm
