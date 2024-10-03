
"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FC, useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";

interface FormValues {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const Page: FC = () => {
    const [showPassword, setShowPassword] = useState(false);

    const validationSchema = Yup.object().shape({
        username: Yup.string().required("Hereglegchiin ner shaardlagatai"),
        email: Yup.string()
            .email("email hayag buruu baina")
            .required("email hayag oruulah shardlagatai"),
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
        <div className="m-auto h-[806px] w-full flex flex-col items-center bg-[#f7f7f8]">
            <h1 className="mt-[100px] font-semibold text-2xl">Бүртгүүлэх</h1>
            <div className="w-[339px] h-[352px] flex flex-col gap-4 items-center mt-6">
                <Formik
                    initialValues={{
                        username: "",
                        email: "",
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
                                name="username"
                                as={Input}
                                placeholder="Name"
                                className="rounded-2xl bg-white"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.username && errors.username && (
                                <div className="text-sm text-red-500">{errors.username}</div>
                            )}
                            <Field
                                name="email"
                                type="email"
                                as={Input}
                                placeholder="E-mail"
                                className="rounded-2xl bg-white"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.email && errors.email && (
                                <div className="text-sm text-red-500">{errors.email}</div>
                            )}
                            <Field
                                name="password"
                                type={showPassword ? "text" : "password"}
                                as={Input}
                                placeholder="Password"
                                className="rounded-2xl bg-white"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.password && errors.password && (
                                <div className="text-sm text-red-500">{errors.password}</div>
                            )}
                            <Field
                                name="confirmPassword"
                                type={showPassword ? "text" : "password"}
                                as={Input}
                                placeholder="Re-password"
                                className="rounded-2xl bg-white"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.confirmPassword && errors.confirmPassword && (
                                <div className="text-sm text-red-500">{errors.confirmPassword}</div>
                            )}

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
                <Button type="button" className="rounded-2xl border border-[#2563eb] text-sm text-[#2563eb] bg-white w-[330px] mt-6">
                    Нэвтрэх
                </Button>
            </div>
        </div>
    );
};

export default Page;
