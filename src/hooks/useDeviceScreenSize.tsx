import { useState, useEffect } from 'react';

export const mobileScreenMax = 576;
export const sm = 768;
export const tabletScreenMax = 992;
export const lg = 1100;
export const xl = 1680;

interface WindowSizeProps {
  width: number | undefined;
  height: number | undefined;
}

interface DeviceScreenProps {
  isMobile: boolean;
  isTablet: boolean;
}

export const useWindowSize = (): WindowSizeProps => {
  const [windowSize, setWindowSize] = useState<WindowSizeProps>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize(): void {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return windowSize;
};

export const useDeviceScreenSize = (): DeviceScreenProps => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const size = useWindowSize();
  const windowWidth = size.width;

  useEffect(() => {
    if (windowWidth !== undefined && windowWidth < mobileScreenMax) {
      setIsMobile(true);
      setIsTablet(false);
    } else if (
      windowWidth !== undefined &&
      windowWidth < tabletScreenMax &&
      windowWidth > mobileScreenMax
    ) {
      setIsMobile(false);
      setIsTablet(true);
    } else if (windowWidth !== undefined && windowWidth > tabletScreenMax) {
      setIsMobile(false);
      setIsTablet(false);
    }
  }, [windowWidth]);

  return {
    isMobile,
    isTablet,
  };
};
