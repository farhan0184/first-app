import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();

    const navLinks =[
        {
            name: "Home",
            link: '/',
        },
        {
            name: "About",
            link: '/about',
        },
        {
            name: "Contact",
            link: '/contact',
        },
        {
            name: "Blog",
            link: '/blog',
        },
        {
            name: "Post",
            link: '/post',
        },
        {
            name: "Meal",
            link: '/meal',
        },
    ];

    return <>
        <div className="my-5">
            <nav className="">  
                <ul className="flex justify-center italic w-[32%] mx-auto border-[1px] rounded-3xl bg-black">
                {
                    navLinks.map(({name,link})=>(
                        <li key={link} className={` ${router.pathname === link ? 'font-bold text-amber-700': 'text-white'}  px-3 py-2 ${name === 'Meal' ? '' : 'border-r-[1px]'}`}>
                            <Link href={{pathname: link}}>{name}</Link>
                        </li>
                    ))
                }
                </ul>
            </nav>
        </div>
        
        
    </>
};

export default Navbar;


// , query:{id:'1'}