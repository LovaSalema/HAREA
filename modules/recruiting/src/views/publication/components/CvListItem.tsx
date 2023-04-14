export const CvListItem = ({ fullName, ...props }: CvListItemProps) => {
    return (
        <li className="flex flex-col gap-2 py-4 border-b">
            <h6 className="font-semibold tracking-wider">
                {fullName}
            </h6>
            <div className="flex items-center gap-2">
                <i className="fa-solid fa-clock text-[#6C6868]"></i>
                <span className="text-[12px]">il y a 3 minutes</span>
            </div>
        </li>
    );
};

export type CvListItemProps = {
    fullName?: string;
};
