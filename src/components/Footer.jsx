export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-semibold text-lg">EduSphere</h3>
          <p className="mt-2 text-sm text-gray-400">A modern platform for Python, Data Science and Generative AI learning with live classes and analytics.</p>
        </div>
        <div>
          <h4 className="text-white font-medium">Quick Links</h4>
          <ul className="mt-2 text-sm space-y-2">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#courses" className="hover:text-white">Courses</a></li>
            <li><a href="#teachers" className="hover:text-white">Teachers</a></li>
            <li><a href="#reviews" className="hover:text-white">Reviews</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium">Get updates</h4>
          <form className="mt-2 flex gap-2">
            <input type="email" placeholder="Email address" className="w-full px-3 py-2 rounded-md bg-gray-800 text-gray-100 placeholder:text-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600" />
            <button type="submit" className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white">Subscribe</button>
          </form>
          <p className="mt-2 text-xs text-gray-500">We respect your privacy.</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-xs text-gray-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} EduSphere. All rights reserved.</span>
          <span>Built for demo — Admin/Teacher/Student portals coming next.</span>
        </div>
      </div>
    </footer>
  );
}
