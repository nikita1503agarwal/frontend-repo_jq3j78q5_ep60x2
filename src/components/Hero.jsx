import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-20 overflow-hidden bg-gradient-to-b from-white via-blue-50 to-purple-50">
      <div className="absolute inset-0">
        <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-blue-400/40 to-purple-600/40 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-purple-400/40 to-blue-600/40 blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center relative z-10">
        <div className="py-10">
          <p className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-white/60 backdrop-blur border border-white/40 text-blue-700 shadow">
            Learn. Build. Innovate — Anytime, Anywhere.
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-blue-700 via-purple-700 to-blue-500 bg-clip-text text-transparent">
            A 3D E‑Learning Platform for Python, Data Science & Generative AI
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Immersive live classes, adaptive microlearning, assessments, and real‑time analytics across Admin, Teacher, and Student portals.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#courses" className="px-5 py-3 rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow hover:shadow-md transition">Join a Class</a>
            <a href="#teachers" className="px-5 py-3 rounded-md border border-gray-300 bg-white/70 backdrop-blur text-gray-800">Start Teaching</a>
            <a href="#auth" className="px-5 py-3 rounded-md border border-transparent bg-gray-900 text-white">Admin Login</a>
          </div>
        </div>
        <div className="h-[480px] w-full rounded-xl overflow-hidden bg-white shadow-xl border border-white/60">
          <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}
