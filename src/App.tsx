import { Fragment, useState} from 'react'
import './App.css'
import ModalComponent from './components/ModalCreate'
import Navbar from './components/Navbar'
import TabelUser from './components/Tabel'
import ModalUpdate from './components/ModalUpdate'
import ModalUser from './components/hooks/ModalUser'
import useUsers from './components/hooks/useUsers'
import useProviders from './components/hooks/useProviders'
import ModalProvider from './components/hooks/ModalProviders'
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
    takeTable,
    handleChoiceTable
  } = HookChoiceTable()

  
  return (

    <Fragment>
      <Navbar  />
      <ChoiceTabel takeTable= {takeTable} handleChoiceTable = {handleChoiceTable} />
      {
        takeTable == 'usuarios' ?
        <TabelUser openModal = {handleOpenModal}  users = {userGet} deleteUser = {handleDeleteUser} openEditModal = {handleOpenEditModal}/> :
        <TabelUser openModal = {handleOpenModalProvider}  users = {providersGet} deleteUser = {handleDeleteProvider} openEditModal = {handleOpenEditModalProviders}/> 
      }

      <ModalComponent titulo = {'Usuário'} cp = {'Cpf'}  show = {createModal} onHide = {handleCloseModal} createUser = {handleCreateUser} />
      <ModalComponent titulo = {'Fornecedor'} cp = {'Cnpj'} show = {createModalProvider} onHide = {handleCloseModalProvider} createUser = {handleCreateProvider} />
      <ModalUpdate titulo = {'Usuário'} show ={editModal} onHide = {handleCloseEditModal} alterarUser = {handleUpdateUser}/>
      <ModalUpdate titulo = {'Fornecedor'} show ={editModalProvider} onHide = {handleCloseEditModalProviders} alterarUser = {handleUpdateProvider} />
    </Fragment>
  )
}

export default App
