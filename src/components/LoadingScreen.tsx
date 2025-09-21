"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import Lottie from 'lottie-react';
import loadingAnimation from '@/assets/animations/Logo.json';

interface LoadingScreenProps {
  isLoading: boolean;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-opacity duration-1000",
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="w-full max-w-[12rem]">
        <Lottie animationData={loadingAnimation} loop={true} />
      </div>
    </div>
  );
};