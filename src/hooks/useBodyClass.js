import { useEffect } from "react";

export default function useBodyClass(cls) {
  useEffect(() => {
    const prev = document.body.className;
    document.body.className = cls || "";
    return () => { document.body.className = prev; };
  }, [cls]);
}
