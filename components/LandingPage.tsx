import React from "react";

const codeExample = `
import { DevFlow } from '@devflow/api';

// Initialize API endpoint
const api = new DevFlow.API({
  name: 'users-api',
  auth: true
});

// Create a new user
api.post('/users', async (req, res) => {
  const user = await db.users.create(req.body);
  return res.json(user);
});

// Deploy with a single command
api.deploy();
`.trim();

export default function LandingPage() {
    return (
        <div className="bg-gradient-to-br from-[#f5f6ff] to-[#f7f3ff] min-h-screen">
            {/* Navbar */}
            <nav className="flex items-center justify-between px-8 py-6">
                <div className="text-2xl font-bold">DevFlow</div>
                <div className="space-x-6 hidden md:block">
                    <a href="#" className="text-gray-700 font-medium">Features</a>
                    <a href="#" className="text-gray-700 font-medium">Examples</a>
                    <a href="#" className="text-gray-700 font-medium">Testimonials</a>
                    <a href="#" className="text-gray-700 font-medium">Docs</a>
                    <a href="#" className="text-gray-700 font-medium">Community</a>
                    <a href="#" className="bg-black text-white px-4 py-1 rounded font-medium">GitHub Repo</a>
                </div>
                <div className="space-x-3">
                    <a href="#" className="text-gray-700 font-medium">Log In</a>
                    <a href="#" className="bg-violet-600 text-white px-4 py-2 rounded font-semibold shadow hover:bg-violet-700 transition">Get Started</a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-16">
                <div className="max-w-xl">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                        Build APIs in minutes, not months
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        DevFlow's serverless API platform lets you focus on code, not infrastructure. Scale automatically from prototype to production.
                    </p>
                    <div className="flex space-x-4 mb-8">
                        <a href="#" className="bg-violet-600 text-white px-6 py-3 rounded font-semibold shadow hover:bg-violet-700 transition">Get Started Free</a>
                        <a href="#" className="bg-white border border-gray-300 px-6 py-3 rounded font-semibold text-gray-800 hover:bg-gray-50 transition">View Docs</a>
                    </div>
                </div>
                <div className="mt-10 md:mt-0 md:ml-12 w-full md:w-[500px]">
                    <div className="bg-[#181c2a] text-white rounded-xl shadow-lg p-6 font-mono text-sm overflow-x-auto">
                        <pre>
                            <code>{codeExample}</code>
                        </pre>
                    </div>
                </div>
            </section>

            {/* Secondary Section */}
            <section className="text-center py-16 bg-white">
                <h2 className="text-3xl font-bold mb-4">Built for developers, by developers</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Everything you need to build, deploy, and scale APIs with confidence.
                </p>
            </section>
        </div>
    );
}
