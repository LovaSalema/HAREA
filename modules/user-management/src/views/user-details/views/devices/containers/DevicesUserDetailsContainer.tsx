import { Box, Button, Chip, useGraphqlMutation } from "@mzara/component";
import { TSessionUser } from "@mzara/graphql";
import _ from "lodash";
import { useParams } from "react-router-dom";
import { useUserDetailsQuery } from "../../about/hooks/useUserDetailsQuery";
import { useGqlMutationLogoutDevice } from "../hooks/useGqlMutationLogoutDevice";

const DevicesUserDetailsContainer = () => {
    const { id } = useParams();
    const { data, invalidateQuery } = useUserDetailsQuery(parseInt(id), true);
    const gqlLogoutDevice = useGqlMutationLogoutDevice();
    const mutation = useGraphqlMutation(gqlLogoutDevice);
    return (
        <Box title="Liste des appareils">
            <div className="flex flex-col gap-2">
                {data?.sessionUsers?.map((sessionUser: TSessionUser) => (
                    <div className="flex items-center justify-between py-3 pb-5 border-b">
                        <div className="flex items-center gap-8">
                            <i
                                className={`fa-brands fa-${_.lowerCase(
                                    _.replace(
                                        sessionUser?.session?.plateform,
                                        "ios",
                                        "apple"
                                    )
                                )} text-5xl`}
                            ></i>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-4">
                                    <span>
                                        {sessionUser?.session?.plateform}
                                    </span>
                                    {sessionUser?.active && (
                                        <Chip
                                            label="Actif"
                                            color="#00BB29"
                                            className="rounded-full px-3 text-xs [&>a]:text-white"
                                        />
                                    )}
                                </div>
                                <div className="flex items-center gap-5">
                                    <div className="flex items-center gap-2">
                                        <i
                                            className={`fa-brands fa-${_.lowerCase(
                                                sessionUser?.session?.browser
                                            )}`}
                                        ></i>
                                        <span>
                                            {sessionUser?.session?.browser}
                                        </span>
                                    </div>
                                    <span className="text-sm">
                                        <strong>version: </strong>
                                        {sessionUser?.session?.browserVersion}
                                    </span>
                                </div>
                            </div>
                        </div>
                        {sessionUser?.active && (
                            <Button
                                label="Déconnecter"
                                className="!rounded-full !bg-primary text-white"
                                onClick={() => {
                                    mutation.mutate({
                                        data: { id: sessionUser?.session?.id },
                                    }, {onSuccess: () => {invalidateQuery()}});
                                }}
                            />
                        )}
                    </div>
                ))}
            </div>
        </Box>
    );
};

export default DevicesUserDetailsContainer;
