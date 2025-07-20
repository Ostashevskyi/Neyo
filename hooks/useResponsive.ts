import { useMediaQuery } from "react-responsive"

export const useResponsive = () => {
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)'});
    const isMobile = useMediaQuery({ query: '(min-width: 320px) and (max-width: 767px)'});
    const isSmallDesktop = useMediaQuery({ query: '(min-width: 1024px) and (max-width: 1439px)'});
    const isDesktop = useMediaQuery({ query: '(min-width: 1440px)'});

    return {
        isDesktop,
        isMobile,
        isSmallDesktop,
        isTablet
    }
}