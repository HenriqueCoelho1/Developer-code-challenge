import React, { useState } from 'react'
import { Input, Form } from 'antd'

const { Item } = Form
const Register = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                <Form layout="vertical">
                    <Item name={["fullname"]}
                        label="Nome completo: ">
                        <Input placeholder="Ex.: João da Silva Santos" />
                    </Item>

                    <Item name={["email"]}
                        label="Email: " type="email">
                        <Input placeholder="exemplo@gmail.com" />
                    </Item>

                    <Item name={["cpf"]}
                        label="cpf: ">
                        <Input placeholder="exemplo@gmail.com" />
                    </Item>
                </Form>
            </div>
        </div>
    )
}

export default Register
