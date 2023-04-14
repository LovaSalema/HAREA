import react, { useEffect } from 'react';

const Organisation = () =>{
    
   
    // useEffect(()=>{ 
    //     const handleresize =(e)=>{
    //         console.log(window.innerHeight);
    //     };
    //     //@ts-ignore
    //      window.addEventListener('resize', handleresize)
         
    //      //@ts-ignore
    //     return ()=> window.addEventListener('resize', handleresize)
    // },[])
    
    return(
        <>

        <div className='flex flex-col gap-2 w-full relative bottom-[80px]'>
                <div className='px-4 py-2 text-white'>
                    <h3>Organisation</h3>
                    <small>There are many variations</small>
                </div>
                <form className='flex flex-col gap-10 items-start'>
                    <div className='px-3 py-2 flex flex-col  gap-2 text-white'>
                        <label htmlFor="Name">Nom</label>
                        <input type="text" placeholder='Nom' className='outline-none bg-transparent px-3 py-2 w-[768px] rounded border border-[#CECCCC]' id='Name'/>
                    </div>
                    <div className='px-3 py-2 flex gap-2 text-white justify-between' >
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="organisationType">Type d'organisation</label>
                            <input type="text" placeholder="Type d'organisation" className='outline-none bg-transparent px-3 py-2 w-[569px] rounded border border-[#CECCCC]' id='organisationType'/>
                        </div>
                        <div className='w-[23px]'></div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="logo">Logo</label>
                            <input type="file"  className='outline-none bg-transparent px-3 py-2 w-[164px] rounded border border-[#CECCCC] text-transparent' id='logo'/>
                        </div>
                    </div>
                    <div className='px-3 py-2 flex flex-col gap-2 text-white'>
                        <label htmlFor="Email">Email</label>
                        <input type="text" placeholder='email' className='outline-none bg-transparent px-3 py-2 w-[768px] rounded border border-[#CECCCC]' id='Email'/>
                    </div>
                    <div className='px-3 py-2 flex flex-col gap-2 text-white'>
                        <label htmlFor="phonenumber">Telephone </label>
                        <input type="number" placeholder='Telephone' className='outline-none bg-transparent px-3 py-2 w-[768px] rounded border border-[#CECCCC]' id='phonenumber'/>
                    </div>
                    <div className='flex justify-around gap-[336px] m-auto'>
                        <button type='reset' className='bg-[#ABABAC] button2 text-white'>Annuler</button>
                        <button type='submit' className='bg-[#0007BB] button text-white'>Créer</button>
                    </div>
                </form>
            </div>

        </>
    );
}
export default Organisation;