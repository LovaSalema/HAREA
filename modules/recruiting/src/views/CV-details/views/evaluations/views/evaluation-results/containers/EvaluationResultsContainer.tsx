const EvaluationResultsContainer = () => {
    return (
        <div className="mt-8 flex flex-col gap-4">
            <h6>Résultat test</h6>
            <div className=" grid grid-cols-3 gap-8 content-center h-56 mt-10">
                <div className="w-[200px] h-[130px] shadow-md rounded-lg bg-white flex flex-col  relative">
                    <p className="mt-3 ml-4 h-5">Note Total</p>
                    <h4 className="text-[#E4260E] m-auto">30%</h4>
                    <i className="fa-solid fa-ellipsis-vertical absolute left-[180px] top-4"></i>
                </div>
                <div className="w-[200px] h-[130px] shadow-md rounded-lg bg-white flex flex-col  relative">
                    <p className="mt-3 ml-4 h-5">Temps passé</p>
                    <h4 className="text-[#E4260E] m-auto">30%</h4>
                    <i className="fa-solid fa-ellipsis-vertical absolute left-[180px] top-4"></i>
                </div>
                <div className="w-[200px] h-[130px] shadow-md rounded-lg bg-white flex flex-col  relative">
                    <p className="mt-3 ml-4 h-5">Professionalisme</p>
                    <h4 className="text-[#E4260E] m-auto">30%</h4>
                    <i className="fa-solid fa-ellipsis-vertical absolute left-[180px] top-4"></i>
                </div>
                <div className="w-[200px] h-[130px] shadow-md rounded-lg bg-white flex flex-col  relative">
                    <p className="mt-3 ml-4 h-5">Détails note</p>
                    <h4 className="text-[#E4260E] m-auto">30%</h4>
                    <i className="fa-solid fa-ellipsis-vertical absolute left-[180px] top-4"></i>
                </div>
                <div className="w-[200px] h-[130px] shadow-md rounded-lg bg-white flex flex-col  relative">
                    <p className="mt-3 ml-4 h-5">Détails temps passé</p>
                    <h4 className="text-[#E4260E] m-auto">30%</h4>
                    <i className="fa-solid fa-ellipsis-vertical absolute left-[180px] top-4"></i>
                </div>
            </div>
            <div className="w-[200px] h-[130px] shadow-md rounded-lg bg-white flex flex-col mt-12 gap-2 justify-center items-center">
                <p className="border border-[#CECCCC] rounded-md px-5 py-1 w-[110px]">
                    Javascript
                </p>
                <p className="border border-[#CECCCC] rounded-md px-5 py-1 w-[110px]">
                    Node JS
                </p>
                <p className="border border-[#CECCCC] rounded-md px-5 py-1 w-[110px]">
                    React JS
                </p>
            </div>
        </div>
    );
};

export default EvaluationResultsContainer;
