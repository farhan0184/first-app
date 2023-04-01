import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { useEffect, useState } from "react";

// dynamic routing step second

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => {
      
        return {
            params: {
                pageNo: post.id.toString() ,
            }
        }
      
    })
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }


export const getStaticProps = async (context) =>{
    const id = context.params.pageNo;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()

    return{
        props:{
            data,
        }
    }
}

const pageNo = ({data}) => {
    // 1 system
    // const router = useRouter();
    
    // const pid = router.query.pageNo;

    // const [data1, setData1] = useState({})
    // useEffect(() =>{
    //     fetch(`https://jsonplaceholder.typicode.com/posts/${pid}`)
    //     .then(res => res.json())
    //     .then(data2 => setData1(data2))
    // },[])
    return <>
        <Head>
            <title>Blog No. {data.id} Page</title>
            <meta name="description" content="Educational"/>
            <meta name="keywords" content="HTML, CSS, JavaScript, react.js, next.js"/>
            <meta name="author" content="Farhan Shahariar"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <Navbar/>
        <h1 className='text-2xl text-gray-600 italic text-center'>This is my blog {data.id}</h1>
        <div className="w-[50%] mx-auto border-[1px] mt-5 p-3 rounded-xl shadow-xl">
            <h1 className="  w-8 h-8 flex items-center bg-sky-700 rounded-[100%] text-[15px] justify-center text-white">{data.id}</h1>
            <h1 className=" mt-3 text-xl text-gray-700">{data.title}</h1>
            <h1 className="mt-2 text-gray-700"> {data.body}</h1>
        </div>
    </>
};

export default pageNo;
