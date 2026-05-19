"use client";
import { Check } from "lucide-react";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import IdeaVault from "@/app/assets/logo.png"
import Image from "next/image";

export default function Login() {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries())
    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };

  return (
    <div className="flex h-screen justify-center items-center">

      <Form className="flex shadow shadow-blue-300 p-5 rounded-2xl mx-auto  w-96 flex-col gap-4" onSubmit={onSubmit}>
        <div className="flex justify-center items-center flex-col" >
          <Image alt="Idea Valult Logo" src={IdeaVault} height={"100"} width={"100"} />
          <h2 className="text-2xl font-bold"> <span className="font-bold text-blue-400">Idea</span>  Vault</h2>
        </div>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
          <FieldError />
        </TextField>

        <div className="flex justify-center gap-2">
          <Button type="submit" className={"w-full font-bold"}>
            Login
          </Button>
        </div>
      </Form>
    </div>

  );
}