import prisma from "../lib/prisma";

class Blog {
  // private postId: number;
  // private author_id: number;
  // private title: string;
  // private content: string;
  // private name: string;

  // constructor({postId, title, content, author_id, name}: {
  //     postId: number,
  //     title: string,
  //     content: string,
  //     author_id: number,
  //     name: string
  // }) {
  //     this.postId = postId;
  //     this.title = title;
  //     this.content = content;
  //     this.author_id = author_id;
  //     this.name = name;
  // }

  static async create({
    title,
    content,
    author_id,
    name,
  }: {
    title: string;
    content: string;
    author_id: number;
    name: string;
  }) {
    return prisma.blog.create({
      data: {
        title,
        content,
        author_id,
        name,
      },
    });
  }

  static edit({
    postId,
    title,
    content,
    author_id,
    name,
  }: {
    postId: number;
    title: string;
    content: string;
    author_id: number;
    name: string;
  }) {
    return prisma.blog.update({
      where: { id: postId },
      data: {
        title: title,
        content: content,
        author_id: author_id,
        name: name,
      },
    });
  }

  static delete({ author_id, id }: { author_id: number; id: number }) {
    return prisma.blog.delete({
      where: { id, author_id },
    });
  }

  static list({ author_id, id }: { author_id: number; id: number }) {
    return prisma.blog.findMany({
      where: { id, author_id },
    });
  }

  static get({ author_id, id }: { author_id: number; id: number }) {
    return prisma.blog.findUnique({
      where: { id, author_id },
    });
  }

  static async listAll() {
    return prisma.blog.findMany();
  }
}

export default Blog;
