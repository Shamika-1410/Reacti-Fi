# Utility Functions

This directory contains helpful utility functions that can be used throughout the Reacti-Fi application.

## Available Functions

### Date & Time
- `formatDate(date, format)` - Format dates in different styles (short, long, time)
- `generateId(length)` - Generate random IDs for components or data

### Text Manipulation
- `capitalize(str)` - Capitalize the first letter of a string
- `truncateText(text, maxLength, suffix)` - Truncate text with optional suffix
- `toSlug(str)` - Convert text to URL-friendly slug format
- `getInitials(name)` - Extract initials from a full name

### Validation
- `isValidEmail(email)` - Validate email format
- `isEmpty(value)` - Check if a value is empty (null, undefined, empty string/array/object)

### Data Processing
- `formatFileSize(bytes)` - Convert bytes to human-readable file sizes
- `deepClone(obj)` - Create deep copies of objects
- `debounce(func, delay)` - Debounce function calls

## Usage Examples

```javascript
import { formatDate, capitalize, isValidEmail } from '../utils/helpers';

// Date formatting
const today = formatDate(new Date(), 'long'); // "Monday, January 1, 2024"

// Text manipulation
const title = capitalize('hello world'); // "Hello world"

// Email validation
const isValid = isValidEmail('user@example.com'); // true

// File size formatting
const size = formatFileSize(1048576); // "1 MB"

// Generate IDs
const id = generateId(); // "aB3x9K2m"
const customId = generateId(12); // "aB3x9K2mNpQr"
```

## Demo Component

Check out `src/components/UtilityDemo.js` for a complete demonstration of all utility functions with an interactive interface.

## Adding New Utilities

When adding new utility functions:

1. Add the function to `helpers.js`
2. Include JSDoc comments for documentation
3. Add examples to the demo component
4. Update this README with the new function

## Best Practices

- Keep functions pure and side-effect free
- Use TypeScript-style JSDoc comments for better IDE support
- Test functions thoroughly before adding to production
- Keep functions focused on a single responsibility 