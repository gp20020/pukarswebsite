import React, { useEffect, useState } from "react";
import { DESCRIPTION, YOUR_NAME } from "../../data/home_data";

type Props = {};

function MetaTags({}: Props) {
  const [originUrl, setOriginUrl] = useState<string>("");
  useEffect(() => {
    if (typeof window !== "undefined" && originUrl === "") {
      setOriginUrl((window as any).location.origin);
      console.log(
        "origin url",
        `${originUrl}/_next/image?url=%2Fmeta-image.png&w=96&q=75`
      );
    }
  }, []);

  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, 
      shrink-to-fit=no"
      />
      <meta name="description" content={DESCRIPTION} />
      {/* open graph  */}
      <meta name="og:title" content={`${YOUR_NAME} - Portfolio`} />
      <meta name="og:description" content={DESCRIPTION} />
      <meta name="keyword" content="portfolio, javascript, developer" />
      <meta
        property="og:image"
        // content={`${originUrl}/_next/image?url=%2Fmeta-image.png&w=96&q=75`}
        content="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      />
      <meta property="og:url" content={originUrl} />
      <meta property="og:type" content="website" />

      {/* twitter tag  */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${YOUR_NAME} - Portfolio `} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta
        name="twitter:image"
        // content={`${originUrl}/_next/image?url=%2Fmeta-image.png&w=96&q=75`}
        content="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      />
    </>
  );
}

export default MetaTags;
