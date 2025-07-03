import { useState, useEffect } from "react";

export function useUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userString = localStorage.getItem("user");
    if (userString) {
      try {
        setUser(JSON.parse(userString));
      } catch (error) {
        console.error(
          "Gagal mem-parsing data pengguna dari localStorage",
          error
        );
        setUser(null);
      }
    }
  }, []);

  return user;
}
