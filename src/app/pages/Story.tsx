import { useNavigate } from "react-router";
import Component05Story from "../../imports/05Story/05Story";

export default function Story() {
  const navigate = useNavigate();

  return (
    <div 
      className="size-full max-w-md mx-auto overflow-auto relative"
      style={{ maxHeight: '100vh' }}
      onClick={(e) => {
        const target = e.target as HTMLElement;
        
        // Check if "Add a Moment" button was clicked
        if (target.textContent?.includes("Add a Moment")) {
          e.preventDefault();
          navigate("/moment-entry");
          return;
        }
        
        // Check if "See all moments" link was clicked
        if (target.textContent?.includes("See all moments")) {
          e.preventDefault();
          // Could navigate to moments list in the future
          return;
        }
        
        // Check if "What's a Pattern?" link was clicked
        const patternsLink = target.closest('[data-name="CTA - What is a pattern?"]');
        if (patternsLink || target.textContent?.includes("What's a Pattern") || target.textContent?.includes("What is a Pattern")) {
          e.preventDefault();
          navigate("/story/patterns-info");
          return;
        }
        
        // Bottom navigation clicks
        if (target.textContent === "home" || target.textContent === "Home") {
          e.preventDefault();
          navigate("/");
          return;
        }
        
        if (target.textContent === "sentiment_satisfied" || target.textContent === "Ask Tinu") {
          e.preventDefault();
          // Could navigate to Ask Tinu in the future
          return;
        }
        
        if (target.textContent === "notifications" || target.textContent === "Notification") {
          e.preventDefault();
          // Could navigate to notifications in the future
          return;
        }
        
        if (target.textContent === "account_circle" || target.textContent === "Profile") {
          e.preventDefault();
          // Could navigate to profile in the future
          return;
        }
      }}
    >
      <Component05Story />
    </div>
  );
}