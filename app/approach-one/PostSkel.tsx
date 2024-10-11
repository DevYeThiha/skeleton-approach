import { cn } from "@/lib/utils";
import { loaderStyle } from "@/comp/Skeleton";

type IProps = {
  isLoading: boolean;
  repeat?: number;
};

const PostSkeleton: React.FC<IProps> = ({ isLoading, repeat = 1 }) => {
  if (!isLoading) return <></>;
  return (
    <>
      {[...new Array(repeat)].map((_, index) => (
        <div
          className={cn(
            "w-[25rem] min-h-[25rem] border  rounded-lg",
            "border-black/10"
          )}
          key={index}
        >
          <div className={cn("w-full aspect-video", loaderStyle)}></div>
          <div className="p-5 flex flex-col gap-2">
            {[...new Array(6)].map((item, index) => (
              <div
                className={cn("w-full h-[10px]", loaderStyle)}
                key={index}
              ></div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default PostSkeleton;
