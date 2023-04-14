import React from "react";

const CheckBoutton = () => {

    return (
       <div className="">
            <div className="flex ">
                <div className=" w-[28px] h-[28px] border-solid bg-success border-2 border-[#337742] rounded-full flex justify-center items-center relative">
                    <i className="fa-solid fa-check text-white"></i>
                    <div className="ml-[10px] mb-10 flex-col absolute left-3 -top-[50%]">
                        <h4 className="ml-[40px] text-xl text-white">Identifiant</h4>
                        <p className="text-xs text-white ml-[40px] w-[120px] h-[23px] ">blished fact a reader</p>
                    </div>   
                </div>
            </div>
            <div className="flex">
                <div className=" xl:( border-l border-success m-auto h-[106px] )  ">
            </div>
            </div>
            <div className="flex">
            <div className=" w-[28px] h-[28px] border-solid bg-success border-2 border-[#337742] rounded-full flex justify-center items-center relative">
                    <i className="fa-solid fa-check text-white"></i>
                    <div className="ml-[10px] mb-10 flex-col absolute left-3 -top-[50%]">
                        <h4 className="ml-[40px] text-xl text-white">Identifiant</h4>
                        <p className="text-xs text-white ml-[40px] w-[120px] h-[23px] ">blished fact a reader</p>
                    </div>   
                </div>
            </div>
            <div className="flex">
                <div className="border-l border-success m-auto h-[106px]"> </div>
            </div>
            <div className="flex">
                <div className=" w-[28px] h-[28px] border-solid border-2 border-[#337742] rounded-full">
                    <div className="ml-[10px] mb-10 flex-col relative bottom-3">
                        <h4 className="ml-[40px] text-xl text-white">Groupe</h4>
                        <p className="text-xs text-white ml-[40px] w-[120px] h-[23px] ">blished fact</p>
                    </div> 
                </div>
            </div>
       </div>
    );
}
export default CheckBoutton; 