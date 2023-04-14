import { Chip, DateSpan, IconButton, useCdnAssets, useFileUrl, useTranslationRoute } from "@mzara/component";
import { TRecruitingAdvert } from "@mzara/graphql";
import { AvatarComponent } from "avatar-initials";
import { Badge } from "containers/components/Badge";
import moment from "moment";
import { Link } from "react-router-dom";
import { useBreakpoints } from "views/publication/hooks/useBreakPoint";

export const PublicationListItem = ({advert}:PublicationListItemProps) => {
    const cdn = useCdnAssets()
    const t = useTranslationRoute();
    const breakPoint = useBreakpoints();
    return (
        <div
            className="publication-list-item w-full flex items-center justify-between px-1 pb-4 border-[#6C6868] border-b"
        >
            <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                        <Link to={breakPoint.xs ? t(`recruiting/publication/details/${advert?.id}`): t(`recruiting/publication/viewer/${advert?.id}`)}>
                            <h4 className="font-bold text-base sm:text-lg">
                                {advert?.title}
                            </h4>
                        </Link>
                        {!advert?.state && <Badge label="Nouveau"  color="var(--primary)"/>}
                        {advert?.state?.value === 'CLOSED' && <Badge label="Fermé" color="#E4260E"/>}
                    </div>
                    <span className="text-xs">{advert?.description}</span>
                   
                </div>
                <ul className="flex items-center sm:gap-10 gap-4">
                    <li className="flex items-center gap-1">
                        <i className="fa-solid fa-clock text-[#6C6868]"></i>
                        <span className="text-xs">{moment(+advert?.createdAt).isValid() ? moment(+advert?.createdAt).format('DD/MM/YYYY') : advert?.createdAt}</span>
                    </li>
                    <li className="flex items-center gap-1">
                        <i className="fa-solid fa-clock text-danger"></i>
                        <span className="text-xs">{`Fin: ${moment(advert?.dateEnd).isValid() ? moment(advert?.dateEnd).format('DD/MM/YYYY') : 'None'}`}</span>
                    </li>
                    <li className="flex items-center gap-1">
                        <span className="w-[16px] h-[16px] flex justify-center">
                            <img
                                className="w-full h-full"
                                src={cdn("/img/icon/file-cv.svg")}
                                alt="icon-menu"
                            />
                        </span>
                        <span className="text-[12px]">{advert?.cvs?.length} : CV</span>
                    </li>
                    <li className="flex items-center gap-1">
                        <i className="fa-solid fa-layer-group text-[#6C6868]"></i>
                        <span className="text-[12px]">{advert?.category?.value || 'Non classé'}</span>
                    </li>
                </ul>
                <div className="flex items-center gap-2">
                    {advert?.tags?.map(tag => <Chip label={tag.value} color={tag.color} className='px-2 rounded-full text-xs py-1' />)}
                </div>
            </div>
            <Link to={t(`recruiting/publication/${advert?.id}/about`)}>
                <IconButton
                    icon={"fa-solid fa-angle-right"}
                    className="text-[#807B7B]"
                />
            </Link>
        </div>
    );
}

export type PublicationListItemProps = {
    advert?: TRecruitingAdvert
}