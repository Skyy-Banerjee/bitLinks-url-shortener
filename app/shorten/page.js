"use client";

import Link from "next/link";
import { useState } from "react";

function page() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState(false);

  async function generate() {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      url: url,
      shortUrl: shortUrl,
    });

    let response = await fetch("/api/generate", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    let data = await response.json();
    setUrl("");
    setShortUrl("");
    setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
    alert(data.message);
    console.log(data);
  }

  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Generate your short URLs 💫</h1>
      <div className="flex flex-col gap-2">
        <input
          value={url}
          type="text"
          placeholder="Enter your URL..."
          className="p-4 py-2 focus:outline-purple-600"
          onChange={(evt) => setUrl(evt.target.value)}
        />
        <input
          value={shortUrl}
          type="text"
          placeholder="Enter preferred short URL..."
          className="p-4 py-2 focus:outline-purple-600"
          onChange={(evt) => setShortUrl(evt.target.value)}
        />
        <button
          disabled={!url || !shortUrl}
          onClick={generate}
          className="my-3 bg-purple-500 text-white hover:bg-purple-400 shadow-lg p-3 py-1 rounded-lg font-bold">
          {!url || !shortUrl ? "Type both the URLS..." : "Generate"}
        </button>
      </div>
      {generated && (
        <>
          <span className="font-bold text-lg"> Your Link:</span>
          <code>
            <Link target="_blank" href={generated}>
              {generated}
            </Link>{" "}
          </code>
        </>
      )}
    </div>
  );
}

export default page;
