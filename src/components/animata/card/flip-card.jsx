import { cn } from "@/lib/utils";
import Image from "next/image";

export default function FlipCard({
    backImg,
    image,
    title,
    description,
    subtitle,
    rotate = "y",
    className,
    ...props
}) {
    const rotationClass = {
        x: ["group-hover:[transform:rotateX(180deg)]", "[transform:rotateX(180deg)]"],
        y: ["group-hover:[transform:rotateY(180deg)]", "[transform:rotateY(180deg)]"],
    };
    const self = rotationClass[rotate];

    return (
        <div className={cn("group h-72 w-56 [perspective:1000px]", className)} {...props}>
            <div
                className={cn(
                    "relative h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]",
                    self[0]
                )}
            >
                {/* Front */}
                <div className="absolute h-full w-full [backface-visibility:hidden] flex flex-col items-center justify-center border-[1px] border-[#BD9966] rounded-full">
                    <Image
                        width={40} height={40}
                        src={image}
                        alt="Wi-Fi"
                        className="" />
                    <div className="text-white text-lg mt-4">{title}</div>
                </div>

                {/* Back */}
                <div
                    className={cn(
                        "absolute h-full w-full p-4 text-slate-200 [backface-visibility:hidden] border-[1px] border-[#BD9966] rounded-full bg-no-repeat bg-cover bg-center bg-[#4b5563e6] bg-blend-multiply",
                        self[1]
                    )}
                    style={{ backgroundImage: `url(${backImg})` }}
                >
                    <div className="flex min-h-full flex-col gap-2 p-4">
                        <h1 className="text-lg text-white">{subtitle}</h1>
                        <p className="mt-1 border-t border-t-gray-200 py-4 text-xs font-medium text-clip text-gray-100">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
