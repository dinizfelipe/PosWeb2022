import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { api } from "../../services/api";

export default function InfoClientes(props){

    const [infoClientes, setInfoClientes] = useState([]);

    useEffect(()=>{
        // getData();
        getInfoClientes();
    },[]);
    

    // async function getData(){
    //     const response = await api.get('/clientes');
    //     setClientes(response.data);
    // }

    async function getInfoClientes(){
        let id = props.url.pathname.split('/');
        id = id[2];
        const response = await api.get(`/clientes/${id}`);
        setInfoClientes(response.data);
    }

    return(
        <Table striped bordered>
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Nome</th>
                <th scope="col">Peso</th>
                <th scope="col">Altura</th>
                <th scope="col">Sexo</th>
                <th scope="col">IMC</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{infoClientes.id}</td>
                <td>{infoClientes.nome}</td>
                <td>{infoClientes.peso}</td>
                <td>{infoClientes.altura}</td>
                <td>{infoClientes.sexo}</td>
                <td>{infoClientes.imc}</td>
            </tr>
        </tbody>
    </Table>
    );
}