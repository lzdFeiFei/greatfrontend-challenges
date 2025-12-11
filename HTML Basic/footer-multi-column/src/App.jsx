import { cn } from "./lib/utils";

import Footer from "./components/Footer";

function App() {
  return (
    // <div
    //   className={cn(
    //     "min-h-[calc(100vh-32px)]",
    //     "bg-white md:py-[116px] lg:py-24",
    //     "shadow-[0px_4px_6px_-2px_rgba(0,0,0,0.05),0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]"
    //   )}
    // >
    //   <Footer></Footer>
    // </div>

    <main className="min-h-screen p-4">
      <div
        className={cn(
          "min-h-[calc(100vh-32px)] rounded-md bg-white",
          "shadow-sm md:shadow-md lg:shadow-lg",
          "flex items-center"
        )}
      >
        <section className={cn("w-full", "md:py-[116px] lg:py-[65px]")}>
          <Footer />
        </section>
      </div>
    </main>
  );
}

export default App;
