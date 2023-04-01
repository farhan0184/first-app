import Navbar from "@/components/Navbar";
import Head from "next/head";

const post = () => {
    return <>
        <Head>
            <title>Post Page</title>
            <meta name="description" content="Educational"/>
            <meta name="keywords" content="HTML, CSS, JavaScript, react.js, next.js"/>
            <meta name="author" content="Farhan Shahariar"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <Navbar/>
        <h1 className='text-2xl text-center italic text-sky-900'>This is my post</h1>
    </>
};

export default post;