const Button = ({ text, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="px-6 py-3 bg-blue-600 hover:bg-purple-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  