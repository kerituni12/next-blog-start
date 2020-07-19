import {NextPage, GetStaticProps} from 'next';
import Link from 'next/link';

const indexPage : NextPage<{blogs:{title:string, slug:string, des:string, date:string}[]}> =(props)=> {
    // console.log(props);
    return (<><h1>User</h1>
    {props.blogs.map(arr => {
        return (<div>
            <p>{arr.title}</p>
            <p>{arr.des}</p>
            <p>{arr.date}</p>
            <Link as={`/blog/${arr.slug}`} href="/blog/[slug]">Go to about page</Link>
         </div>)
    })}
    </>)
};

export const getStaticProps: GetStaticProps = async () => {
    const blogs = (await import('../../data/blog.json')).default;
    return {
        props: {blogs}
    }
}
export default indexPage;