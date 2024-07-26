import React from 'react';
import { MdModeEditOutline } from "react-icons/md";
import {useState} from 'react';

const Inputs = () => {
   const [input,setInput]=useState();
   const [items,setItems]=useState([]);
   const [editIndex, setEditIndex] = useState(null);
   const [editValue, setEditValue] = useState(''); 

   const handleAddClick = () => {
    if (input.trim()) {
        if (items.includes(input.trim())) {
            alert('Item already exists in the list.');
          } else {
            setItems([...items, input.trim()]);
            setInput('');
          }
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditValue(items[index]);
  };

  const handleEditValueChange = (event) => {
    setEditValue(event.target.value);
  };

  const handleSaveClick = () => {
    if (editValue.trim()) {
      if (items.includes(editValue.trim()) && editValue.trim() !== items[editIndex]) {
        alert('Item already exists in the list.');
      } else {
        const updatedItems = items.map((item, index) => 
          index === editIndex ? editValue.trim() : item
        );
        setItems(updatedItems);
        setEditIndex(null);
        setEditValue('');
      }
    }
  };

  const handleCancelClick = () => {
    setEditIndex(null);
    setEditValue('');
  };

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };
  
  return (
    <div className="text-center  p-4 min-h-screen flex flex-col items-center bg-gradient-to-r from-purple-500 to-pink-500">
      <input type="text" value={input} onChange={handleInputChange} className="border-lime-500 border-4 mt-3 rounded-full px-3 py-2 w-80" placeholder='Enter items' />
      <button  className="mx-3 uppercase border-4 border-black rounded-full bg-violet-950 cursor-pointer hover:bg-violet-700 text-white p-2 mt-2"
        onClick={handleAddClick}>Add</button>
      <div className="mt-4 w-full max-w-md">
        <h2 className="text-black uppercase font-medium mb-3">Your to does</h2>
        <div className="todoes flex flex-col gap-4">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center border border-gray-400 p-3 rounded-md bg-white shadow-md"
            >
              <div className="flex-1">{item}</div>
              <div className="flex gap-3">
              {editIndex === index ? (
                  <>
                    <button 
                      className="hover:font-bold p-2 transition-transform transform hover:scale-110"
                      onClick={handleSaveClick}
                    >
                      Save
                    </button>
                    <button 
                      className="hover:text-red-500 transition-colors p-2"
                      onClick={handleCancelClick}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      className="hover:font-bold p-2 transition-transform transform hover:scale-110"
                      onClick={() => handleEditClick(index)}
                    >
                      <MdModeEditOutline />
                    </button>
                    <button 
                      className="hover:text-red-500 transition-colors p-2" 
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        
        
        </div>
      </div>
    </div>
  )
}

export default Inputs
