const API_BASE_URL = 'http://localhost:5000/api';

// Helper function to get auth token
const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

// Helper function to make authenticated requests
const makeAuthenticatedRequest = async (endpoint, options = {}) => {
  const token = getAuthToken();
  if (!token) {
    throw new Error('No authentication token found');
  }

  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      'auth-token': token,
    },
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
  }

  return response.json();
};

// Notes API functions
export const notesAPI = {
  // Get all notes for the authenticated user
  getAllNotes: async () => {
    return makeAuthenticatedRequest('/notes/fetchallnotes');
  },

  // Add a new note
  addNote: async (noteData) => {
    return makeAuthenticatedRequest('/notes/addnote', {
      method: 'POST',
      body: JSON.stringify(noteData),
    });
  },

  // Update an existing note
  updateNote: async (noteId, noteData) => {
    return makeAuthenticatedRequest(`/notes/updatenote/${noteId}`, {
      method: 'PUT',
      body: JSON.stringify(noteData),
    });
  },

  // Delete a note
  deleteNote: async (noteId) => {
    return makeAuthenticatedRequest(`/notes/deletenote/${noteId}`, {
      method: 'DELETE',
    });
  },
};

// Auth API functions
export const authAPI = {
  // Login user
  login: async (credentials) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Login failed');
    }

    return data;
  },

  // Create new user
  signup: async (userData) => {
    const response = await fetch(`${API_BASE_URL}/auth/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Signup failed');
    }

    return data;
  },

  // Get current user
  getCurrentUser: async () => {
    return makeAuthenticatedRequest('/auth/getuser');
  },
}; 