import CommentForm from "../components/CommentForm";

import { handleForm } from "../_actions";
const CreateForm = () => {
    return ( <CommentForm action={handleForm} title='' content=''/> );
}
 
export default CreateForm;