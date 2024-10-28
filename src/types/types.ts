type BlogPageParams = {
    blogsId: string;
  }

type ContentType = {
    type: string;
    children: {
        type: string;
        text: string;
    }[]
}
/* eslint-disable */
type BlogType = {
    Title: string;
    id: number;
    Content: ContentType[];
    Summary: string;
    imageSrc: string;
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    documentId: string
}

type BlogPageProps = {
    params: Promise<BlogPageParams>;
  }
/* eslint-enable */

// type Blogs = {
//     data: BlogType[]
// }