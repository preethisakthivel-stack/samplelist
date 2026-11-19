import React from "react";
import backgroundImage from '../assets/godsfavoritegalaxy-galaxy-background-9060697_640.jpg' 
import indiahistory from '../assets/pexels-thekameragrapher-33253295.jpg'
import indiaarchitec from '../assets/pexels-dropshado-11398076.jpg'
import indiaart from '../assets/pexels-manishjangid-36470542.jpg'
import indianature from '../assets/pexels-abi-vm-2153057608-32535592.jpg'
import indiaculture from '../assets/pexels-suguna-14666199.jpg'

function Sections() {
    return (
        <div className="mt-[50px]">
           <div style={{backgroundImage:`url(${backgroundImage})`}} className="border-[2px] h-[220px] w-[97%] ml-[20px] border-slate-800 shadow-xl shadow-slate-800 rounded-[50px] bg-cover bg-no-repeat text-[white]">
             <p  className="pl-[180px] pt-[50px] font-bold text-[50px] " > India's Best </p>
           </div>
           <div className="flex justify-center gap-10 mt-[90px] ml-[20px] mb-[40px] ">
            <div className="border-[1px] w-[250px] h-[330px] rounded-xl shadow-xl shadow-yellow-100 hover:shadow-lime-300  border-yellow-400">
                <img className="w-[250px] h-[190px] rounded-t-xl rounded-b-none" src={indiahistory} alt={indiahistory}/>
                <p className="text-[29px] italic pl-[40px] pt-[30px] font-bold text-sky-400 cursor-pointer" style={{textShadow:'2px 4px 10px lightgreen'}}>Indiahistory</p>
            </div>
            <div className="border-[1px] w-[250px] h-330px] rounded-xl shadow-xl shadow-yellow-100 hover:shadow-lime-300 border-yellow-400">
                <img className="w-[250px] h-[190px] rounded-t-xl rounded-b-none" src={indiaarchitec} alt={indiaarchitec}/>
                <p className="text-[29px] italic pl-[40px] pt-[30px] font-bold text-sky-400 cursor-pointer" style={{textShadow:'2px 4px 10px lightgreen'}}>Indiaarchitec</p>
            </div>
            <div className="border-[1px] w-[250px] h-[330px]  rounded-xl shadow-xl shadow-yellow-100 hover:shadow-lime-300 border-yellow-400">
                <img className="w-[250px] h-[190px] rounded-t-xl rounded-b-none" src={indiaart} alt={indiaart}/>
                <p className="text-[29px] italic pl-[40px] pt-[30px] font-bold text-sky-400 cursor-pointer" style={{textShadow:'2px 4px 10px lightgreen'}}>Indiaart</p>
            </div>
            <div className="border-[1px] w-[250px] h-[330px]  rounded-xl shadow-xl shadow-yellow-100 hover:shadow-lime-300 border-yellow-400">
                <img className="w-[250px] h-[190px] rounded-t-xl rounded-b-none" src={indianature} alt={indianature}/>
                <p className="text-[29px] italic pl-[40px] pt-[30px] font-bold text-sky-400 cursor-pointer" style={{textShadow:'2px 4px 10px lightgreen'}}>Indianature</p>
            </div>
            <div className="border-[1px] w-[250px] h-[330px]  rounded-xl shadow-xl shadow-yellow-100 hover:shadow-lime-300 border-yellow-400">
                <img className="w-[250px] h-[190px] rounded-t-xl rounded-b-none" src={indiaculture} alt={indiaculture}/>
                <p className="text-[29px] italic pl-[40px] pt-[30px] font-bold text-sky-400 cursor-pointer" style={{textShadow:'2px 4px 10px lightgreen'}}>Indiaculture</p>
            </div>
           </div>
            
        </div>
    );
}
export default Sections