interface DropDownItemProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const DropDownItem = ({ children, onClick }: DropDownItemProps) => {
  return (
    <div
      role="button"
      onKeyDown={() => {}}
      onClick={onClick}
      tabIndex={0}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
    >
      {children}
    </div>
  );
};
