import postData, { IPost } from "@/data/post.data";
import { useEffect, useState } from "react";


 
const useFetchPost = () => {
    const [data, setData] = useState<IPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const cleanUp = setTimeout(() => {
            setData(postData)
            setIsLoading(false)
        }, 1000)
        
        return () => clearTimeout(cleanUp);
    },[])

    return {data, isLoading}
}
 
export default useFetchPost;