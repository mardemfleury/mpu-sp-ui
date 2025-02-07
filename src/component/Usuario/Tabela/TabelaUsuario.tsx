import React, { useEffect, useState } from 'react';
import Conteudo from '../../../compenentes-compartilhados/Conteudo/Conteudo'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import InputGroup from '../../../compenentes-compartilhados/InputGroup/InputGroup'
import { Link } from 'react-router-dom';
import './TabelaUsuario.scss'
import Button from '../../../compenentes-compartilhados/Button/Button';
import { buscarUsuarios, listarUsuarios } from '../Servico/usuario.service';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export class UsuarioSearch {
    nome?: any
    id?: string
    cpf?: string
    endereco?: string
}

function TabelaUsuario() {

    const [ usuarios, setUsuarios ] = useState([])
    const [ usuario, setUsuario ] = useState('')
    const [ opcao, setOpcao ] = useState('')

    async function fetchData() {
        const _usuarios = await listarUsuarios()
        setUsuarios(_usuarios)
    }

    async function buscar() {
        const _usus = await buscarUsuarios(usuario)
        setUsuarios(_usus)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return <Conteudo >
    <div className='HeaderUsuario'>

        <h2>Lista de Usuários <AssignmentIndIcon /></h2>

        <div className='left'>
            <InputGroup onChange={ (e) => setUsuario(e.target.value) } onClick={ buscar }></InputGroup>
                <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Escolha como deseja buscar:</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    
                </RadioGroup>
            </FormControl>
        </div>
    
        <Link className='BtnCriarDocumento AppCriarDocumento right' to="/formulario-usuario"><Button value='Novo usuário' color='create'></Button></Link>
        
        <div className="clear"></div>

    </div>
    <table className="AppTabelaUsuario">
        <thead>
            <tr>
                <th>Nome</th>
                <th>Setor</th>
                <th>Contato</th>
            </tr>
        </thead>
            <tbody>
                
            {

                usuarios.map(( listValue:any, index:any ) => {
                    return (
                        <tr key={index}>
                            <td>{ listValue.nome }</td>
                            <td>{ listValue.setor }</td>
                            <td>{ listValue.telefone }</td> 
                        </tr>
                    );
                })

            }

            </tbody>

        </table>
    
    </Conteudo>

}

export default TabelaUsuario