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
      className="text-black w-full rounded-3xl px-4 py-2 font-semibold"
    />
  );
};
const YellowButton = ({ onClick, title, ...props }) => {
  return (
    <Button
      title={title}
      bgColor="bg-yellow-dark"
      fontSize="text-sm"
      onClick={onClick}
      className="text-black  rounded-3xl px-4 py-2 font-medium"
    />
  );
};
const WhiteButton = ({ onClick, title, ...props }) => {
  return (
    <Button
      title={title}
      bgColor="bg-gray-200"
      fontSize="text-xs"
      onClick={onClick}
      className="text-black w-full border rounded-3xl px-4 py-2 font-semibold"
    />
  );
};

export { Button, AddToCartButton , YellowButton, WhiteButton};
