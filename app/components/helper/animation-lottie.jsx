"use client"

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const AnimationLottie = ({ animationPath, width }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="w-full h-full bg-[#1a1443] rounded-lg animate-pulse" />;
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
    style: {
      width: '95%',
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;