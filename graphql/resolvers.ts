export const resolvers = {
  Query: {
    blogPosts: (_parent, _args, context) => {
      return context.prisma.blogPost.findMany();
    },
  },

  Mutation: {
    addBlogPost: (_parent, { text }, context) => {
      return context.prisma.blogPost.create({ data: { text } });
    },
    editBlogPost: (_parent, { id, text }, context) => {
      return context.prisma.blogPost.update({ where: { id }, data: { text } });
    },
    deleteBlogPost: (_parent, { id }, context) => {
      return context.prisma.blogPost.delete({ where: { id } });
    },
  },
};
