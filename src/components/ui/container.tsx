"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto max-w-[2520px] px-2 sm:px-4 md:px-6">
      {children}
    </div>
  );
};

export default Container;
