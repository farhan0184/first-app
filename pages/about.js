import Navbar from "@/components/Navbar";
import Image from 'next/image'
import Head from "next/head";

const about = () => {
    return <>
            <Head>
                <title>About Page</title>
                <meta name="description" content="Educational"/>
                <meta name="keywords" content="HTML, CSS, JavaScript, react.js, next.js"/>
                <meta name="author" content="Farhan Shahariar"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <Navbar/>
            <h1 className='text-2xl text-center'>This is my about</h1>
            <Image alt="hello"  className='mx-auto' src='/demo1.jpg' width={400} height={400}></Image>
            <style jsx>
                {`
                    h1{
                        color: green;
                        font-style: italic;
                    }
                `}
            </style>
    </>
        
    
};

export default about;