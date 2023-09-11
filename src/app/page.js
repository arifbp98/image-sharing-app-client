"use client";

import { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";

export default function HomePage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8088/api/images", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => setImages(data.data));
    setLoading(false);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-4xl mb-14 font-bold tracking-tight text-gray-400">
          GALLERY
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {loading ? <p>Loading...</p> : <ImageCard data={images} />}
        </div>
      </div>
    </div>
  );
}
