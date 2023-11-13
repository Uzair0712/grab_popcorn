import { useEffect } from "react";

export function useKey(key, fun) {
  useEffect(
    function () {
      function handler(e) {
        if (e.key === key) fun();
      }
      document.addEventListener("keydown", handler);

      return function () {
        document.removeEventListener("keydown", handler);
      };
    },
    [fun]
  );
}
