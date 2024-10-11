import { cn } from "@/lib/utils";
import { INodeStater } from "@/types";
import { ElementType, createContext, useContext } from "react";

type ISkeletionParams = { isLoading: boolean };

type ISkeletonProps = ISkeletionParams & INodeStater;

type ISkeleItemProps = { tag?: string; repeat?: number;} & INodeStater;

const SkeletonContext = createContext({} as ISkeletionParams);

const Skeleton: React.FC<ISkeletonProps> = ({ children, isLoading }) => (
  <SkeletonContext.Provider value={{ isLoading }}>
    {children}
  </SkeletonContext.Provider>
);

export const loaderStyle = "w-full bg-blue-100 animate-pulse rounded-[5px]";

export const SkeleItem: React.FC<ISkeleItemProps> = ({
  tag,
  children,
  className,
  repeat = 1,
}) => {
  const Comp = tag || ("div" as ElementType);
  const { isLoading } = useSkeletonContext();
  
  return (
    <>
      {isLoading ? (
        [...new Array(repeat)].map((item, index) => (
          <div className={cn(loaderStyle, className)} key={index}></div>
        ))
      ) : (
        <Comp className={className}>{children}</Comp>
      )}
    </>
  );
};

export const useSkeletonContext = () => useContext(SkeletonContext);

export default Skeleton;
