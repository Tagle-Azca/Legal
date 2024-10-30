//Mercantil
import React, { use, useEffect, useState } from "react";

const Telefono = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerHeight < 768);
    };
  });
};