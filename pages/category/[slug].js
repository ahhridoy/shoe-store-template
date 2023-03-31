import React, { useEffect, useState } from "react";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import { fetchDataFromApi } from "@/utils/api";
import useSWR from "swr";
import { useRouter } from "next/router";
import Image from "next/image";
const maxResult = 3;

const Category = () => {
  const [pageIndex, setPageIndex] = useState(1);

  return (
    <div className="w-full md:py-20 relative">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            {category?.data?.[0]?.attributes?.name}
          </div>
        </div>

        {/* products grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        {/* products grid end */}

        {/* PAGINATION BUTTONS START */}

        <div className="flex gap-3 items-center justify-center my-16 md:my-0">
          <button
            className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
            disabled={pageIndex === 1}
            onClick={() => setPageIndex(pageIndex - 1)}
          >
            Previous
          </button>

          <span className="font-bold"></span>

          <button
            className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
            onClick={() => setPageIndex(pageIndex + 1)}
          >
            Next
          </button>
        </div>
        {/* PAGINATION BUTTONS END */}

        <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
          <Image src="/logo.svg" width={150} height={100} alt="img" />
          <span className="text-2xl font-medium">Loading...</span>
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;
