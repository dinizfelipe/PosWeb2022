import React, { Suspense } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

const ListarClientesApp = React.lazy(() => import('listar/ListarClientesApp'));
const CadastrarClienteApp = React.lazy(() => import('cadastrar/CadastrarClienteApp'));
const InfoClienteApp = React.lazy(()=> import('info/InfoClientesApp'));

export function Navegacao(){
    const navegacao = useNavigate();
    const url = useLocation();
    return(
        <Routes>
            <Route path="/" element={
                <Suspense fallback={<div>Carregando...</div>}>
                    <ListarClientesApp navegar={navegacao}/>
                </Suspense>
            }/>
            <Route path="/cadastrar" element={
                <Suspense fallback={<div>Carregando...</div>}>
                    <CadastrarClienteApp navegar={navegacao}/>
                </Suspense>
            }/>
            <Route path="/info/:id" element={
                <Suspense fallback={<div>Carregando...</div>}>
                    <InfoClienteApp navegar={navegacao} url={url}/>
                </Suspense>
            }/>
        </Routes>
    );
}