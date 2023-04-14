import { Box, Chip, useFileUrl } from "@mzara/component";
import { AvatarComponent } from "avatar-initials";
import { useParams } from "react-router-dom";
import { useUserDetailsQuery } from "../hooks/useUserDetailsQuery";

const AboutUserDetailsContainer = () => {
    const { id } = useParams();
    const { data } = useUserDetailsQuery(parseInt(id), true);
    const fileUrl = useFileUrl();

    return (
        <div className="py-5">
            <Box className="!rounded-2xl w-max flex flex-col gap-5 p-10 pr-20">
                <div className="flex items-center gap-8">
                    <div className="w-24 h-24 p-[2px] object-cover object-center rounded-full overflow-hidden bg-primary">
                        {/* <img src="" className="w-full" alt="" /> */}
                        <AvatarComponent
                            primarySource={
                                data?.profilePicture?.id &&
                                fileUrl(data?.profilePicture?.id)
                            }
                            initials={
                                data?.firstName && data?.lastName
                                    ? `${(data?.firstName?.split(""))[0]}${
                                          (data?.lastName?.split(""))[0]
                                      }`
                                    : "NN"
                            }
                            useGravatar={false}
                            classes="rounded-full w-full"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h5 className="font-semibold mb-0">{data.fullName}</h5>
                        <span className="text-sm">{data.email}</span>
                        <span className="flex items-center gap-3">
                            <strong>Etat :</strong>
                            {!data.isDisabled ? (
                                <Chip
                                    label="Actif"
                                    color="#00BB29"
                                    className="inline-block rounded-full px-3 text-xs [&>a]:text-white"
                                />
                            ) : (
                                <Chip
                                    label="Bloqué"
                                    color="#ABABAC"
                                    className="inline-block rounded-full px-3 text-xs [&>a]:text-white"
                                />
                            )}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <span>
                        <i className="fa-solid fa-phone text-lg"></i>
                        {data.phone}
                    </span>
                    <span>
                        <i className="fa-brands fa-skype text-xl"></i>
                        {data.skype}
                    </span>
                    <span>
                        <i className="fa-solid fa-file-signature"></i>
                        {data.recruitingContracts
                            .map((contract) => contract.designation)
                            .join(", ")}
                    </span>
                </div>
            </Box>
        </div>
    );
};

export default AboutUserDetailsContainer;
