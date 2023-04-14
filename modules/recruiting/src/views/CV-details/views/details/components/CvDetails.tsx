import react from 'react';
import { Dropdown, useCdnAssets, Menu, useGraphqlMutation, useFormData, Color } from '@mzara/component';
import { Button } from '@mzara/component';
import { useState } from 'react';
import FileList from './FileList'
import '../css/loginContainer.css'
import { useCuriculumVitaeDetailsQuery } from 'views/CV/hooks/useCuriculumVitaeDetailsQuery';
import { useParams } from 'react-router-dom';
import { useStateCvItems } from 'views/CV/hooks/useStateCvItems';
import { useGqlMutationStateCv } from 'views/CV/hooks/useGqlMutationStateCv';


const CvDetails = () => {


    const { id } = useParams();
    const { data, invalidateQuery } = useCuriculumVitaeDetailsQuery(parseInt(id), true)
    const [CvState, setCvState] = useState('Nouveau')
    const cdn = useCdnAssets();
    const menuItems = useStateCvItems();
    const [anchorEl, setAnchorEl] = useState<HTMLAnchorElement>()
    const gqlStateChange = useGqlMutationStateCv();
    const mutationState = useGraphqlMutation(gqlStateChange);



    return (<>
        <div className="shadow-md flex  flex-col gap-6 bg-white min-w-[58%] h-[251px] rounded-lg">
            <div className="flex flex-col gap-4 mx-3  p-4">
                <div className='flex gap-5'>
                    <img className='w-[67px] h-[67px]' src={cdn('/img/isa/profile-user.png')} alt="profile" />
                    <div className='flex w-full flex-col gap-2 justify-start'>
                        <div className='flex gap-4'>
                            <p><b>{data?.name}</b></p>
                            <div style={{ backgroundColor: `${ColorState[data?.state?.value]}` }} className={`px-2 h-[20px] rounded-xl flex items-center justify-center`}><p className='text-xs text-white'>{stateDict[data?.state?.value]}</p></div>
                        </div>
                        <p>{data?.email} </p>
                        <p>{data?.phone} </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between m-3">
                <Button className='button !rounded-full'>Envoyer test</Button>
                <a href="" onClick={(e) => { setAnchorEl(e.currentTarget); e.preventDefault() }}><Button className='button2  !rounded-full'>Changer état <i className='fa-solid fa-angle-down relative top-[3px]'></i></Button></a>
                <Dropdown
                    anchorEl={anchorEl}
                    arrow
                    placement="bottom-end"
                    onClose={() => setAnchorEl(undefined)}
                >
                    <Menu
                        items={menuItems}
                        onClick={(menu) => {

                            mutationState.mutate({ data: { id: parseInt(id), state: { id: menu.id } } }, {
                                onSuccess: () => { invalidateQuery() }
                            })
                            setCvState(menu?.label);
                            setAnchorEl(menu?.currentTarget)
                        }}
                    />
                </Dropdown>
                <Button className='button2  !rounded-full'>Engager</Button>
            </div>
        </div>
    </>);
}

export const stateDict = {
    "NEW": "Nouveau",
    "TESTING": "En cours de teste",
    "INTERVIEW": "Entretien",
    "REJECTED": "Rejeté"
}
export const ColorState = {
    "NEW": "#48496C",
    "TESTING": "#17a2b8",
    "INTERVIEW": "#110ee438",
    "REJECTED": "#E4260E"
}

export default CvDetails;

