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

type Blogs = {
    data: BlogType[]
}