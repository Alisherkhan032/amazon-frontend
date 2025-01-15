// Function to calculate the discount percentage
export function calculateDiscount(oldPrice, newPrice) {
    if (oldPrice && newPrice) {
      const discount = ((oldPrice - newPrice) / oldPrice) * 100;
      return discount.toFixed(2); 
    }
    return 0; 
  }