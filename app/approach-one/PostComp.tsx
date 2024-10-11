import Image from "@/comp/ImageComp";
import { IPost } from "@/data/post.data";
import { cn } from "@/lib/utils";

const PostComp: React.FC<IPost> = ({ image, title, desc }) => {
  return (
    <div
      className={cn(
        "w-[25rem] min-h-[25rem] border  rounded-lg",
        "border-black/10"
      )}
    >
      <div className="w-full aspect-video relative">
        <Image src={image} fill alt="image" />
      </div>
      <div className="p-5 flex flex-col gap-2">
        <h3 className="w-full min-h-[10px]font-bold">
          {title}
        </h3>
        <p className="w-full min-h-[10px]font-bold">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default PostComp;
