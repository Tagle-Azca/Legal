//Mercantil
import React, { use, useEffect, useState } from "react";

const Mercantil = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerHeight < 768);
    };
  });
};
export default Mercantil;