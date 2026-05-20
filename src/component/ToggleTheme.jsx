"use client";

import Moon from "@/app/assets/moon.png"
import Sun from "@/app/assets/sun.png"
import { Button } from "@heroui/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";

export default function ToggleTheme() {
    let [visible, setVisible] = useState(false)
    let {theme, setTheme} = useTheme()
    const hider = ()=>{
        setTheme(visible===false?"dark":"light")
        setVisible(!visible)
    }
    const color = "#3B82F6"
    return (
        <>
            <Button  hidden={visible ===false ? true : false} variant="outline" onClick={hider} className={`hover:bg-[#142338]`} isIconOnly>
                <Image src={Moon} alt="moon"  height={"20"}/>
            </Button>
            <Button  hidden={visible ===true ? true : false} onClick={hider} variant="outline" className={`hover:bg-[#142338]`} isIconOnly>
                {/* <ButtonGroup.Separator /> */}
                <Image src={Sun} alt="Sun" height={"20"} />
            </Button>
        </>
    );
}

