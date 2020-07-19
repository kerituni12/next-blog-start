import {NextPage, GetStaticPaths, GetStaticProps} from 'next';
import Link from 'next/link'

 const BlogPage :NextPage <{title:string, des:string, date:string}>= ({title, des, date}) => {
    return (<>
        <div>Title: { title}</div>
        <div>DEs: { des}</div>
        <div>Date: { date}</div> 
    </>
      )
    
};

export const getStaticPaths : GetStaticPaths = async() => {
    const blogs = (await import('../../data/blog.json')).default;
    const slugs = blogs.map(blog => blog.slug);
    const paths = slugs.map(slug => `/blog/${slug}`);
    return (
         {
            paths,
            fallback: false
        }
    )
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const blogs = (await import('../../data/blog.json')).default;

    const blog = blogs.find(x => x.slug === params.slug);

    return {
        props : {
            title: blog.title,
            des: blog.des,
            date:blog.date
        }
    }
}
export default BlogPage;