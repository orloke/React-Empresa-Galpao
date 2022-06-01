import { Fragment} from 'react'
import './App.css'
import ModalComponent from './components/ModalUser'
import Navbar from './components/Navbar'
import TabelUser from './components/TabelUser'
import ModalUpdate from './components/ModalUpdate'
import ModalUser from './components/hooks/ModalUser'
import useUsers from './components/hooks/useUsers'
import useProviders from './components/hooks/useProviders'
import ModalProvider from './components/hooks/ModalProviders'
import TabelProviders from './components/TabelProviders'
import ModalUpdateProvider from './components/ModalUpdateProvider'
import ModalComponentProvider from './components/ModalProvider'
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
        <TabelProviders openModalProvider = {handleOpenModalProvider} users = {providersGet} deleteUser = {handleDeleteProvider} openEditModal = {handleOpenEditModalProviders}/>
      }

      <ModalComponent show = {createModal} onHide = {handleCloseModal} createUser = {handleCreateUser} />
      <ModalUpdate show ={editModal} onHide = {handleCloseEditModal} alterarUser = {handleUpdateUser} />
      <ModalUpdate show ={editModal} onHide = {handleCloseEditModal} alterarUser = {handleUpdateUser} />
      <ModalUpdateProvider show ={editModalProvider} onHide = {handleCloseEditModalProviders} alterarProvider = {handleUpdateProvider} />
      <ModalComponentProvider show = {createModalProvider} onHide = {handleCloseModalProvider} createProvider = {handleCreateProvider} />      
    </Fragment>
  )
}

export default App
