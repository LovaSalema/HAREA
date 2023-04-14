import react from 'react';
import { useCdnAssets } from '@mzara/component';
const BackgroundRight = () => {
    const cdn = useCdnAssets();
    return (
        <>
            <img className="h-[40%] rotate-180 " src={cdn('/img/isa/Group_127.svg')} alt='group-bg' />
            <div className="flex flex-col gap-6">
                <h2 className="font-black leading-9">Welcome to <br />  our community</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br />industry. Lorem Ipsum has been the industry's standard dummy

                </p>
                <div className="flex w-full justify-start">
                    <img className="h-[30px]" src={cdn('img/isa/profile-user.png')} alt="image" />
                    <img className="h-[30px]  relative right-2" src={cdn('img/isa/profile-user.png')} alt="image" />
                    <img className="h-[30px] relative right-4" src={cdn('img/isa/profile-user.png')} alt="image" />
                    <p>More than 17k people joined us, it's your turn</p>
                </div>
            </div>
            <img className="h-[40%]" src={cdn('/img/isa/Group_127.svg')} alt='group-bg' />
        </>
    );
}
export default BackgroundRight;