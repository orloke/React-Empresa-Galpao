import { Fragment, useState} from 'react'
import './App.css'
import ModalComponent from './components/ModalCreate'
import Navbar from './components/Navbar'
import TabelUser from './components/Tabel'
import ModalUpdate from './components/ModalUpdate'
import useUsers from './components/hooks/useUsers'
import useProviders from './components/hooks/useProviders'
import useTransports from './components/hooks/useTransport'
import ModalUser from './components/hooks/ModalUser'
import ModalProvider from './components/hooks/ModalProviders'
import ModalTransport from './components/hooks/ModalTransport'
import HookChoiceTable from './components/hooks/HookChoiceTable'
import ChoiceTabel from './components/ChoiceTabel'


function App() {

  const {
    createModal,
    editModal,
    handleOpenModal,
    handleCloseModal,
    handleOpenEditModal,
    handleCloseEditModal
  } = ModalUser()

  const {
    userGet,
    handleCreateUser,
    handleDeleteUser,
    handleUpdateUser
  } = useUsers()

  const {
    providersGet,
    handleCreateProvider,
    handleUpdateProvider,
    handleDeleteProvider    
  } = useProviders()

  const {
    editModalProvider,
    handleOpenEditModalProviders,
    handleCloseEditModalProviders,
    createModalProvider,
    handleOpenModalProvider,
    handleCloseModalProvider,
  } = ModalProvider()

  const {
    transportGet,
    handleCreateTransport,
    handleUpdateTransport,
    handleDeleteTransport
  } = useTransports()

  const {
    createModalTransport,
    editModalTransport,
    handleOpenModalTransport,
    handleCloseModalTransport,
    handleOpenEditModalTransport,
    handleCloseEditModalTransport,
  } = ModalTransport()

  const {
    takeTable,
    handleChoiceTable
  } = HookChoiceTable()

  
  return (

    <Fragment>
      

      <Navbar  />
      <ChoiceTabel takeTable= {takeTable} handleChoiceTable = {handleChoiceTable} />
      {
        takeTable == 'usuarios' &&
        <TabelUser titulo = {'Usuários'} cp = {'Cpf'} openModal = {handleOpenModal}  users = {userGet} deleteUser = {handleDeleteUser} openEditModal = {handleOpenEditModal}/>
      }
      { takeTable == 'fornecedores' &&
        <TabelUser titulo = {'Fornecedor'} cp = {'Cnpj'} openModal = {handleOpenModalProvider}  users = {providersGet} deleteUser = {handleDeleteProvider} openEditModal = {handleOpenEditModalProviders}/> 
      }
      { takeTable == 'tranportadoras' &&
        <TabelUser titulo = {'Transportadoras'} cp = {'Cnpj'} openModal = {handleOpenModalTransport}  users = {transportGet} deleteUser = {handleDeleteTransport} openEditModal = {handleOpenEditModalTransport}/> 
      }

      <ModalComponent titulo = {'Usuário'} cp = {'Cpf'}  show = {createModal} onHide = {handleCloseModal} createUser = {handleCreateUser} />
      <ModalComponent titulo = {'Fornecedor'} cp = {'Cnpj'} show = {createModalProvider} onHide = {handleCloseModalProvider} createUser = {handleCreateProvider} />
      <ModalComponent titulo = {'Transportadoras'} cp = {'Cnpj'} show = {createModalTransport} onHide={handleCloseModalTransport} createUser={handleCreateTransport} />
      <ModalUpdate titulo = {'Usuário'} show ={editModal} onHide = {handleCloseEditModal} alterarUser = {handleUpdateUser}/>
      <ModalUpdate titulo = {'Fornecedor'} show ={editModalProvider} onHide = {handleCloseEditModalProviders} alterarUser = {handleUpdateProvider} />
      <ModalUpdate titulo = {'Transportadora'} show ={editModalTransport} onHide = {handleCloseEditModalTransport} alterarUser = {handleUpdateTransport} />
    </Fragment>
  )
}

export default App
