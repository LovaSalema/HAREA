import react from 'react';
import '../css/loginContainer.css'
const FormSignup = () =>{


    return (
        <>
            <div className='flex flex-col gap-10 w-full'>
                <div className='px-4 py-2 text-white'>
                    <h3>Identifiant</h3>
                    <small>Voluptatem accusantium doloremaue</small>
                </div>
                <form className='flex flex-col gap-10 items-start'>
                    <div className='px-3 py-2 flex flex-col gap-2 text-white'>
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder='adresse email' className='  w-[768px] md:w-[500px] lg:w-[768px] lg:outline-none bg-transparent px-3 py-2  rounded border border-[#CECCCC]' id='email'/>
                    </div>
                    <div className='px-3 py-2 flex flex-col gap-2 text-white'>
                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" placeholder='mot de passe' className='  w-[768px] md:w-[500px] lg:w-[768px] lg:outline-none bg-transparent px-3 py-2  rounded border border-[#CECCCC]' id='password'/>
                    </div>
                    <div className='px-3 py-2 flex flex-col gap-2 text-white'>
                        <label htmlFor="passwordConfirm">Confirmation mot de passe </label>
                        <input type="password" placeholder='confirmez votre mot de passe' className='  w-[768px] md:w-[500px] lg:w-[768px] lg:outline-none bg-transparent px-3 py-2  rounded border border-[#CECCCC]' id='passwordConfirm'/>
                    </div>
                    <button type='submit' className='button text-white'>Créer</button>
                </form>
            </div>
           
        </>
    );
}
export default FormSignup;