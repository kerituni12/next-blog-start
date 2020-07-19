import {NextPage} from 'next';
import Link from 'next/link';

const indexPage : NextPage =()=> {

    return (<><h1>User</h1>
    <Link href="/abouts">Go to about page</Link></>)
};

export default indexPage;