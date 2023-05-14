
import Input from "./Input";
import Textarea from "./Textarea";
import { FormHTMLAttributes } from "react";

interface formProps extends FormHTMLAttributes<HTMLFormElement> {
  title: string,
  content: string,
}

const CommentForm = ({ title, content, action, ...rest}: formProps) => {
    return (
    <form action={action} {...rest}>
        <div className="mb-4">
            <label>Title</label>
            <Input name="title" size={30} defaultValue={title} required />
        </div>
        <div>
            <label >Content</label>
            <Textarea name="content" rows={10} className="mt-2" defaultValue={content} required />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
        <button type="button" className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Cancle</button>
    </form>
  
 );
}
 
export default CommentForm;