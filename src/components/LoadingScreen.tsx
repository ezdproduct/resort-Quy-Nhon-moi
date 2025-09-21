"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface LoadingScreenProps {
  isLoading: boolean;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A3E54] transition-opacity duration-1000",
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="flex items-center space-x-3 animate-pulse">
        <img
          src="/icons/Isolation_Mode.svg"
          alt="Resort Logo"
          className="h-16 w-16"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
        <div className="font-sans text-white">
          <span className="block text-xl font-semibold tracking-wider">QUY NHON SEA</span>
          <span className="block text-lg tracking-widest">RESORT</span>
        </div>
      </div>
    </div>
  );
};