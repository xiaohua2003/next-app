import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    size: number
}

const Input = ({size, ...rest}: InputProps) => {
    return ( <input {...rest} type="text" size={size} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  />);
}
 
export default Input;