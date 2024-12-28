import { useEffect } from "react";

export function useOnHoverOutside(
  ref: React.RefObject<HTMLElement>,
  handler: (event: MouseEvent) => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      // Check if the hover event is outside the ref's element
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    // Add the mouseover listener
    document.addEventListener("mouseover", listener);

    // Clean up the listener on unmount
    return () => {
      document.removeEventListener("mouseover", listener);
    };
  }, [ref, handler]);
}
