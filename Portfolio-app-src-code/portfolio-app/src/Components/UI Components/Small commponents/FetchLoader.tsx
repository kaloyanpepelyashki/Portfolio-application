import { ChevronRight } from "@mui/icons-material";
import { useState, useEffect } from "react";

const FetchLoader: React.FC = () => {
  const [loadingAnim, setLoadingAnim] = useState("⠙");
  const [dotAnim, setDotAnim] = useState(".  ");

  useEffect(() => {
    const chars = ["⠙", "⠘", "⠰", "⠴", "⠤", "⠦", "⠆", "⠃", "⠋", "⠉"];
    let x = 0;

    const interval = setInterval(() => {
      setLoadingAnim(chars[x % chars.length]); // Update state
      x++;
    }, 100); // Adjust speed if needed

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    const chars = [".. ", "...", ".. ", ".  "];
    let x = 0;

    const interval = setInterval(() => {
      setDotAnim(chars[x % chars.length]);
      x++;
    }, 380);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fetch-loader-wrapper">
      <p className="fetch-loader-text fetch-loader-element">
        <ChevronRight
          className="fetch-loader-icon"
          color="inherit"
          fontSize="large"
        />{" "}
        Fetching data
      </p>
      <div className="fetch-loader-dot-anim fetch-loader-element">
        {dotAnim}
      </div>
      <div className="fetch-loader-loading-anim fetch-loader-element">
        {loadingAnim}
      </div>
    </div>
  );
};

export default FetchLoader;
