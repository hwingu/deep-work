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
            <input
              type="checkbox"
              id="focus"
              onChange={handleMode}
              checked={props.focusMode}
            />
            <Label htmlFor="focus">Focus</Label>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Settings;
