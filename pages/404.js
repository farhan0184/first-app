import { useRouter } from "next/router";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Head from "next/head";


const error = () => {
    const router = useRouter()
    const handleError = () =>{
        router.push('/')
    }

    useEffect(()=>{
        setTimeout(()=>{
            handleError();
        },3000)
    },[])
    return <>
        <Head>
            <title>Home Page</title>
            <meta name="description" content="Educational"/>
            <meta name="keywords" content="HTML, CSS, JavaScript, react.js, next.js"/>
            <meta name="author" content="Farhan Shahariar"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <Navbar/>
        <h1 className='text-2xl text-gray-600 italic text-center'>This is error page 404</h1>
        <div className="flex justify-center">
            {/* <Link  className='text-gray-600 italic' href="/">
                Go to home page
            </Link> */}
            {/* <a className='text-gray-600 italic cursor-pointer' onClick={()=>router.push('/')}>Go to home page</a> */}
            <a className='text-gray-600 italic cursor-pointer' onClick={handleError}>Go to home page</a>
        </div>
    </>
};

export default error;