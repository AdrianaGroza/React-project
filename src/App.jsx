import { useState, Fragment } from 'react'
import {nanoid} from "nanoid";
import './App.css'
import PERFUMES_DATA from "./PerfumesData.js";
import RowToRead from './Components/RowToRead';
import RowToEdit from './Components/RowToEdit';

const App = () => {
  const [perfumes, setPerfumes] = useState(PERFUMES_DATA);
  const [editedPerfume, setEditedPerfume] = useState({
    perfumeName:"",
    perfumeBrand:"",
    quantity:"",
    unitOfMeasure:"",
    range:"",
    conc:"",
  });

  const [editFormData, setEditFormData] = useState({
    perfumeName:"",
    perfumeBrand:"",
    quantity:"",
    unitOfMeasure:"",
    range:"",
    conc:"",
  })

  const [editPerfumeId, setEditPerfumeId] = useState(null);


  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...editedPerfume};
    newFormData[fieldName] = fieldValue;
    setEditedPerfume(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...editFormData};
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newPerfume = {
      id: nanoid(),
      perfumeName: editedPerfume.perfumeName,
      perfumeBrand: editedPerfume.perfumeBrand,
      quantity: editedPerfume.quantity,
      unitOfMeasure: editedPerfume.unitOfMeasure,
      range: editedPerfume.range,
      conc: editedPerfume.conc,
    };

    const newPerfumes =[...perfumes, newPerfume];
    setPerfumes(newPerfumes);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedPerfume = {
      id: editPerfumeId,
      perfumeName: editFormData.perfumeName,
      perfumeBrand: editFormData.perfumeBrand,
      quantity: editFormData.quantity,
      unitOfMeasure: editFormData.unitOfMeasure,
      range: editFormData.range,
      conc: editFormData.conc,
    }

    const newPerfumes = [...perfumes];

    const index = perfumes.findIndex((perfume) => perfume.id === editPerfumeId);

    newPerfumes[index] = editedPerfume;

    setPerfumes(newPerfumes);
    setEditPerfumeId(null);

  };

  const handleOnEdit = (event, perfume)=> {
    event.preventDefault();
    setEditPerfumeId(perfume.id);

    const formValues = {
      perfumeName: perfume.perfumeName,
      perfumeBrand: perfume.perfumeBrand,
      quantity: perfume.quantity,
      unitOfMeasure: perfume.unitOfMeasure,
      range: perfume.range,
      conc: perfume.conc,
    }

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditPerfumeId(null);
  };

  const handleDeleteClick = (perfumeId) => {
    const newPerfumes = [...perfumes];

    const index = perfumes.findIndex((perfume) => perfume.id === perfumeId);

    newPerfumes.splice(index, 1);

    setPerfumes(newPerfumes);
  };


  return (
    <div className=" flex-row bg-slate-100">
      <div className="flex justify-center pt-5">
        <h2>Add new entry</h2>
      </div>
      <form onSubmit={handleAddFormSubmit} className="flex pb-5 space-x-1">        
        <input
          className="w-32 m-3 border-2 border-gray-300 rounded-lg hover:bg-slate-300 text-center truncate"
          type="text"
          name="perfumeName"
          required="required"
          placeholder='Add name...'
          onChange={handleAddFormChange}
        />        
        <input
          className="w-32 m-3 border-2 border-gray-300 rounded-lg hover:bg-slate-300 text-center truncate"
          type="text"
          name="perfumeBrand"
          required="required"
          placeholder='Add brand...'
          onChange={handleAddFormChange}
        />     
        <input
          className="w-32 m-3 border-2 border-gray-300 rounded-lg hover:bg-slate-300 text-center truncate" 
          type="number" 
          name="quantity"
          required="required"
          placeholder='Add quantity...'          
          onChange={handleAddFormChange}
        />                     
        <input
          className="w-32 m-3 border-2 border-gray-300 rounded-lg hover:bg-slate-300 text-center truncate" 
          type="text" 
          name="unitOfMeasure"
          required="required"
          placeholder='Add U.M. ...'          
          onChange={handleAddFormChange}
        />        
        <input
          className="w-32 m-3 border-2 border-gray-300 rounded-lg hover:bg-slate-300 text-center truncate" 
          type="text" 
          name="range"
          required="required"
          placeholder='Add range...'          
          onChange={handleAddFormChange}
        />       
        <input
          className="w-32 m-3 border-2 border-gray-300 rounded-lg hover:bg-slate-300 text-center truncate" 
          type="text" 
          name="conc"
          required="required"
          placeholder='Add type...'          
          onChange={handleAddFormChange}
        />
        <button 
          className="w-24 m-2 border-2 border-slate-500 bg-slate-500 p-1 text-slate-200 inline rounded-full hover:bg-slate-400 shadow-md"
          type="submit"
          >
          Add
        </button>       
      </form>
      <form onSubmit={handleEditFormSubmit}>
        <table className="m-auto min-h-min">
          <thead className="bg-gray-400">
            <tr>                               
                <th className="border-solid border-1 p-2">Perfume Name</th>
                <th className="border-solid border-1 p-2">Perfume Brand</th>
                <th className="border-solid border-1 p-2">Quantity</th> 
                <th className="border-solid border-1 p-2">Bottle Size</th>                    
                <th className="border-solid border-1 p-2">Range</th>                    
                <th className="border-solid border-1 p-2">Concentration</th>
                <th className="border-solid border-1 p-2">Changes</th>
            </tr>
          </thead>
          <tbody>
            {
              perfumes.map((perfume) => (
                <Fragment>
                  {editPerfumeId === perfume.id ? (
                    <RowToEdit 
                      editFormData={editFormData} 
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <RowToRead 
                      perfume={perfume} 
                      handleOnEdit={handleOnEdit}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}     
                </Fragment>                    
              ))
            }
          </tbody>
        </table>
      </form>

    </div>
  )
}

export default App
