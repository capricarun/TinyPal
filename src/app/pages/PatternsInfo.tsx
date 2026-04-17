import { useNavigate } from "react-router";
import Component06PatternsFromStory from "../../imports/06PatternsFromStory-1/06PatternsFromStory-2-921";

export default function PatternsInfo() {
  const navigate = useNavigate();

  return (
    <div 
      className="size-full max-w-md mx-auto overflow-auto relative"
      style={{ maxHeight: '100vh' }}
      onClick={(e) => {
        const target = e.target as HTMLElement;
        
        // Check if back button was clicked
        if (target.textContent === "keyboard_arrow_left") {
          e.preventDefault();
          navigate(-1);
          return;
        }
        
        // Check if "Got it" button was clicked
        if (target.textContent?.includes("Got it")) {
          e.preventDefault();
          navigate(-1);
          return;
        }
      }}
    >
      <Component06PatternsFromStory />
    </div>
  );
}