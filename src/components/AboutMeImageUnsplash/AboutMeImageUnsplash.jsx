import axios from "axios";
import { useEffect, useState } from "react";
import { createApi } from "unsplash-js";

export const AboutMeImageUnsplash = () => {
  const [pictures, setPictures] = useState("");

  const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
  const unsplash = createApi({
    accessKey: ACCESS_KEY,
  });

  const fetchPhotosByQuery = (query) => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&query=${query}`
      )
      .then((response) => response.data)
      .then((data) => setPictures(data.results))
      .catch((error) => console.log("Error on fetchPhotosByQuery: ", error));
  };

  useEffect(() => fetchPhotosByQuery("cat"), [pictures]);

  return (
    <div>
      <button onClick={() => fetchPhotosByQuery("cat")}>Unsplash Button</button>
    </div>
  );
};
