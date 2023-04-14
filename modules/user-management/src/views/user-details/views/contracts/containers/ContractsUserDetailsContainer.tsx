import { Box, Button, IconButton } from "@mzara/component";
import { TEmployeeContract } from "@mzara/graphql";
import { useParams } from "react-router-dom";
import { useUserDetailsQuery } from "../../about/hooks/useUserDetailsQuery";

const ContractsUserDetailsContainer = () => {
    const {id} = useParams()
    const {data} = useUserDetailsQuery(parseInt(id), true)
    return (
        <div className="py-5">
            <Box
                title="Liste des contrats"
                tools={
                    <Button
                        label="Ajouter"
                        startIcon="fa-solid fa-plus"
                        className="flex items-center !bg-primary text-white gap-1 !rounded-full"
                    />
                }
                className='box-mb-0'
            >
                <div className="mt-3 flex flex-col gap-2">
                    {data?.recruitingContracts?.map((contract: TEmployeeContract) => (
                        <div className="flex items-center justify-between">
                            <h6 className="font-semibold">{contract?.designation}</h6>
                            <IconButton icon='fa-solid fa-file-arrow-down text-lg' />
                        </div>
                    ))}
                    
                </div>
            </Box>
        </div>
    );
};

export default ContractsUserDetailsContainer;
