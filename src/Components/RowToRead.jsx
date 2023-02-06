import React from "react";

const RowToRead = ({perfume, handleOnEdit, handleDeleteClick}) => {
    return (
        <tr className="bg-slate-200 hover:bg-slate-300">            
            <td className="border-solid border-1 p-2">{perfume.perfumeName}</td>
            <td className="border-solid border-1 p-2">{perfume.perfumeBrand}</td>
            <td className="border-solid border-1 p-2 text-center">{perfume.quantity}</td> 
            <td className="border-solid border-1 p-2 text-center">{perfume.unitOfMeasure}</td>                          
            <td className="border-solid border-1 p-2 text-center">{perfume.range}</td>
            <td className="border-solid border-1 p-2 text-center">{perfume.conc}</td>
            <td className="border-solid border-1 p-2 text-center">
                <button
                    className="content-center" 
                    type="button" 
                    onClick={(event)=> handleOnEdit(event, perfume)}
                >
                    Edit
                </button>
                <button 
                    className="text-center " 
                    type="button" 
                    onClick={()=> handleDeleteClick(perfume.id)}
                >
                    Delete
                </button>
            </td>                                                   
        </tr>
    );
};

export default RowToRead