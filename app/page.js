import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The best URL-Shortener out there! 💖
          </p>
          <p className="px-36 text-center">
            We are the most straight-forward URL Shortener in the world 🌎. Most
            URL shorteners will track you or ask you for personal details for
            logging in. We undestand your needs and hence created
            Bitlinks-Shortener
          </p>
          <div className="flex gap-3 justify-start">
            <Link href="/shorten">
              <button className="bg-purple-500 hover:bg-purple-400 shadow-lg p-3 py-1 rounded-lg font-bold">
                Try Now🪄
              </button>
            </Link>
            <Link href="/github">
              <button className="bg-purple-500 hover:bg-purple-400 shadow-lg p-3 py-1 rounded-lg font-bold">
                GitHub📂
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image
            className="mix-blend-darken"
            src={"/vector_img.jpg"}
            alt="vector-img"
            fill={true}
          />
        </div>
      </section>
    </main>
  );
}

export default Home;
