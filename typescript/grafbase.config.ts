import { graph, config } from '@grafbase/sdk';

// Welcome to Grafbase!
//
// Configure authentication, data sources, resolvers, and caching for your GraphQL API.

const g = graph.Standalone();

// Define the User model directly
const User = g.model("User", {
  name: g.string().length({min:2 , max:20}),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description:g.string().optional(),
  githubUrl: g.url().optional(),
  linkedIn: g.url().optional(),
  projects: g.relation(()=>Projects).list().optional(),
});

const Projects = g.model("Projects", {
  title: g.string().length({min:3}),
  image:g.url(),
  description:g.string().optional(),
  liveSiteUrl:g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  categoryBy:g.relation(()=>User),

})

export default config({
  schema: g,
});
