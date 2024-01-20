import React from "react";
import { Toaster } from "react-hot-toast";
export default function HostToast() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
