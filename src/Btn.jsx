export const Btn = ({ children, className, onClick }) => {
  return (
    <button
      className={`rounded-none px-5 py-2 text-lg font-bold border-2 border-purple-500 transition ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
