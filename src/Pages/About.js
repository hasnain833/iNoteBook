import React from 'react';
import { BookOpen, Users, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <BookOpen className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About iNotebook
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to help people capture, organize, and access their thoughts and ideas 
            from anywhere in the world. iNotebook is more than just a note-taking app – it's your 
            digital companion for productivity and creativity.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-4">
              iNotebook was born from a simple frustration: the inability to access important notes 
              when you need them most. Whether you're a student rushing to class, a professional 
              in back-to-back meetings, or a creative mind struck by inspiration at 2 AM, your notes 
              should be wherever you are.
            </p>
            <p className="text-gray-600 mb-4">
              Founded in 2025, we set out to create the most intuitive, secure, and accessible 
              note-taking platform on the web. Our team combines years of experience in software 
              development, user experience design, and productivity tools to bring you a product 
              that truly understands how you work and think.
            </p>
            <p className="text-gray-600">
              Today, thousands of users trust iNotebook with their most important thoughts, ideas, 
              and plans. We're just getting started on our journey to revolutionize how people 
              capture and organize information in the digital age.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">User-Centric</h3>
            <p className="text-gray-600">
              Every feature we build starts with understanding our users' needs. Your feedback 
              drives our product decisions and shapes the future of iNotebook.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Target className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Simplicity</h3>
            <p className="text-gray-600">
              We believe powerful tools don't have to be complicated. iNotebook is designed 
              to be intuitive from day one, with advanced features that reveal themselves as you grow.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Heart className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy First</h3>
            <p className="text-gray-600">
              Your thoughts are personal. We use industry-leading encryption and privacy 
              practices to ensure your notes remain secure and private, always.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We're a passionate team of developers, designers, and productivity enthusiasts 
            working remotely from around the world. United by our mission to help you stay organized 
            and productive.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">HA</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Hasnain Aftab</h3>
              <p className="text-blue-200">Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">HA</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Hasnain Aftab</h3>
              <p className="text-blue-200">Lead Developer</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">HA</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Hasnain Aftab</h3>
              <p className="text-blue-200">UX Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 