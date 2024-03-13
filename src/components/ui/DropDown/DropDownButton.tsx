interface DropDownButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const DropDownButton = ({ onClick, children }: DropDownButtonProps) => {
  return (
    <button
      className="flex rounded-full bg-gray-800 text-sm hover:ring-gray-300 focus:ring-4 focus:ring-gray-300 md:me-0 dark:hover:ring-gray-600 dark:focus:ring-gray-600"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
