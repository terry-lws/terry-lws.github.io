import { IconButton } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <IconButton
      aria-label="Scroll to top"
      icon={<FaArrowUp/>}
      onClick={handleClick}
      position="fixed"
      bottom="20px"
      right="20px"
      size="lg"
      colorScheme="teal"
      borderRadius="50%"
      opacity={isVisible ? "1" : "0"}
      transition="opacity 0.2s"
    />
  );
}

export default ScrollToTopButton;