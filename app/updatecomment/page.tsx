import CommentForm from "../components/CommentForm";

import {getFormData, updateFormData} from "../_actions";

async function  UpdateComment() {
    const formData = await getFormData();
    const title = formData?.title as string
    const content = formData?.content as string
    console.log(formData)
    return ( <CommentForm action={updateFormData} title={title} content={content}/> );
}
 
export default UpdateComment;