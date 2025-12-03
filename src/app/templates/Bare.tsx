import React from 'react';


export default function Bare ({
    className = '', 
    children,
}: {
  
    className?: string; 
    children: React.ReactNode;
}) {
    return (
      
        <section className="min-h-screen flex items-center justify-center">
          
            <div className={`w-full max-w-md p-4 space-y-8 text-2xl font-semibold text-center bg-white rounded-xl shadow-lg dark:bg-gray-800 ${className}`}>
                {children}
            </div>
        </section>
    );
}