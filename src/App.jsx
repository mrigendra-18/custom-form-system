
import FormContainer from './components/FormContainer';

const App = () => {
  const formConfig = [
    { type: 'text', name: 'name', label: 'Name', placeholder: 'Enter your name', validation: { required: true } },
    { type: 'email', name: 'email', label: 'Email', placeholder: 'Enter your email', validation: { required: true, pattern: /^[^@]+@[^@]+\.[^@]+$/ } },
    { type: 'textarea', name: 'message', label: 'Message', placeholder: 'Enter your message', validation: { required: true } },
    { type: 'select', name: 'country', label: 'Country', options: ['USA', 'Canada', 'UK'], validation: { required: true } },
  ];

  const handleSubmit = (formData) => {
    console.log(formData);
  };

  const handleReset = () => {
    console.log('Form reset');
  };

  return (
    <div>
      <h1>Custom Form</h1>
      <FormContainer
        config={formConfig}
        onSubmit={handleSubmit}
        onReset={handleReset}
      />
    </div>
  );
};

export default App;
