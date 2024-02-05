import { graph, config } from '@grafbase/sdk';

// Define your own type for the configuration object
interface MyGraphConfig {
  graph: any; // You may need to replace 'any' with the appropriate type
  models?: any[]; // You may need to replace 'any' with the appropriate type
  // Add any other properties you need for the configuration
}

// Welcome to Grafbase!
//
// Configure authentication, data sources, resolvers, and caching for your GraphQL API.

const g = graph.Standalone();

// Define the User model directly
const User = g.model("User", {
  name: g.string().length({min:2 , max:20}),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedIn: g.url().optional(),
  projects:g.relation(()=>Projects).list().optional(),
});

const Projects = g.model("Projects", {
  title: g.string().length({min:3}),
  image: g.url(),
  description: g.string().optional(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  categoryBy: g.relation(()=>User),
});

// Define your configuration object
const graphConfig: MyGraphConfig = {
  graph: g,
  models: [User, Projects], // Pass the User and Projects models to the config
  // Add any other properties as needed
};

export default config(graphConfig);
