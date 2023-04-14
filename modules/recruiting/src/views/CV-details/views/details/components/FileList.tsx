import { Box, Button, useFileUrl } from '@mzara/component';
import { useParams } from 'react-router-dom';
import { useCuriculumVitaeDetailsQuery } from 'views/CV/hooks/useCuriculumVitaeDetailsQuery';

const FileList = ({handleOnClick}) => {
    const { id } = useParams();
    const { data } = useCuriculumVitaeDetailsQuery(parseInt(id), true);
    
    return (
        <Box >
            <div className='w-max '>
                <div className='flex flex-col gap-4'>
                    <h5><b>Liste de fichiers</b></h5>
                    <ul className='flex flex-col gap-6 m-6'>

                        {
                            data?.files ? (
                                data?.files?.map((file) => (
                                    <li className='flex justify-between items-center gap-6 border-b p-4'>
                                        <div className='flex gap-4'>
                                            <i className='fa-solid fa-file'></i>
                                            <div>
                                                <h6><b>{file.name}</b></h6>
                                            </div>
                                        </div>
                                        <Button 
                                        label='aperçue'
                                        className="!rounded-full !bg-primary text-white"
                                        onClick={()=>{handleOnClick(file.id)}}
                                        />
                                    </li>
                                ))
                            ) : (<b>Aucune pièce jointe</b> )
                        }
                    </ul>
                </div>

            </div>
        </Box>
    );
}
export default FileList;