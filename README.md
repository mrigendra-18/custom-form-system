# Custom Form System in React

This project demonstrates a fully functional Custom Form System built in React without any third-party libraries. The form system supports dynamic configurations, basic validation, and customizable styling.

## Features

- **Reusable Form Components**:
  - `TextInput`: Single-line text input.
  - `TextArea`: Multi-line text input.
  - `Select`: Dropdown with single or multiple selections.
  - `CheckboxGroup`: Group of checkboxes for multi-select options.
  - `RadioGroup`: Group of radio buttons for single selection.
  - `Switch`: Toggle for boolean values.
  - `DateInput`: Manually created date picker.
  - `Button`: For submission, reset, or other actions.

- **Dynamic Form Configuration**:
  - Define field types, labels, placeholders, default values, validation rules, and options dynamically.
  
- **Real-Time Validation**:
  - Required fields.
  - Min/Max length.
  - Pattern matching.
  - Visual feedback for invalid fields.

- **Dynamic Styling**:
  - Customize font size, font color, and background color for the form or individual components.

- **State Management**:
  - Utilize `useState` and `useReducer` to manage form field states and validation.

- **Accessibility**:
  - Accessible components with proper labels, ARIA attributes, and keyboard navigation.

## Project Structure

```
src/
│
├── components/
│   ├── Button.jsx
│   ├── CheckboxGroup.jsx
│   ├── DateInput.jsx
│   ├── FormContainer.jsx
│   ├── FormField.jsx
│   ├── RadioGroup.jsx
│   ├── Select.jsx
│   ├── Switch.jsx
│   ├── TextArea.jsx
│   └── TextInput.jsx
│
├── App.jsx
├── index.css
├── main.jsx
└── styles/
    └── form.css
```

### Key Files:
- **`FormContainer.jsx`**: Manages the overall form layout and state.
- **`FormField.jsx`**: Wrapper for individual form fields.
- **`ValidationMessage.jsx`**: Displays error messages.
- **`App.jsx`**: Provides example configurations for different forms.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone <https://github.com/mrigendra-18/custom-form-system>
   cd custom-form-system
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   
