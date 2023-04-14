import { IconButton, useFileUrl, useTranslationRoute } from "@mzara/component";
import { TUser } from "@mzara/graphql";
import { AvatarComponent } from "avatar-initials";
import { Link } from "react-router-dom";

export const UserListItem = ({ userItem }: UserListItemProps) => {
    const t = useTranslationRoute();
    const fileUrl = useFileUrl();
    return (
        <div className="flex items-center justify-between w-full pt-2 pb-4 border-b">
            <div className="flex items-start gap-5">
                <div className="w-12 h-12 p-[2px] flex items-start object-cover object-center overflow-hidden rounded-full bg-secondary">
                    {/* <img src="" className="w-full" alt="" /> */}
                    <AvatarComponent
                        primarySource={
                            userItem?.profilePicture?.id &&
                            fileUrl(userItem?.profilePicture?.id)
                        }
                        initials={
                            userItem?.firstName && userItem?.lastName
                                ? `${(userItem?.firstName?.split(""))[0]}${
                                      (userItem?.lastName?.split(""))[0]
                                  }`
                                : "NN"
                        }
                        useGravatar={false}
                        classes="rounded-full w-full"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col">
                        <h6 className="text-lg tracking-wider">{`${userItem?.firstName} ${userItem?.lastName}`}</h6>
                        <span>{userItem?.email}</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <i className="fa-solid fa-user-tie"></i>
                            <span>{userItem?.job || 'None'}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <i className="fa-solid fa-file-signature"></i>
                            <div className="flex items-center gap-1">
                                {userItem?.recruitingContracts?.map(
                                    (contract) => (
                                        <span>{contract?.designation}</span>
                                    )
                                ) || 'None'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link to={t(`user/list/${userItem.id}/details/about`)}>
                <IconButton icon="fa-solid fa-angle-right" />
            </Link>
        </div>
    );
};

export type UserListItemProps = {
    userItem: TUser;
};
