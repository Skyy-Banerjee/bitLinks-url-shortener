import localFont from "next/font/local";

const poppins = localFont({
  src: "../fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

function Contact() {
  return (
    <main className="bg-purple-100 min-h-screen flex items-center justify-center">
      <section className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h1
          className={`text-4xl font-bold ${poppins.className} text-purple-600 mb-6 text-center`}>
          Get in Touch 📞
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          We'd love to hear from you! Reach out to us for any queries, feedback,
          or just to say hello.
        </p>

        <div className="flex flex-col gap-4 text-center">
          <div>
            <h2 className="text-xl font-semibold text-purple-500">
              📍 Address
            </h2>
            <p className="text-gray-700">BitLinks-Shortener HQ</p>
            <p className="text-gray-700">
              Hauptstraße 123, 10115 Berlin, Germany
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-purple-500">📞 Phone</h2>
            <p className="text-gray-700">Customer Support: +49 30 12345678</p>
            <p className="text-gray-700">Business Inquiries: +49 30 87654321</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-purple-500">✉️ Email</h2>
            <p className="text-gray-700">support@bitlinks-shortener.com</p>
            <p className="text-gray-700">business@bitlinks-shortener.com</p>
          </div>
        </div>

        <footer className="text-center mt-8">
          <p className="text-sm text-gray-500">
            We are here to assist you 24/7. Don't hesitate to reach out!
          </p>
        </footer>
      </section>
    </main>
  );
}

export default Contact;
