import React, { useState } from 'react';
import { 
  formatDate, 
  capitalize, 
  truncateText, 
  generateId, 
  isValidEmail,
  formatFileSize,
  getInitials,
  toSlug
} from '../utils/helpers';

const UtilityDemo = () => {
  const [email, setEmail] = useState('');
  const [text, setText] = useState('This is a very long text that will be truncated');
  const [name, setName] = useState('John Doe');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Utility Functions Demo</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Date Formatting */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">Date Formatting</h3>
          <div className="space-y-2 text-sm">
            <p><strong>Short:</strong> {formatDate(new Date(), 'short')}</p>
            <p><strong>Long:</strong> {formatDate(new Date(), 'long')}</p>
            <p><strong>Time:</strong> {formatDate(new Date(), 'time')}</p>
          </div>
        </div>

        {/* Text Utilities */}
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-3">Text Utilities</h3>
          <div className="space-y-2 text-sm">
            <p><strong>Capitalized:</strong> {capitalize('hello world')}</p>
            <p><strong>Truncated:</strong> {truncateText(text, 20)}</p>
            <p><strong>Slug:</strong> {toSlug('Hello World! This is a test.')}</p>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-purple-800 mb-3">Interactive Demo</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Validation:
              </label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-sm mt-1">
                {email ? (
                  <span className={isValidEmail(email) ? 'text-green-600' : 'text-red-600'}>
                    {isValidEmail(email) ? '✓ Valid email' : '✗ Invalid email'}
                  </span>
                ) : 'Enter an email to validate'}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Text to Truncate:
              </label>
              <input
                type="text"
                value={text}
                onChange={handleTextChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-sm mt-1">
                <strong>Truncated (20 chars):</strong> {truncateText(text, 20)}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name for Initials:
              </label>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-sm mt-1">
                <strong>Initials:</strong> {getInitials(name)}
              </p>
            </div>
          </div>
        </div>

        {/* File Size & ID Generation */}
        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-orange-800 mb-3">File Size & ID</h3>
          <div className="space-y-2 text-sm">
            <p><strong>1MB in bytes:</strong> {formatFileSize(1048576)}</p>
            <p><strong>2.5GB in bytes:</strong> {formatFileSize(2684354560)}</p>
            <p><strong>Random ID:</strong> {generateId()}</p>
            <p><strong>Custom ID (12 chars):</strong> {generateId(12)}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Usage Instructions</h3>
        <p className="text-sm text-gray-600">
          This demo showcases various utility functions from the <code className="bg-gray-200 px-1 rounded">utils/helpers.js</code> file. 
          You can import and use these functions in any component throughout your application.
        </p>
      </div>
    </div>
  );
};

export default UtilityDemo; 