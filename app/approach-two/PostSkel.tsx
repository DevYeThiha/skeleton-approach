import { IPost } from "@/data/post.data";
import PostComp from "./PostComp";
import useFetchPost from "@/hooks/useFetchPost";

const post:IPost = {
    title: "",
    image: "",
    desc: ""
}
 
const PostSkeleton: React.FC<{repeat?: number}> = ({repeat = 1}) => {
    const {isLoading} = useFetchPost();
    if(!isLoading) return <></>;
    return ( 
        <>
            {
                [...(new Array(repeat))].map((item,index) => <PostComp {...post} key={index}/>)
            }
        </>
     );
}
 
export default PostSkeleton;