import Modal from "react-modal";
import { Form } from "../Form/Form";
import MaterialReactTable from 'material-react-table';

import "./Table.styles.css";


export const Table = ({
  columns, 
  data, 
  valueInput, 
  handleValueChange, 
  openModal, 
  isOpen, 
  onRequestClose, 
  onSubmitForm,
  closeModal
}) => {
  
  const customStyles = {
    overlay: {
      zIndex:1,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "50%",
      height: "100%"
    },
    content: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      
      


    }
  };

  return (
    <div className="table">
      
      <div className="search-and-create">
        {data.length !== 0 && (

          <input
            value={valueInput}
            onChange={handleValueChange}
            placeholder={"Busca pelo ID"}
            className="input-id"
          />
        )}
        <button 
          onClick={openModal}
          className="button-addNewResident"
        >
          Adicionar Novo Residente
        </button>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Exemplo Modal"
        style={customStyles}
      >
        <Form
          onClick={closeModal} 
          onSubmit={onSubmitForm}
        />
       
      </Modal>
      {data.length !== 0 && (

        <MaterialReactTable
          enableDensityToggle={false}
          enableHiding={false}
          columns={columns} 
          data={data} 
          enableFullScreenToggle={false} 
          enableFilters={false} 
          enableSorting={false} 
          muiTablePaginationProps={{
            labelRowsPerPage:"Linhas por página"
          }}
        />
      )}
    </div>
    
  );
}