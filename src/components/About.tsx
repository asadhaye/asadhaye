import React from 'react';
import { Award, Users, Globe2, Shield } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '10+' },
  { label: 'Projects Completed', value: '200+' },
  { label: 'Global Clients', value: '50+' },
  { label: 'Team Members', value: '15+' },
];

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to delivering high-quality solutions that exceed expectations.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working closely with clients to understand and achieve their goals.',
  },
  {
    icon: Globe2,
    title: 'Global Perspective',
    description: 'International experience across diverse markets and cultures.',
  },
  {
    icon: Shield,
    title: 'Ethics',
    description: 'Operating with integrity, transparency, and Islamic business values.',
  },
];

export default function About() {
  return (
    <div id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Building digital excellence with integrity and innovation
          </p>
        </div>

        <div className="mt-20">
          <dl className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6 text-center">
                <dt className="text-sm font-medium text-gray-500 truncate">{stat.label}</dt>
                <dd className="mt-1 text-3xl font-semibold text-indigo-600">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="bg-white p-6 rounded-lg shadow">
                <div className="text-indigo-600">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{value.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}