import React from "react";

const FilterBar=()=>{
    return(
        
             <div className="flex flex-wrap gap-4 bg-yellow-50 p-4 rounded-lg shadow-sm">
                 <input
                 type="text" 
                 placeholder="Search subject / teacher..."
                 className="flex-1 border rounded-lg px-4 py-2"
             />
               <select className="border rounded-lg px-4 py-2">
    <option>Select Subject</option>
               </select>
                   <select className="border rounded-lg px-4 py-2">
                      <option>Select Module</option>
                    </select>
               <select className="border rounded-lg px-4 py-2">
                    <option>Select Semester</option>
               </select>
            <button className="bg-yellow-300 px-4 py-2 rounded-lg">Reset Filters</button>
           </div>
    )

}

export default FilterBar;