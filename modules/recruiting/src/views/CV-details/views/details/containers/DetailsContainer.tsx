import { useFileUrl } from "@mzara/component";
import { useState } from "react";
import CvDetails from "../components/CvDetails";
import FileList from "../components/FileList";

const DetailsContainer = () => {
    const fileUrl = useFileUrl();
    const [open, setOpen] = useState(false);
    const [idUrl, setIdUrl] = useState('');
    const handleOnClick = (id) => {
        setOpen(true);
        setIdUrl(id);
        console.log(fileUrl(id));

    }
    return (
        <>
            <div className="flex flex-col gap-6 ">
                <div className="flex gap-5">
                    <CvDetails />
                    <FileList handleOnClick={handleOnClick} />
                </div>
                {open && (
                    <div className="w-full h-max">
                        
                        <iframe className="w-full h-max" src={fileUrl(idUrl)} width='500' height='400'></iframe>
                    </div>
                )}
            </div>

        </>
    );
}
export default DetailsContainer;