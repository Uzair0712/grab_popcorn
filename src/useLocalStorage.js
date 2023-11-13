import { useEffect, useState } from "react";

export function useLocalStorage(initialValue, key) {
  const [watched, setWatched] = useState(function () {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : initialValue;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(watched));
    },
    [watched, key]
  );

  return [watched, setWatched];
}
