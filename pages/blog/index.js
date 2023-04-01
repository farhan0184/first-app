import Navbar from "@/components/Navbar";
import Head from "next/head";
import Link from 'next/link'

export const getStaticProps = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    return{
        props:{
            data,
        }
    }
}

const blog = ({data}) => {
    
    

    return (
        <div>
            <Head>
                <title>Blog Page</title>
                <meta name="description" content="Educational"/>
                <meta name="keywords" content="HTML, CSS, JavaScript, react.js, next.js"/>
                <meta name="author" content="Farhan Shahariar"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <Navbar/>
            <h1 className='text-2xl text-gray-600 italic text-center mb-5'>This is my blog</h1>

            {
                data.slice(0, data.length).map(({id,title}) =>(
                    <div className="flex h-14 border-[1px] mb-5 w-3/4 items-center text-xl mx-auto shadow-xl" key={id}>
                        <h1 className="ml-3 w-8 bg-sky-700 rounded-[100%] text-[15px] text-center text-white">{id}</h1>
                        <Link href={`/blog/${id}`}><h1 className="ml-5">{title}</h1></Link>
                    </div>
                ))
            }

            <div className="w-36 mx-auto">
                <button id='decrement' className={`  w-10 h-10 rounded-[100%] mr-6 bg-sky-700 text-[15px] font-semibold text-white`} >{'<<'}</button>
                <button className={`  w-10 h-10 rounded-[100%] bg-sky-700 text-[15px] font-semibold text-white`}>{'>>'}</button>
            </div>

        </div>
    );
};

export default blog;


// ${dec === 0 <= inc ? 'de': 'none'}
// ${inc <= 5 && data.length <= inc ? 'none': 'block'}