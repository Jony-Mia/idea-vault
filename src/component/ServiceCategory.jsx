import Image_1 from "@/app/assets/image_1.png"
import Image_2 from "@/app/assets/image_2.png"
import Image_3 from "@/app/assets/image_3.png"
import Image_4 from "@/app/assets/image_4.png"
import Image_5 from "@/app/assets/image_5.png"
import { nunito } from "@/app/layout"
import Image from "next/image"


// const category ="Tech","Finance","Health","Judicial","Industrial"];
const category = [
    {   
        id:1,
        field: "Tech",
        icon: Image_1
    },
    {
        id:2,
        field: "Finance",
        icon: Image_2
    },
    {
        id:3,
        field: "Health",
        icon: Image_3
    },
    {
        id:4,
        field: "Judicial",
        icon: Image_4
    },
    {
        id:5,
        field: "Industrial",
        icon: Image_5
    },
]
const ServiceCategory = () => {
    return (
        <>
        <h2 className={`text-center font-bold text-3xl my-6 ${nunito.className}`}>
            Category
        </h2>
        <div className="grid items-center w-[90%] mx-auto grid-cols-5 gap-10 justify-center">
            <Box/>
        </div> 
        <br />
        <br />
        </>
    );
};

export const Box = () => {
    return (
        <>
            {
                category.map(({id, field, icon }) => {
                    return (
                            <div key={id} className="flex rounded-2xl  border-[#3b83f67e] border-2 w-50 h-50 flex-col justify-center items-center">
                                <div>
                                    <Image src={icon} height={"80"} alt={field} />
                                </div>
                                <div>
                                    <h2 className={` ${nunito.className} mt-3 font-bold text-2xl block`}>{field}</h2>
                                </div>
                            </div>
                    )
                })
            }
        </>
    )
}
export default ServiceCategory;