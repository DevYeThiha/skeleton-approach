import Image from "@/comp/ImageComp";
import { SkeleItem, useSkeletonContext } from "@/comp/Skeleton";
import { IPost } from "@/data/post.data";
import { cn } from "@/lib/utils";

const PostComp: React.FC<IPost> = ({ image, title, desc }) => {
    const {isLoading} = useSkeletonContext();
  return (
    <div
      className={cn(
        "w-[25rem] min-h-[25rem] border  rounded-lg",
        "border-black/10"
      )}
    >
      <SkeleItem className="w-full aspect-video relative">
        {!isLoading && <Image src={image} fill alt="image" />}
      </SkeleItem>
      <div className="p-5 flex flex-col gap-2">
        <SkeleItem tag="h3" className="w-full min-h-[10px] relative font-bold" repeat={1}>
          {title}
        </SkeleItem>
        <SkeleItem tag="h3" className="w-full min-h-[10px] relative font-bold" repeat={3}>
          {desc}
        </SkeleItem>
      </div>
    </div>
  );
};

export default PostComp;
