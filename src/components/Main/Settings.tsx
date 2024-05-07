import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";

type Props = {
  setUserTime: any;
  userTime: any;
  setFocusMode: any;
  focusMode: any;
};

const Settings = (props: Props) => {
  const handleMinutes = (event: any) => {
    const minutes = parseInt(event.target.value, 10);
    const totalSeconds = minutes * 60 + (props.userTime % 60);
    props.setUserTime(totalSeconds);
  };
  const handleSeconds = (event: any) => {
    const seconds = parseInt(event.target.value, 10);
    const totalSeconds = Math.floor(props.userTime / 60) * 60 + seconds;
    props.setUserTime(totalSeconds);
  };
  const handleMode = (e: any) => {
    if (e.target.checked == true) {
      props.setFocusMode(true);
    } else {
      props.setFocusMode(false);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>Settings</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            <Label>Minutes</Label>
            <Input
              type="number"
              value={Math.floor(props.userTime / 60)}
              onChange={handleMinutes}
            />
            <Label>Seconds</Label>
            <Input
              type="number"
              value={props.userTime % 60}
              onChange={handleSeconds}
            />
            <div className="mt-2 border-t-slate-500 border-t pt-2 items-center">
              <input
                className="pt-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                type="checkbox"
                id="focus"
                onChange={handleMode}
                checked={props.focusMode}
              />
              <Label htmlFor="focus" className="pl-1 text-md">Focus</Label>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Settings;
