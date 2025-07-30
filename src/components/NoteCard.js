import React from 'react';
import { Link } from 'react-router-dom';
import { Edit3, Trash2, Calendar, Tag } from 'lucide-react';

const NoteCard = ({ note, onDelete }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const truncateContent = (content, maxLength = 150) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + '...';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Card Header */}
      <div className="p-6 pb-4">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 flex-1 mr-2">
            {note.title}
          </h3>
          <div className="flex space-x-2">
            <Link
              to={`/edit-note/${note._id}`}
              className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              title="Edit note"
            >
              <Edit3 className="h-4 w-4" />
            </Link>
            <button
              onClick={() => onDelete(note._id)}
              className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              title="Delete note"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Content Preview */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {truncateContent(note.description)}
        </p>

        {/* Tag */}
        {note.tag && note.tag !== 'General' && (
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              <Tag className="h-3 w-3 mr-1" />
              {note.tag}
            </span>
          </div>
        )}
      </div>

      {/* Card Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            <span>Created {formatDate(note.date)}</span>
          </div>
          <Link
            to={`/edit-note/${note._id}`}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Open →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoteCard; 