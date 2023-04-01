import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";



const mealDb = ({data}) => {
   console.log(data)
    const [searchText,setSearchText] = useState('') 
    // const meals = data.meals;
    const [meals,setMeals] = useState([])
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => console.log(data.meals))
        
    },[searchText])
    
    const searchData = (e) =>{
        setSearchText(e.target.value)
    }
    return (
        <div>
        <Navbar/>
        <h1 className='text-2xl text-center'>This is Meal Section</h1>
        <div className="flex justify-center mt-5">
            <input onChange={searchData} type="text"  className="p-2 w-1/4 border-[1px] border-gray-200 hover:border-gray-800 rounded-full"/>
        </div>
        <div>
            <h1 className='text-xl text-center'>Total Search Result:{meals.length}</h1>
            <div className="w-11/12 mx-auto grid grid-cols-3 gap-3 my-5">
                {
                    meals.map(item=>(<div className="bg-gray-200  relative h-[600px] " key={item.idMeal} >
                        <div className="absolute h-3/4">
                            <div className="flex justify-center mt-5">
                            <Image alt="hello"  object-fit='fill' src={item.strMealThumb} width={340} height={300}></Image>
                            </div>
                            <div className="px-6">
                                <h1 className='text-xl mt-3 italic'>{item.strMeal}</h1>
                                <p className='mt-3 italic'>{item.strInstructions.slice(0,200)}...</p>
                            </div>
                        </div>
                    
                        <div className="absolute bottom-5 left-6">
                            <button className=" px-3 py-2  bg-yellow-800"><Link href={`/meal/${item.idMeal}`}>Detail</Link></button>
                        </div>
                        
                    </div>))
                }
            </div>
        </div>
        </div>
    );
};

export default mealDb;