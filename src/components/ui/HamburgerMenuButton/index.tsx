import { useState } from 'react';

import Button from '../Button';

export const HamburgerMenuButton = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleOnClick = () => {
    // setIsActive(!isActive);
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <Button
      // variant="unstyled"
      className={`h-[56px] w-[64px] ${menuIsOpen ? 'active' : ''} `}
      onClick={handleOnClick}
      datatype="hamburger-menu"
    >
      <div className="ham-bgr-btn relative h-full w-full">
        <b
          style={{
            transform: menuIsOpen ? 'rotate(-45deg)' : 'none',
            top: menuIsOpen ? '50%' : '20%',
          }}
        />
        <b style={{ opacity: menuIsOpen ? 0 : 1 }} />
        <b
          style={{
            transform: menuIsOpen ? 'rotate(45deg)' : 'none',
            top: menuIsOpen ? '50%' : '80%',
          }}
        />
      </div>
    </Button>
  );
};

// export default HamburgerMenuButton;
// HamburgerMenuButton.displayName = 'HamburgerMenuButton';
