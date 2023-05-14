'use client';
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import React, { FormEvent, useState } from "react";

const Contact = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        // perform a POST request or some other action with the form data
        const formData={title: title, content: content}
        const response = await fetch('/api/comment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
    }
    const handleTitleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    const handleContentChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value)
    }
    return (
    <div className="flex justify-center ">
    <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label>Title</label>
            <Input size={30} value={title} onChange={handleTitleChange}/>
        </div>
        <div>
            <label >Content</label>
            <Textarea rows={10} className="mt-2" value={content} onChange={handleContentChange}/>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
    </form>
    </div>
 );
}
 
export default Contact;