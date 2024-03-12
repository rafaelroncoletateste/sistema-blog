import Prismic from "@prismicio/client";

export function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client("https://sistema-blog.cdn.prismic.io/api/v2", {
    req,
  });
  return prismic;
}
