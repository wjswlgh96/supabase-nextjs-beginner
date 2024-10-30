"use client";

import { useState } from "react";

export default function EmptyNote() {
  return (
    <div className="w-2/3 p-2 flex flex-col items-center justify-center gap-2 absolute top-0 bottom-0 right-0 font-bold text-xl">
      새로운 노트를 만들어 주세요 😉
    </div>
  );
}
