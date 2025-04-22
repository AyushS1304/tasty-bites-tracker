
/**
 * Utility functions for handling images
 */

// List of fallback food images
const fallbackFoodImages = [
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1014&q=80",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1010&q=80"
];

/**
 * Handles image loading errors and provides fallback images
 * @param event - The error event from the image
 * @returns void
 */
export const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>): void => {
  const img = event.currentTarget;
  const randomIndex = Math.floor(Math.random() * fallbackFoodImages.length);
  img.src = fallbackFoodImages[randomIndex];
  img.onerror = null; // Prevent infinite loop if fallback also fails
};

/**
 * Get a random fallback food image URL
 * @returns A random fallback food image URL
 */
export const getRandomFoodImage = (): string => {
  const randomIndex = Math.floor(Math.random() * fallbackFoodImages.length);
  return fallbackFoodImages[randomIndex];
};

/**
 * Check if a URL is valid
 * @param url - The URL to check
 * @returns Boolean indicating if the URL is valid
 */
export const isValidImageUrl = (url: string): boolean => {
  return url && url.startsWith('http');
};

/**
 * Get an image URL with fallback
 * @param imageUrl - The original image URL
 * @returns The original URL if valid, or a fallback image
 */
export const getImageWithFallback = (imageUrl: string): string => {
  return isValidImageUrl(imageUrl) ? imageUrl : getRandomFoodImage();
};
