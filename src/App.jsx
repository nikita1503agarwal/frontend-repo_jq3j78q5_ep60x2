import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Courses />
        {/* Placeholder sections for Teachers and Reviews to enable nav scrolling */}
        <section id="teachers" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold">Teachers</h2>
            <p className="mt-3 text-gray-600 max-w-2xl">Expert mentors from industry and academia. Live sessions via Zoom/Meet, detailed feedback, and project guidance.</p>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1,2,3].map((i) => (
                <div key={i} className="p-6 rounded-xl border bg-white/70 backdrop-blur">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />
                  <h3 className="mt-4 font-semibold">Instructor {i}</h3>
                  <p className="text-sm text-gray-600">Python • Data Science • GenAI</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="py-20 bg-gradient-to-b from-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold">Reviews</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {["“Amazing live classes and projects.”","“Loved the analytics and certificates.”","“Best platform to learn GenAI.”"].map((q,idx)=>(
                <blockquote key={idx} className="p-6 rounded-xl border bg-white/70 backdrop-blur">
                  <p className="text-gray-800">{q}</p>
                  <footer className="mt-3 text-sm text-gray-500">— Student {idx+1}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
