import { BookOpen, Video, BarChart3 } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Python Development',
    desc: 'From basics to advanced with projects and best practices.',
    color: 'from-blue-500 to-indigo-600',
    highlights: ['Live coding', 'Projects', 'Quizzes'],
  },
  {
    id: 2,
    title: 'Data Science',
    desc: 'Statistics, ML, visualization, and real datasets.',
    color: 'from-purple-500 to-pink-600',
    highlights: ['Pandas/NumPy', 'ML', 'Dashboards'],
  },
  {
    id: 3,
    title: 'Generative AI',
    desc: 'LLMs, prompt engineering, transformers and apps.',
    color: 'from-cyan-500 to-blue-600',
    highlights: ['LLMs', 'Vector DBs', 'Deployments'],
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Courses</h2>
            <p className="text-gray-600 mt-2">Micro‑modules, adaptive learning paths, and capstone projects.</p>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-sm text-gray-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border">
              <Video className="h-4 w-4 text-blue-600" /><span>Live</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border">
              <BookOpen className="h-4 w-4 text-purple-600" /><span>Materials</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border">
              <BarChart3 className="h-4 w-4 text-cyan-600" /><span>Analytics</span>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <article key={c.id} className="group relative rounded-xl border bg-white/70 backdrop-blur hover:shadow-xl transition overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${c.color}`} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{c.title}</h3>
                <p className="mt-2 text-gray-600">{c.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-2 text-xs text-gray-700">
                  {c.highlights.map((h) => (
                    <li key={h} className="px-2 py-1 rounded bg-gray-100">{h}</li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between">
                  <button className="px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow">
                    Enroll Demo
                  </button>
                  <span className="text-xs text-gray-500">Certificate on completion</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
