import { cn } from "@/lib/utils";
import Link from "next/link";

const links = [
  {
    url: "/approach-one",
    text: "Approach One",
  },
  {
    url: "/approach-two",
    text: "Approach Two",
  },
];

export default function Home() {
  return (
    <div className="full-screen flex-center flex-col">
      <div className="flex flex-col w-[20rem] gap-2">
        {links.map((item, index) => (
          <LinkComp {...item} key={index} />
        ))}
      </div>
    </div>
  );
}

const LinkComp: React.FC<{ url: string; text: string }> = ({ url, text }) => {
  return (
    <Link
      className={cn(
        "border border-black rounded-lg px-5 py-2",
        "w-full text-center hover:bg-black hover:text-white"
      )}
      href={url}
    >
      {text}
    </Link>
  );
};
