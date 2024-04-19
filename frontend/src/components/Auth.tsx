import { Link } from "react-router-dom";
import { useState } from "react";

import { SignUpInput } from "@rushikeshshelar/medium-common"
import LabelledInput from "./ui/LabelledInput"

const Auth = ({ type }: {
    type: "signin" | "signup"
}) => {

    const props = type === "signup" ? {
        header: "Create an Account",
        alternateheader: "Already have an Account?",
        linkText: "Login",
        path: "/signin",
        submit: "Sign Up"
    } : {
        header: "Log into your Account",
        alternateheader: "Don't have an Account?",
        linkText: "SignIn",
        path: "/signup",
        submit: "Login"
    }

    const [postInputs, setPostInputs] = useState<SignUpInput>({
        name: "",
        email: "",
        password: ""
    });

    console.log(postInputs)

    return (
        <div className="h-screen flex items-center justify-center m-auto">
            <div className="flex flex-col justify-center">
                <div className="mb-4">
                    <div className="text-3xl font-bold text-center">
                        {props.header}
                    </div>
                    <div className="text-md text-center text-gray-600">
                        {props.alternateheader}
                        <Link to={props.path} className="underline ml-1">{props.linkText}</Link>
                    </div>
                </div>
                <div className="flex flex-1 flex-col gap-3 w-full">
                    <LabelledInput label="Username" placeholder="Enter Your Username" onChange={(e) => {
                        setPostInputs((prev) => ({
                            ...prev,
                            name: e.target.value
                        }))
                    }} />
                    <LabelledInput label="Email" placeholder="Enter Your Email" onChange={(e) => {
                        setPostInputs((prev) => ({
                            ...prev,
                            email: e.target.value
                        }))
                    }} />
                    <LabelledInput label="Password" type="password" placeholder="Enter Your Passowrd" onChange={(e) => {
                        setPostInputs((prev) => ({
                            ...prev,
                            password: e.target.value
                        }))
                    }} />
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{props.submit}</button>

                </div>
            </div>
        </div>
    );
}

export default Auth;
