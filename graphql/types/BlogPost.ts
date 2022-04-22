import { objectType, extendType } from 'nexus';

export const BlogPost = objectType({
  name: 'BlogPost',
  definition(t) {
    t.string('id');
    t.string('text');
  },
});

export const LinksQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('blogPosts', {
      type: 'BlogPost',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.blogPost.findMany();
      },
    });
  },
});
