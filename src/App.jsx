import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-white p-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-purple-800 mb-4">Hi, I’m RK 👋</h1>
        <p className="text-lg text-gray-700 mb-6">Power Platform Developer passionate about building apps, automations, and clean user interfaces.</p>
        <div className="flex justify-center gap-4 mb-10">
          <a href="resume.pdf" target="_blank" className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition">📄 View Resume</a>
          <a href="https://www.linkedin.com/in/radhakishansharma/" target="_blank" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">🔗 LinkedIn</a>
          <a href="https://github.com/siddhkishan" target="_blank" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition">💻 GitHub</a>
        </div>

        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Projects</h2>
        <div className="grid gap-6 text-left">
          <div className="rounded-xl border p-4 shadow-sm bg-white">
            <h3 className="font-bold text-xl mb-2">Work Activity Management App</h3>
            <p className="text-gray-700 mb-2">Real-time productivity tracker with planner for team management and auto logs.</p>
            <a href="https://github.com/siddhkishan/WAM-App" className="text-purple-700 hover:underline" target="_blank">View on GitHub</a>
          </div>
          <div className="rounded-xl border p-4 shadow-sm bg-white">
            <h3 className="font-bold text-xl mb-2">CF Assist Tool</h3>
            <p className="text-gray-700 mb-2">Excel-VBA based automation tool for email, PDF, productivity, and more.</p>
            <a href="https://github.com/siddhkishan/CF-Assist" className="text-purple-700 hover:underline" target="_blank">View on GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
