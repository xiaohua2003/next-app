interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {className?: string}

const Textarea = ({className, ...props}: TextAreaProps) => {
    return (<textarea {...props} className={`${className} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}></textarea>);
}
 
export default Textarea;