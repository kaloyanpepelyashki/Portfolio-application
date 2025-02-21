import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

const Loader: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //Sets the loader size according to the screen width.
  const loaderSize: string = screenWidth <= 2000 ? "4rem" : "8rem";

  return (
    <div className="loader-holder">
      <CircularProgress
        size={loaderSize}
        sx={{ color: "#fcec3b", marginRight: "8px" }}
      />
      <h4 className="loader-heading">Loading...</h4>
    </div>
  );
};

export default Loader;
