import { join } from 'path';

// import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
// import { loadDocumentsSync, loadSchemaSync } from '@graphql-tools/load';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
// import { addResolversToSchema } from '@graphql-tools/schema';

const documents = loadFilesSync(
  join(__dirname, '..', '..', '..', 'modules/**', 'gql', 'schemas', '**', '*.gql')
);

export const schema = mergeTypeDefs(documents);
