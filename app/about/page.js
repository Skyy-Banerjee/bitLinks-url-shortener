import localFont from "next/font/local";

const poppins = localFont({
  src: "../fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

function About() {
  return (
    <main className="bg-purple-100 min-h-screen flex items-center justify-center">
      <section className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg text-center">
        <h1
          className={`text-4xl font-bold ${poppins.className} text-purple-600 mb-6`}>
          About BitLinks-Shortener 🌐
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          BitLinks-Shortener is a privacy-first, straightforward URL shortening
          service that empowers you to transform long links into concise,
          shareable URLs. We prioritize your privacy by eliminating tracking and
          unnecessary sign-ups. Our mission is to simplify your digital
          experience while keeping your data secure.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          We believe in simplicity and efficiency, so you can focus on what
          truly matters without any distractions. Shorten your links
          effortlessly with BitLinks-Shortener and enjoy a clutter-free online
          experience. ✨
        </p>
      </section>
    </main>
  );
}

export default About;
