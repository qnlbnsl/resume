import Butter from "buttercms";
import { Categories } from "../../Types";
import { useState, useEffect } from "react";


export const GetCategories = async () => {
    const [categories, setCategories] = useState<Butter.Category<string>[] | never[]>([]);

    useEffect(() => {
      const loadData = async () => {
        try{
            const categories = await butter.category.list()
            if (!categories || !categories.data || !categories.data.data) throw new Error("No categories found")
            setCategories(categories.data.data)
        }catch(e){
            console.log(e)
        }
      }

      loadData()
    }, []);
    return categories as Categories;
}