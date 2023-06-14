import axios from "axios";
import { createContext, useEffect, useState } from "react";


const ApiContextData = createContext()
export default ApiContextData;

const ApiProvider = ({children})=>{
    const [loading, setLoading] = useState(true)
    const [cocktails, setCocktails ] = useState([])
    const [searchTerm, setSearchTerm] = useState("a")
    const [itemSearch, setItemSearch] = useState("")

    const fetchingApiFunc = async()=>{
        try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        const items = response.data.drinks
        const newCocktail = items?.map((element, index)=>{
            const { strDrink, idDrink,strDrinkThumb,strAlcoholic, strGlass,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5, strInstructions,strInstructionsDE,strInstructionsES,strInstructionsFR,strInstructionsIT} = element
            return {
                "id": idDrink,
                "name":strDrink,
                "image": strDrinkThumb,
                "info": strAlcoholic,
                "glass":strGlass,
                "ingrident":[strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5],
                "instruction":[strInstructions, strInstructionsDE, strInstructionsES, strInstructionsFR, strInstructionsIT]
            }

        })
        setCocktails(newCocktail)
        setLoading(false)
        } catch (error) {
            alert("Plese Check Your Internet Connection!!")
        }
    }
        
    useEffect(()=>{
        fetchingApiFunc()
        
    }, [searchTerm])

    useEffect(()=>{
        if (itemSearch === undefined || itemSearch === ""){
            fetchingApiFunc()
        }
        else{
            
            const data = cocktails?.filter((element)=> element.name.toLowerCase().includes(itemSearch.toLowerCase()))
            setCocktails(data)
        }
    }, [itemSearch])
    return (<ApiContextData.Provider value={{loading, cocktails,searchTerm, setSearchTerm, itemSearch, setItemSearch}}>
        {children}
    </ApiContextData.Provider>)

}

export { ApiProvider };
