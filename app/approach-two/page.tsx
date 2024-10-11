"use client";

import Skeleton from "@/comp/Skeleton";
import useFetchPost from "@/hooks/useFetchPost";
import PostComp from "./PostComp";
import PostSkeleton from "./PostSkel";
import Link from "next/link";

 
const ApproachTwo: React.FC = () => {
    const {data, isLoading} = useFetchPost();
    return ( 
        <div className="w-screen h-max flex items-center flex-col gap-5">
            <h3 className="w-full mt-[10rem] text-center font-bold text-2xl">Apporach 2</h3> 
            <Link className="mb-5 text-sm" href="/approach-one">View Apporach 1</Link>
            <Skeleton isLoading={isLoading}>
                <PostSkeleton/>
                <PostSkeleton/>
                <PostSkeleton/>
                {
                    data.map((item,index) => (
                        <PostComp {...item} key={index}/>
                    ))
                }
            </Skeleton>
        </div>
     );
}
 
export default ApproachTwo;