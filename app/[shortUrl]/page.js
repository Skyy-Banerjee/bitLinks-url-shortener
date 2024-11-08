import { redirect } from "next/navigation";
import clientPromise from "../lib/mongodb";

async function page({ params }) {
  const shortUrl = (await params).url;
  //const body = await request.json();
  const client = await clientPromise;
  const db = client.db("bitLinks");
  const collection = db.collection("url");

  const doc = await collection.findOne({ shortUrl: shortUrl });
  if (doc) {
    redirect(doc.url);
  } else {
    redirect(`${process.env.NEXT_PUBLIC_HOST}`);
  }

  return <div>My post: {url}</div>;
}

export default page;
