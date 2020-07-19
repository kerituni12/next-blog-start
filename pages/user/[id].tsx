import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from 'swr';

const fetcher =async (url:string) =>{
    const res = await fetch(url);
    if (!res.ok) {
        throw Error(' that not ok');
    }
    const data :{id: string, name:string, email:string} = await res.json();
    return data;
}
const User: NextPage = () => {
  const router = useRouter();
  const {id} = router.query;
  const {data, error} = useSWR(`/api/${id}`, fetcher);
//   console.log(router);
if(error) {
    return <div>Co loi : {error.message} </div>
}

if (!data) {
    return (<div>Khong co data</div>)
}


  return (
    <>
      <h1>user </h1> 
      <p>{data.id}</p>
      <p>{data.name}</p>
      <p>{data.email}</p>
    </>
  );
};

export default User;
