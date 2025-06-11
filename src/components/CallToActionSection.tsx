export default function CallToActionSection() {
  return (
    <section className="bg-green-600 text-white py-16 px-6 text-center rounded-md mx-6 md:mx-0 my-16">
      <h2 className="text-3xl font-semibold mb-4 font-montserrat">
        Ready to join the ride?
      </h2>
      <p className="mb-8 max-w-lg mx-auto font-montserrat">
        Become part of our exclusive vintage car community and enjoy special events, updates, and offers.
      </p>
      <a
        href="/signup"
        className="inline-block bg-white text-green-600 font-bold py-3 px-10 rounded shadow hover:bg-gray-200 transition"
      >
        Sign Up Now
      </a>
    </section>
  )
}
