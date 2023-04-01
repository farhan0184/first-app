import Navbar from "@/components/Navbar";
import Image from 'next/image'
import Head from "next/head";

const index = () => {
  
  return <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Educational"/>
        <meta name="keywords" content="HTML, CSS, JavaScript, react.js, next.js"/>
        <meta name="author" content="Farhan Shahariar"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Navbar/>
      
      <div style={{textAlign: "center"}}>
        <h1 className='text-2xl text-gray-600 italic'>This is home</h1>
        <Image alt="hello" className="mx-auto" src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' width={400} height={400}></Image>
      </div>
  </>
};

export default index;