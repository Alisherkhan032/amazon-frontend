import React from 'react';

// Customizable Button Component
const Button = ({ title, bgColor, fontSize, onClick, className, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={` rounded ${bgColor} ${fontSize} ${className}`}
      {...props}
    >
      {title}
    </button>
  );
};

// Pre-styled Add to Cart Button
const AddToCartButton = ({ onClick }) => {
  return (
    <Button
      title="Add to Cart"
      bgColor="bg-yellow-dark"
      fontSize="text-xs"
      onClick={onClick}
      className="text-black w-full rounded-3xl px-4 py-1 font-semibold"
    />
  );
};

export { Button, AddToCartButton };
