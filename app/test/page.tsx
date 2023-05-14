
import Input from "../components/Input";
import Textarea from "../components/Textarea";

import { handleForm } from "../_actions";

const Test = () => {
    return (
   
    <form action={handleForm}>
        <div className="mb-4">
            <label>Title</label>
            <Input name="title" size={30} defaultValue="hello" />
        </div>
        <div>
            <label >Content</label>
            <Textarea name="content" rows={10} className="mt-2" defaultValue="hhh" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
    </form>

 );
}
 
export default Test;