import { useEffect, useState } from 'react';

const mobileScreenMax = 576;
const tabletScreenMax = 992;

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = (): void => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export const useDeviceScreenSize = () => {
  const { width } = useWindowSize();

  return {
    isMobile: width !== undefined && width < mobileScreenMax,
    isTablet:
      width !== undefined &&
      width >= mobileScreenMax &&
      width <= tabletScreenMax,
  };
};
