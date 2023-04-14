import { Button, IconButton, useTranslationRoute } from "@mzara/component";
import { TFile, TListOfValue } from "@mzara/graphql";
import { Badge } from "containers/components/Badge";
import moment from "moment";
import { Link } from "react-router-dom";



export const ContractListItem = ({ designation, creationDate, isPublic, id }: ContractListProps) => {
    const t = useTranslationRoute();

    return (<>
        <div className="publication-list-item w-full flex gap-6 items-center justify-between px-1 pb-4 border-[#6C6868] border-b">
            <div className="flex  flex-col gap-4 items-start">
                <div className="flex justify-center items-center gap-6">
                    <Link to={t(`recruiting/contract/${id}`)}>
                        <h4 className="font-bold text-base sm:text-lg">
                            {designation}
                        </h4>
                    </Link>
                    {isPublic ? <Badge className="h-4 items-center" label="Publique" color="var(--primary)" /> : ''}
                </div>
                <div className="flex gap-2  items-center">
                    <i className="fa-solid fa-clock fa-md text-[#6C6868]"></i>
                    <p>{moment(+creationDate).format('DD/MM/YYYY')}</p>
                    <IconButton icon='fa-solid fa-file' />
                </div>
            </div>


            <Button
                label="Télécharger"
                className="!rounded-full !bg-primary text-white"
            />
            {/* {tags.map(tag => (<li style={{backgroundColor: 'blue'}} className={`text-white w-[65px] h-[22px] rounded-xl flex justify-center pt-[1px]`}>{<b className="text-xs mt-[2px]">New</b>}</li>))}  */}
            {/* <li style={{backgroundColor: 'blue'}} className={`text-white w-[65px] h-[22px] rounded-xl flex justify-center pt-[1px]`}>{<b className="text-xs mt-[2px]">New</b>}</li> */}

        </div>
    </>)
}

export type ContractListProps = {
    designation?: string,
    icon?: TFile,
    creationDate?: string,
    isPublic: boolean,
    id: number
}