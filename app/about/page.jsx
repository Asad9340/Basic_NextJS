
const About = () => {
  return (
    <section className="container mx-auto px-4 py-10 pt-20 max-w-6xl">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">About Us</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Welcome to BlogName – a platform built for sharing stories, knowledge,
          and inspiration from around the world.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <img
          src="https://i.postimg.cc/zvXCC28W/profile.jpg"
          alt="Our team"
          className="rounded-xl shadow-md w-full h-[300px] object-cover object-top"
        />
        <div className="shadow-lg p-6 bg-white rounded-xl">
          <h3 className="text-2xl font-bold text-indigo-600 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-700 mb-4">
            BlogName was founded with a simple goal: to make voices heard.
            Whether it's tech, lifestyle, travel, or opinions, we empower
            creators to tell their stories.
          </p>
          <p className="text-gray-700">
            We believe in community, authenticity, and the power of content to
            make an impact.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h4 className="text-xl font-semibold mb-2">Join the Journey</h4>
        <p className="text-gray-600 mb-4 max-w-xl mx-auto">
          We're always looking for passionate writers and curious readers. Stay
          tuned for more updates, and thank you for being part of our story.
        </p>
        <a
          href="/contact"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}

export default About
