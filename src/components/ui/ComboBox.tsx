import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./button";
import React from "react";

type Props = {
    thisSession:any
    setThisSession:any

};

const ComboBox = (props: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{props.thisSession == true ? "This Session" : "Next Session"}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Session</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => props.setThisSession(true)}>This Session</DropdownMenuItem>
        <DropdownMenuItem onClick={() => props.setThisSession(false)}>Next Session</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ComboBox;
