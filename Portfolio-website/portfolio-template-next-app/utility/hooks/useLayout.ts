import { useState, useEffect } from "react";

function useLayout() {
  const [layout, setLayout] = useState<"MOBILE" | "MEDIUM" | "DESKTOP">(
    "DESKTOP"
  );
  const handleLayout = () => {
    // ** If layout is horizontal & screen size is equals to or below 1200
    if (
      (layout === "MEDIUM" || layout === "DESKTOP") &&
      window.innerWidth <= 640
    ) {
      setLayout("MOBILE");
    } else if (
      (layout === "MOBILE" || layout === "DESKTOP") &&
      window.innerWidth >= 768
    ) {
      setLayout("MEDIUM");
    }
    // ** If lastLayout is horizontal & screen size is equals to or above 1199
    else if (
      (layout === "MOBILE" || layout === "MEDIUM") &&
      window.innerWidth >= 1024
    ) {
      setLayout("DESKTOP");
    }
  };

  // ** ComponentDidMount
  useEffect(() => {
    handleLayout();
  }, []);

  useEffect(() => {
    // ** Window Resize Event
    if (window !== undefined) window.addEventListener("resize", handleLayout);
  }, [layout, setLayout]);

  return [layout, setLayout];
}

export default useLayout;
