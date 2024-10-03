// "use client"

// import React, { useRef } from "react";
// import Image from "next/image";

// export default function Home() {
//     const inputs = useRef<HTMLInputElement[]>([]); 

//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
//         const value = event.target.value;


//         if (value.length === 1 && index < inputs.current.length - 1) {
//             inputs.current[index + 1].focus();
//         }


//         if (value.length === 0 && index > 0) {
//             inputs.current[index - 1].focus();
//         }
//     };

//     return (
//         <div className="flex flex-col items-center justify-center h-screen bg-slate-100">
//             <div className="relative h-[96px] w-[96px] mb-4">
//                 <Image
//                     src="/Mail.png"
//                     alt="email"
//                     layout="fill"
//                     objectFit="contain"
//                 />
//             </div>
//             <h1 className="text-lg font-semibold">Баталгаажуулах</h1>
//             <p className="text-center mb-4">“mujo@nest.edu.mn” хаягт илгээсэн баталгаажуулах кодыг оруулна уу</p>
//             <div className="flex justify-center space-x-2">
//                 {[...Array(4)].map((_, index) => (
//                     <input
//                         key={index}
//                         type="text"
//                         maxLength={1}
//                         className="w-12 h-12 text-center text-2xl border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//                         onChange={(e) => handleChange(e, index)}
//                         ref={(el) => (inputs.current[index] = el!)}
//                     />
//                 ))}
//                 <p>Дахин илгээх (30)</p>
//             </div>
//         </div>
//     );
// }

"use client"

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
    const inputs = useRef<HTMLInputElement[]>([]);
    const [timer, setTimer] = useState<number>(30);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = event.target.value;

        if (value.length === 1 && index < inputs.current.length - 1) {
            inputs.current[index + 1].focus();
        }

        if (value.length === 0 && index > 0) {
            inputs.current[index - 1].focus();
        }
    };

    const handleResendCode = () => {
        // Simulate code resending logic here (e.g., API call)
        console.log("Resending OTP code...");

        // Reset timer
        setTimer(30);
        setIsButtonDisabled(true);
    };

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined;

        if (isButtonDisabled && timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else if (timer === 0) {
            setIsButtonDisabled(false);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isButtonDisabled, timer]);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="relative h-[96px] w-[96px] mb-4">
                <Image
                    src="/Mail.png"
                    alt="email"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <h1 className="text-lg font-semibold">Баталгаажуулах</h1>
            <p className="text-center mb-4">“mujo@nest.edu.mn” хаягт илгээсэн баталгаажуулах кодыг оруулна уу</p>
            <div className="flex justify-center space-x-2 mb-4">
                {[...Array(4)].map((_, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength={1}
                        className="w-12 h-12 text-center text-2xl border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        onChange={(e) => handleChange(e, index)}
                        ref={(el) => { inputs.current[index] = el! }}
                    />
                ))}
            </div>
            <button
                onClick={handleResendCode}
                disabled={isButtonDisabled}
                className={`underline underline-offset-1 text-gray-500`}
            >
                {isButtonDisabled ? ` Дахин илгээх (${timer})` : "Дахин илгээх"}
            </button>
        </div>
    );
}
