"use client";

import { Form, Button, Input, Label, Modal, Surface, Separator, TextField, InputGroup, Checkbox } from "@heroui/react";
import Image from "next/image";
import IdeaVault from "@/app/assets/logo.png"
import google from "@/app/assets/google.png"
import Link from "next/link";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function WithForm() {
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData.entries())
    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
    await authClient.signUp.email({
      name: data.name,
      password: data.password,
      email: data.email
    })
  };

const continueWithGoogle =  async()=>{
    await authClient.signIn.social({
      provider: "google",
    });
}
  return (
    <>
      <br />
      <br />
      <br />

      <br />
      <br />
      <div className="flex mt-10 justify-center items-center">

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

          <TextField className="w-full" name="password" type={showPassword ? "text" : "password"}>
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
          </TextField>

          <TextField className="w-full" name="confirmPassword" type={showPassword ? "text" : "password"}>
            <Label>Confirm Password</Label>
            <Input placeholder="Confirm your password" />
          </TextField>
          <Checkbox id="basic-terms" onChange={()=>setShowPassword(!showPassword)}>
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            <Checkbox.Content>
              <Label htmlFor="basic-terms">Show Password</Label>
            </Checkbox.Content>
          </Checkbox>

          <Button slot="close" className={"w-full"}>Create Account</Button>
          <Link href="/login">Already have an account? <span className="text-blue-400">Login</span></Link>


          <div>
            <Button variant="outline" className="flex items-center w-full gap-2 mx-auto mt-5">
              <Image alt="Cntinue with Google" src={google} height={"20"} width={"20"} />
              Cntinue with Google
            </Button>
          </div>
        </Form>

        {/* <Separator/> */}
      </div>

      <br />
      <br />
    </>
  );
}