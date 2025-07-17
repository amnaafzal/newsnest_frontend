import React, { useState } from 'react'
import { useRef } from 'react'
import { useTheme } from '../context/themeContext'
import { usePathname, useRouter } from 'next/navigation';



const Save_notes = ({ prop, onClose, onRefresh}) => {


    const notesRef = useRef(null)
    const textAreaRef = useRef(null)
    const { isDarkMode } = useTheme()
    const pathname = usePathname();
    const router = useRouter();



    const addNotes = () => {


        if (textAreaRef.current.value.length > 0) {
            if (typeof window !== 'undefined') {

                const existingNotes = JSON.parse(localStorage.getItem('all_notes')) || [];

                const note = {
                    title: prop.title,
                    link: prop.title_link,
                    note: textAreaRef.current.value,
                    date: new Date().toLocaleString()
                };


                existingNotes.push(note)


                const savedNote = localStorage.setItem("all_notes", JSON.stringify(existingNotes))
                if (pathname === '/my_notes' && typeof onRefresh === 'function') {
                    onRefresh();
                }

                onClose()
            }


        }

        else {
            alert("Note can't be empty!")
        }
    }


    const cancelEdit = () => {
        if (prop.note) {
            if (typeof window !== 'undefined') {

                const existingNotes = JSON.parse(localStorage.getItem('all_notes')) || [];

                const note = {
                    title: prop.title,
                    link: prop.title_link,
                    note: prop.note,
                    date: new Date().toLocaleString()
                };


                existingNotes.push(note)


                const savedNote = localStorage.setItem("all_notes", JSON.stringify(existingNotes))
                if (pathname === '/my_notes' && typeof onRefresh === 'function') {
                    onRefresh();
                }

                onClose()


            }
        }
        else {

            onClose()

        }


    }


    return (
        <div>

            <div className={`absolute top-0 bottom-0 my-auto  left-0 right-0  mx-auto flex flex-col justify-center items-center md:w-[40%] w-[80%] h-[35%]  gap-4 border p-4 transition-colors duration-500 ${isDarkMode ? 'bg-gray-800 border border-gray-400 text-gray-400' : 'bg-white'}`}>
                <h1 className="text-xl font-bold "><a href={prop.title_link} target="_blank" ref={notesRef}>{prop.title}</a></h1>
                <textarea name="" id="" defaultValue={prop.note} className="border border-gray-500 w-[80%] h-[50%] outline-none p-3" placeholder="ADD NOTES" ref={textAreaRef}></textarea>

                <div className="btn flex gap-3 self-end">
                    <button className="cancel bg-gray-900 text-white py-2 px-5 cursor-pointer hover:bg-black" onClick={cancelEdit}>Cancel</button>
                    <button className="add bg-gray-900 text-white py-2 px-6 cursor-pointer hover:bg-black " onClick={addNotes}>Add</button>
                </div>


            </div>
        </div>
    )
}

export default Save_notes
