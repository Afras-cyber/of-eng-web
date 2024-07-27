import Image from "next/image";
import BlogData from "@/lib/Data/BlogData";
import { BlogDataProps } from "@/typedef";
import Link from "next/link";
import { Container, Typography } from "@mui/material";
export default function Home() {
  
  const Card = ({ item }: { item: BlogDataProps }) => {
    return (
      <Link href={`/blog/${item.slug}`}>
        <div className="flex flex-col sm:flex-row  rounded-lg border-[2px] border-gray-300 hover:opacity-[0.5] cursor-pointer shadow-lg hover:scale-105 transform duration-400">
          <Image
            src={
              item?.images.length == 0
                ? "/externer.jpeg"
                : item?.images[1]
            }
            width={120}
            height={120}
            alt="card image"
            className="w-full sm:w-2/12 h-24 object-cover"
          />
          <div className="px-3 py-2 flex justify-center flex-col">
            <Typography variant="subtitle1" className="font-title font-bold">
              {item?.title}
            </Typography>
          </div>
        </div>
      </Link>
    );
  };
  return (
    <main className=" ">
      <Container>
        <Typography
          variant="h6"
          className="font-title font-extrabold text-center sm:text-start"
        >
        {`Geschäftsfelder`}
        </Typography>
        <div className="py-5">
          <div className=" grid grid-row-1 l sm:grid-cols-2 sm:grid-flow-row gap-3">
            {BlogData.list?.map((item, index) => {
              return <Card key={index} item={item} />;
            })}
          </div>
        </div>
      </Container>
    </main>
  );
}
