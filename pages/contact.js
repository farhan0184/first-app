import Head from "next/head";
import Navbar from "@/components/Navbar";

const contact = () => {
    return (
        <div>
            <Head>
                <title>Contact Page</title>
                <meta name="description" content="Educational"/>
                <meta name="keywords" content="HTML, CSS, JavaScript, react.js, next.js"/>
                <meta name="author" content="Farhan Shahariar"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <Navbar/>
            <h1 className='text-2xl text-gray-600 italic text-center'>This is my contact</h1>
        </div>
    );
};

export default contact;