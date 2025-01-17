import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../slices/cartSlice'; 

const ActionButton = ({ children, onClick, className = '' }) => (
  <button 
    onClick={onClick}
    className={`text-blue-600 hover:text-blue-800 text-xs font-medium transition-colors ${className}`}
  >
    {children}
  </button>
);

const ItemActions = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeFromCart({ id: item.id }));
  };

  const handleSaveForLater = () => {
    // Add your save for later logic
    console.log('Save for later:', item.id);
  };

  const handleCompare = () => {
    // Add your compare logic
    console.log('Compare:', item.id);
  };

  const handleShare = () => {
    // Add your share logic
    console.log('Share:', item.id);
  };

  const actions = [
    { label: 'Delete', id: 'delete', handler: handleDelete },
    { label: 'Save for later', id: 'save', handler: handleSaveForLater },
    { label: 'Compare with similar items', id: 'compare', handler: handleCompare },
    { label: 'Share', id: 'share', handler: handleShare }
  ];

  return (
    <div className="flex items-center gap-x-2">
      {actions.map((action, index) => (
        <React.Fragment key={action.id}>
          <ActionButton onClick={action.handler}>
            {action.label}
          </ActionButton>
          {index < actions.length - 1 && (
            <div className="h-3 w-px bg-gray-300" aria-hidden="true" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ItemActions;