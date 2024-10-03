

"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FC, useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

interface FormValues {

    password: string;
    confirmPassword: string;
}

export default function Home() {
    const [showPassword, setShowPassword] = useState(false);

    const validationSchema = Yup.object().shape({

        password: Yup.string()
            .min(8, "nuuts ug temdegtees deesh bh yostoi")
            .matches(/[A-Z]/, "tom useg orulah shardlagatai")
            .matches(/[a-z]/, "jijig useg oruulah shadlagatai")
            .matches(/\d/, "Too oruulah shardlagatai")
            .matches(/[\W_]/, "tusgai temdegt oruulah heregtei")
            .required("nuuts ug hiih shardlagatai"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password")], "nuuts ug taarahgui baina")
            .required("nuuts ugee davtan oruulah shardlagatai"),
    });

    return (
        <div className="flex flex-col items-center h-screen bg-slate-100">
            <div className="flex flex-col justify-center items-center mt-[100px] gap-6">
                <h1 className="font-semibold">Нууц үг сэргээх</h1>
                <div className="flex flex-col gap-3">
                    <div className="w-[339px] h-[352px] flex flex-col gap-4 items-center mt-6">
                        <Formik
                            initialValues={{
                                password: "",
                                confirmPassword: "",
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                console.log("Form Submitted", values);

                            }}
                        >
                            {({ values, handleChange, handleBlur, touched, errors }) => (
                                <Form>


                                    <Field
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        as={Input}
                                        placeholder="Шинэ нууц үг"
                                        className="rounded-2xl bg-white"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <ErrorMessage name="password" component="div" className="text-sm text-red-500" />

                                    <Field
                                        name="confirmPassword"
                                        type={showPassword ? "text" : "password"}
                                        as={Input}
                                        placeholder="Шинэ нууц үг давтах"
                                        className="rounded-2xl bg-white mt-4"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <ErrorMessage name="confirmPassword" component="div" className="text-sm text-red-500" />

                                    <div className="text-xs p-2 leading-5 text-gray-500">
                                        <li className={`${values.password === "" ? "text-gray-500" : /[A-Z]/.test(values.password) ? "text-green-500" : "text-red-500"}`}>
                                            Том үсэг оруулах шаардлагатай
                                        </li>
                                        <li className={`${values.password === "" ? "text-gray-500" : /[a-z]/.test(values.password) ? "text-green-500" : "text-red-500"}`}>
                                            Жижиг үсэг оруулах шаардлагатай
                                        </li>
                                        <li className={`${values.password === "" ? "text-gray-500" : /\d/.test(values.password) ? "text-green-500" : "text-red-500"}`}>
                                            Тоо оруулах шаардлагатай
                                        </li>
                                        <li className={`${values.password === "" ? "text-gray-500" : /[\W_]/.test(values.password) ? "text-green-500" : "text-red-500"}`}>
                                            Тусгай тэмдэгт оруулах шаардлагатай
                                        </li>
                                    </div>

                                    <Button type="submit" className="rounded-2xl bg-[#2563eb] text-sm text-white w-[330px]">
                                        Үүсгэх
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
}

