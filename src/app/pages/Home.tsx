import { useNavigate } from "react-router";
import Component00Home from "../../imports/00Home/00Home";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div 
      className="size-full max-w-md mx-auto overflow-auto"
      style={{ maxHeight: '100vh' }}
      onClick={(e) => {
        const target = e.target as HTMLElement;
        
        // Check if "Add Moment" button was clicked
        const addMomentBtn = target.closest('[data-name="CTA - Add Moment"]');
        if (addMomentBtn) {
          e.preventDefault();
          // In a real app, this would open a modal or navigate to add moment page
          console.log("Add moment clicked");
          return;
        }
        
        // Check if "How patterns work?" link was clicked
        const patternsLink = target.closest('[data-name="CTA - What is a pattern?"]');
        if (patternsLink || target.textContent?.includes("How patterns work?")) {
          e.preventDefault();
          navigate("/patterns/1");
          return;
        }
        
        // Bottom navigation clicks
        if (target.textContent === "book" || target.textContent === "Story") {
          e.preventDefault();
          navigate("/story");
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
      <Component00Home />
    </div>
  );
}