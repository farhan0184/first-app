import Navbar from '@/components/Navbar';
import ReactPlayer from 'react-player'




export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    const datas = await res.json()
    // Get the paths we want to pre-render based on posts
    const paths = datas.meals.map((item) => {
      
        return {
            params: {
                mealId: item.idMeal.toString() ,
            }
        }
      
    })
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }

  export const getStaticProps = async (context) =>{
    const id = context.params.mealId;
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const data = await res.json()

    return{
        props:{
            data,
        }
    }
}

const mealId = ({data}) => {
    const meal = data.meals[0];

    
    return (
        <div>
            <Navbar />
            <div className='w-11/12 mx-auto'>
                <h1 className='text-2xl text-gray-600 mt-5 italic'>This is {meal.strMeal} Details</h1>
                <ReactPlayer url={meal.strYoutube}/>
                <br />
                <h1 className='text-gray-600 mt-5 italic'>{meal.strInstructions}</h1>
            </div>
        </div>
    );
};

export default mealId;