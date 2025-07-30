import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { BookOpen, PenTool, Cloud, Shield, Zap } from 'lucide-react';

const Home = () => {
  const { user, isLoading } = useAuth();

  console.log('Home component - User state:', user);
  console.log('Home component - Loading state:', isLoading);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <BookOpen className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Digital Notebook
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Capture your thoughts, organize your ideas, and access them from anywhere. 
              iNotebook makes note-taking simple, secure, and seamless.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {user ? (
                <Link
                  to="/notes"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Go to My Notes
                </Link>
              ) : (
                <>
                  <Link
                    to="/signup"
                    className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Started
                  </Link>
                  <Link
                    to="/login"
                    className="inline-flex items-center px-8 py-4 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to stay organized
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to help you capture, organize, and find your notes effortlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
              <div className="bg-blue-100 rounded-full p-6 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <PenTool className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rich Text Editor</h3>
              <p className="text-gray-600">
                Create beautiful notes with our intuitive editor supporting formatting, lists, and more.
              </p>
            </div>

            <div className="text-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
              <div className="bg-blue-100 rounded-full p-6 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Cloud className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Sync</h3>
              <p className="text-gray-600">
                Your notes are automatically synced across all your devices in real-time.
              </p>
            </div>

            <div className="text-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
              <div className="bg-blue-100 rounded-full p-6 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Private</h3>
              <p className="text-gray-600">
                Your data is encrypted and secure. Your privacy is our top priority.
              </p>
            </div>

            <div className="text-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
              <div className="bg-blue-100 rounded-full p-6 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">
                Instant search and quick access to all your notes, anytime, anywhere.
              </p>
            </div>

            <div className="text-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
              <div className="bg-blue-100 rounded-full p-6 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Organize Everything</h3>
              <p className="text-gray-600">
                Use tags and categories to keep your notes organized and easy to find.
              </p>
            </div>

            <div className="text-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
              <div className="bg-blue-100 rounded-full p-6 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Cloud className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cross-Platform</h3>
              <p className="text-gray-600">
                Access your notes from any device - desktop, tablet, or mobile.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Debug Info */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg text-sm">
          <div>User: {user ? 'Logged in' : 'Not logged in'}</div>
          <div>Loading: {isLoading ? 'Yes' : 'No'}</div>
          {user && <div>User ID: {user.id}</div>}
        </div>
      )}
    </div>
  );
};

export default Home; 