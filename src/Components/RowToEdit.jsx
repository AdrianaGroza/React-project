import React from "react";
//import RowToRead from "./RowToRead";

const RowToEdit = ({editFormData, handleEditFormChange, handleCancelClick}) => {
    return (
        <tr>
            <td>
                <input
                    className="w-32 border-2 border-gray-300 rounded-lg hover:bg-slate-300 text-center truncate"
                    type="text"                    
                    required="required"
                    placeholder='Add name...'
                    name="perfumeName"
                    value = {editFormData.perfumeName}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    className="w-32 border-2 border-gray-300 rounded-lg hover:bg-slate-300 text-center truncate"
                    type="text"                    
                    required="required"
                    placeholder='Add brand...'
                    name="perfumeBrand"
                    value = {editFormData.perfumeBrand}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    className="w-32 border-2 border-gray-300 rounded-lg hover:bg-slate-300 text-center truncate"
                    type="text"                    
                    required="required"
                    placeholder='Add quantity...'
                    name="quantity"
                    value = {editFormData.quantity}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    className="w-32 border-2 border-gray-300 rounded-lg hover:bg-slate-300 text-center truncate"
                    type="text"                    
                    required="required"
                    placeholder='Add U.M. ...'
                    name="unitOfMeasure"
                    value = {editFormData.unitOfMeasure}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    className="w-32 border-2 border-gray-300 rounded-lg hover:bg-slate-300 text-center truncate"
                    type="text"                    
                    required="required"
                    placeholder='Add range...'
                    name="range"
                    value = {editFormData.range}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    className="w-32 border-2 border-gray-300 rounded-lg hover:bg-slate-300 text-center truncate"
                    type="text"                    
                    required="required"
                    placeholder='Adauga type...'
                    name="conc"
                    value = {editFormData.conc}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
    );
};

export default RowToEdit