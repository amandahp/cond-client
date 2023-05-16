import { useState, useEffect, useCallback } from "react";
import { Header, Table } from "../../components"
import { listApi, listOneItemApi, registerApi } from "../../services/condominiumApi";
import {isEmpty, omit} from 'lodash'


export const HomePage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [users, setUsers] = useState([])

  const fetchList = useCallback(async() => {
    try{
      const response = await listApi()
      console.log(response)
      if(response.length) {
        const responseFiltered = response.filter((r) => !isEmpty(r))
        const responseFormatted = responseFiltered.map((r) => omit(r, ['data']))
        setData(responseFormatted);
        setUsers(responseFormatted)
        console.log(responseFormatted)
      }
      
      
    }catch(e){
      setError(e);
    }
  },[])

  useEffect(() => {
    fetchList()
  },[fetchList])


  const fetchResident = useCallback(async(id) => { 
    try{
      const user = await listOneItemApi(id)
      setUsers([user] || [])
    }catch(e){
      setError(e);
    }
  },[])

  const handleValueChange = e => {
    const value = e.target.value || undefined;
    const numericValue = value ? value.replace(/\D/g, '') : "";
    if(numericValue) {
      fetchResident(numericValue)
    }else {
      setUsers(data)
    }
    console.log(numericValue);
  };


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addNewRow = async(data) => {
    try {
      console.log(data)
      data.appartament = Number(data.appartament)
      await registerApi(data);
      

      fetchList()
    } catch (e) {
      setError(e);
    }
    setIsModalOpen(false);
  };

  const columns = [{Header:'Nome',accessorKey:'name'},{Header:'Telefone',accessorKey:'phone'},{Header:'Apartamento', accessorKey:'appartament'},{Header:'Número da Vaga',accessorKey:'parkingNumber'},{Header:'Contato de Emergência', accessorKey:'emergencyContact'}]


  return(
    <>
    <Header />
      <Table 
      handleValueChange={handleValueChange} 
      columns={columns} 
      data={users} 
      isOpen={isModalOpen}  
      onRequestClose={closeModal} 
      openModal={openModal}
      addNewResident={addNewRow}
      onSubmitForm={addNewRow}
    />
  </>

  )
}
