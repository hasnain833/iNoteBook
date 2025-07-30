import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, X, Tag, Plus } from 'lucide-react';
import { notesAPI } from '../services/api';

const AddNote = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('General');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title.trim() || !description.trim()) {
      setError('Please provide both title and description for your note.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const noteData = {
        title: title.trim(),
        description: description.trim(),
        tag: tag.trim() || 'General'
      };

      await notesAPI.addNote(noteData);
      
      // Navigate back to notes list
      navigate('/notes');
    } catch (error) {
      console.error('Error creating note:', error);
      setError(error.message || 'Failed to create note. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Create New Note</h1>
            <p className="text-gray-600 mt-2">Capture your thoughts and ideas</p>
          </div>
          <button
            onClick={() => navigate('/notes')}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <X className="h-5 w-5" />
            <span>Cancel</span>
          </button>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8">
            {error && (
              <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
                {error}
              </div>
            )}

            {/* Title */}
            <div className="mb-6">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your note title..."
                required
              />
            </div>

            {/* Tag */}
            <div className="mb-6">
              <label htmlFor="tag" className="block text-sm font-medium text-gray-700 mb-2">
                Tag
              </label>
              <div className="relative">
                <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  id="tag"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Add a tag (optional)"
                />
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={16}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                placeholder="Start writing your note..."
                required
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 sm:justify-end">
              <button
                type="button"
                onClick={() => navigate('/notes')}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting || !title.trim() || !description.trim()}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Saving...</span>
                  </>
                ) : (
                  <>
                    <Save className="h-5 w-5" />
                    <span>Save Note</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Tips */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">💡 Tips for Better Notes</h3>
          <ul className="text-blue-800 space-y-1 text-sm">
            <li>• Use descriptive titles to make your notes easier to find</li>
            <li>• Add relevant tags to organize and categorize your notes</li>
            <li>• Break down complex ideas into smaller, digestible sections</li>
            <li>• Your notes are automatically saved to the cloud and synced across devices</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddNote; 