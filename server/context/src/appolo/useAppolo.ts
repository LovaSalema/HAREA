// import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { ApolloServer, ExpressContext } from 'apollo-server-express';
import { GenericResolver, AuthResolver, TAppContext } from '@mzara/graphql';

export const appolo_schema = () => {
    return buildSchema({
        resolvers: [GenericResolver, AuthResolver],
    })
}

export const useAppolo = async () => {
    return new ApolloServer({
        schema: await appolo_schema(),
        context: ({ req }: ExpressContext): TAppContext => req.app.get('context')
    });
}
