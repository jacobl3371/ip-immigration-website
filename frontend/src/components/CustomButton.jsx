function CustomButton({ text, className, ...props }) {
  return (
    <button
      {...props}
      className={`${className} text-black bg-white rounded-lg px-4 py-2`}
    >
      {text}
    </button>
  );
}

export default CustomButton;
