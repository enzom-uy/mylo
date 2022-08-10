import React from "react";
import { MdMenu } from "react-icons/md";

const MenuIcon: React.FC = () => {
  return (
    <div>
      <button>
        <MdMenu className="text-4xl text-primary" />
      </button>
    </div>
  );
};

export default MenuIcon;
