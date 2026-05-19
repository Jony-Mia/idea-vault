"use client";

import { Envelope } from "lucide-react"
import { Form, Button, Input, Label, Modal, Surface,Separator, TextField } from "@heroui/react";
import Image from "next/image";
import IdeaVault from "@/app/assets/logo.png"

export default function WithForm() {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries())
    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };
  return (
    <div className="flex mt-10 h-screen justify-center items-center">

      <Form className="flex shadow shadow-blue-300 p-5 rounded-2xl mx-auto  w-126 flex-col gap-4" onSubmit={onSubmit}>
        {/* <Button variant="secondary">Open Contact Form</Button> */}

        <div className="flex justify-center items-center flex-col" >
          <Image alt="Idea Valult Logo" src={IdeaVault} height={"80"} width={"80"} />
          <h2 className="text-2xl font-bold"> <span className="font-bold text-blue-400">Idea</span>  Vault</h2>
        </div>

        <TextField className="w-full" name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
        </TextField>
        <TextField className="w-full" name="email" type="email">
          <Label>Email</Label>
          <Input placeholder="Enter your email" />
        </TextField>
        <TextField className="w-full" name="phone" type="tel">
          <Label>Phone</Label>
          <Input placeholder="Enter your phone number" />
        </TextField>
        <TextField className="w-full" name="company">
          <Label>Company</Label>
          <Input placeholder="Enter your company name" />
        </TextField>
        <TextField className="w-full" name="message">
          <Label>Message</Label>
          <Input placeholder="Enter your message" />
        </TextField>

        <Button slot="close">Send Message</Button>
      </Form>

      <Separator/>
    </div>
  );
}