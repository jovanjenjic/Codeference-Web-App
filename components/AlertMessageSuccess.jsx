import React from "react";

function AlertMessageSuccess() {
  return (
    <div className="lg:absolute top-8 lg:-left-1 bg-green-100 rounded-md py-3 px-1 flex mb-4 lg:mb-0">
      <svg
        className="stroke-2 stroke-current text-green-600 h-6 w-6  mr-1 flex-shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" stroke="none" />
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12l2 2 4-4" />
      </svg>

      <div className="text-green-700 m-auto">
        <div className="font-bold text-l px-2">
          Čestitamo, uspešno ste se prijavili. Uskoro će vas neko kontaktirati.
        </div>
      </div>
    </div>
  );
}

export default AlertMessageSuccess;
