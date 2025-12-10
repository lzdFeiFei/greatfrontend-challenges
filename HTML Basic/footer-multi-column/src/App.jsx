import { cn } from "./lib/utils";

function App() {
  return (
    <div
      className={cn(
        "h-[calc(100vh-32px)] w-[calc(100vw-32px)]",
        "m-4 bg-white",
        "shadow-[0px_4px_6px_-2px_rgba(0,0,0,0.05),0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]"
      )}
    >
      <footer className={cn("text-lg", "text-black")}>123</footer>
    </div>
  );
}

export default App;
