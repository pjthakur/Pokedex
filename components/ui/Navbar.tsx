"use client";
export const Navbar = () => {
  return (
    <div className="w-full h-16 fixed flex items-center justify-center mt-0 z-[99] bg-[#1f1f1f] bg-opacity-0 backdrop-filter backdrop-blur-lg rounded-full transition-colors">
      <div>
        <h1 className="text-2xl font-bold text-[#803ee2] dark:text-[#a06dec]">
          Pokedex
        </h1>
      </div>
    </div>
  );
};
