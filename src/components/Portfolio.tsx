import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with React and Medusa.js, featuring AI-powered product recommendations.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Medusa.js', 'AI', 'Tailwind'],
  },
  {
    title: 'AI Shopping Assistant',
    description: 'Smart chatbot integration using the Vercel AI SDK to help customers find products and answer questions.',
    image: 'https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Next.js', 'AI SDK', 'TypeScript'],
  },
  {
    title: 'Marketing Analytics Dashboard',
    description: 'Real-time analytics dashboard for tracking marketing campaigns and customer engagement.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Analytics', 'Dashboard', 'React'],
  },
];

export default function Portfolio() {
  return (
    <div id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover our latest work and success stories
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center justify-between">
                  {project.title}
                  <ExternalLink className="h-5 w-5 text-gray-400 hover:text-indigo-600" />
                </h3>
                <p className="mt-2 text-sm text-gray-500">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}