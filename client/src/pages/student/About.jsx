import Footer from "../../components/student/Footer";

const About = () => {
  return (
    <>
    <div className="min-h-screen text-gray-800 px-6 py-12 md:px-20 bg-gradient-to-b from-green-100/70">
          <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-6 text-cyan-600">About Us</h1>
              <p className="text-lg mb-4">
                  Welcome to <span className="font-semibold">BrightPath</span> — your personalized platform for high-quality, accessible, and engaging online learning.
              </p>
              <p className="mb-4">
                  Our mission is to make education accessible to everyone. Whether you&apos;re a student, professional, or lifelong learner, we provide comprehensive courses designed by industry experts.
              </p>
              <p className="mb-4">
                  BrightPath offers:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                  <li>Expert-led courses in multiple domains</li>
                  <li>Progress tracking and certification</li>
                  <li>Secure, intuitive learning experience</li>
                  <li>Support for educators to create and publish content</li>
              </ul>
              <p>
                  Thank you for choosing BrightPath. Let&apos;s build your future together.
              </p>
          </div>
      </div>
      <Footer />
      </>
  );
};

export default About;