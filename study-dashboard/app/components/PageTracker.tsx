"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackActivity } from "../lib/presence";

export default function PageTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    let folderName = "Dashboard";
    if (pathname.includes("/mis")) folderName = "MIS Folder";
    else if (pathname.includes("/digital-empowerment")) folderName = "Digital Empowerment Folder";
    
    if (pathname.includes("/notes")) folderName += " (PDF Notes)";
    else if (pathname.includes("/questions")) folderName += " (Important Questions)";

    trackActivity(`Viewing: ${folderName}`);
  }, [pathname]);

  return null;
}
