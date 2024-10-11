import { useRef, useEffect } from "react";

const VerticalCarousel = () => {
  const items = Array.from({ length: 10 }, (_, i) => i); // Array of indices [0-9]
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const items = Array.from(container.children); // Get all item elements
    const totalItems = items.length;

    // Function to reset scroll position to simulate infinite scroll
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;

      // If the user scrolls to the top
      if (scrollTop <= 0) {
        container.scrollTop = scrollHeight - 2 * clientHeight;
      }

      // If the user scrolls to the bottom
      else if (scrollTop + clientHeight >= scrollHeight) {
        container.scrollTop = clientHeight;
      }
    };

    // Add cloned items at the top and bottom to create the loop
    items.forEach((item) => {
      container.appendChild(item.cloneNode(true)); // Clone items at the bottom
      container.insertBefore(item.cloneNode(true), container.firstChild); // Clone items at the top
    });

    // Set initial scroll position to the middle of the container
    container.scrollTop = container.scrollHeight / 2;

    // Attach the scroll event listener
    container.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="h-screen overflow-y-scroll">
      <div className="flex flex-col items-center justify-center w-full">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-[300px] h-[300px] my-5 flex items-center justify-center bg-blue-500 text-white text-xl"
          >
            Item {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalCarousel;
