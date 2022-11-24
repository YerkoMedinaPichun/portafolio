import { useEffect, useLayoutEffect, useState } from "react";

const canUseDOM = () =>
  !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );

const useSafeLayoutEffect = canUseDOM() ? useLayoutEffect : useEffect;

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);
  const mql = window.matchMedia(query);

  const handler = (e) => {
    setMatches(mql.matches);

    return () => mql.removeEventListener("change", handler);
  };

  useSafeLayoutEffect(() => {
    mql.addEventListener("change", handler);
  }, []);

  return matches;
};

export default useMediaQuery;
