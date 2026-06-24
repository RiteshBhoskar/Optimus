"use client"
import { CornerDownLeftIcon, FileCodeIcon, RefreshCwIcon } from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { useState } from "react"

const Example = () => {
  const [code , setCode ]= useState("");

  const sendCode = async () => {
    try {
      const response = await fetch("http://localhost:8080/", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          code
        }),
      }) 

      if (response.ok) {
        console.log("working")
      }
    } catch(error) {
      console.log(error)
    }
  }
  return ( 
    <InputGroup className="w-full invert min-h-[300px] max-w-sm bg-background">
      <InputGroupTextarea 
        className="h-full"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="console.log('Hello, world!');" />
      <InputGroupAddon align="block-end" className="border-t">
        <InputGroupText>Line 1, Column 1</InputGroupText>
        <InputGroupButton className="ml-auto" size="sm" variant="default"
        onClick={sendCode}>
          Run
          <CornerDownLeftIcon />
        </InputGroupButton>
      </InputGroupAddon>
      <InputGroupAddon align="block-start" className="border-b">
        <InputGroupText className="font-medium font-mono">
          <FileCodeIcon />
          script.js
        </InputGroupText>
        <InputGroupButton onClick={() => setCode("")} className="ml-auto"
        size="icon-xs"
        >
          <RefreshCwIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}
export default Example
