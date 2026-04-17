import { useNavigate } from "react-router";
import Component04PatternsFromStory from "../../imports/04PatternsFromStory/04PatternsFromStory";

export default function Pattern4() {
  const navigate = useNavigate();

  return (
    <div 
      className="size-full max-w-md mx-auto overflow-auto relative"
      style={{ maxHeight: '100vh' }}
      onClick={(e) => {
        const target = e.target as HTMLElement;
        
        // Check if "Start Adding Moments" button was clicked
        if (target.textContent?.includes("Start Adding Moments")) {
          e.preventDefault();
          navigate("/");
          return;
        }
        
        // Check if close icon was clicked
        if (target.textContent === "close") {
          e.preventDefault();
          navigate("/");
          return;
        }
      }}
    >
      <Component04PatternsFromStory />
    </div>
  );
}