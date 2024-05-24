import { Bell, Check, CircleX } from "lucide-react";
import React from "react";

const NotificationAdmin = () => {
  return (
    <div className="m-5 ">
      <h1 className="text-left font-semibold text-2xl flex gap-3 items-center">
        Notifications <Bell />
      </h1>
      <div className="h-16 flex justify-between items-center rounded-lg gap-8 mt-4 bg-slate-200">
        <p className="ml-4">Notification recieved</p>
        <div className="flex gap-6 mr-8">
          <button className="flex w-28 p-1 hover:bg-green-500 bg-green-400 text-slate-900 justify-around items-center rounded-2xl">
            Accept <Check />
          </button>
          <button className="flex w-28 p-1 bg-red-300 hover:bg-red-500 justify-around items-center rounded-2xl">
            Reject <CircleX />
          </button>
        </div>
      </div>
      <hr className="bg-slate-400 h-[2px] mt-6" />
    </div>
  );
};

export default NotificationAdmin;
