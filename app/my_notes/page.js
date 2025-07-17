'use client'
import React, { use, useState } from 'react'
import { useEffect } from 'react'
import Save_notes from '../components/Save_notes'
import { useTheme } from '../context/themeContext'
import Image from 'next/image'


const Page = () => {

    const { isDarkMode } = useTheme();
    const [savednote, setSavedNotes] = useState([])
    const [showEdit, setShowEdit] = useState(false)
    const [editNote, setEditNote] = useState({ title: "", title_link: "", note: "" })

    useEffect(() => {

        if (typeof window != 'undefined') {
            const existingNotes = JSON.parse(localStorage.getItem('all_notes')) || [];

            setSavedNotes(existingNotes)
        }

    }, [])

    const refreshNotes = () => {
        const stored = JSON.parse(localStorage.getItem('all_notes')) || [];
        setSavedNotes(stored);
    };

    useEffect(() => {
        refreshNotes();
    }, []);


    const deleteNote = (index) => {



        if (typeof window != 'undefined') {
            const existingNotes = JSON.parse(localStorage.getItem('all_notes'));
            const updatedNotes = [...existingNotes]
            updatedNotes.splice(index, 1)

            setSavedNotes(updatedNotes)
            localStorage.setItem('all_notes', JSON.stringify(updatedNotes))

        }
    }

    const editNotes = (index) => {


        setShowEdit(true)
        savednote.forEach((e, i) => {
            if (index == i) {
                setEditNote({ title: e.title, title_link: e.link, note: e.note })
                console.log(editNote)
                console.log(e.note)
            }
        })

        if (typeof window != 'undefined') {
            const existingNotes = JSON.parse(localStorage.getItem('all_notes'));
            const updatedNotes = [...existingNotes]
            updatedNotes.splice(index, 1)

            setSavedNotes(updatedNotes)
            localStorage.setItem('all_notes', JSON.stringify(updatedNotes))

        }

    }







    return (
        <div className={`min-h-[80vh] max-h-fit flex justify-center items-center py-15 transition-colors duration-500 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white'}`}>
            <div className="notes md:w-[60%] sm:w-[80%] w-[90%]">

                <ul className=''>
                    <h1 className={`text-2xl font-bold flex justify-center items-center`}>YOUR ALL NOTES</h1>
                    {savednote.length > 0 ? savednote.map((note, index) => {
                        return (
                            <li key={index} className={`p-3 m-3 flex ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`} >
                                <div className='flex-4/5'>
                                    <h1 className='text-blue-700 hover:text-blue-800 text-xl font-bold'><a href={note.link}>{note.title}</a></h1>
                                    <p className='text-gray-400 pb-2 text-sm'>{note.date}</p>

                                    <p className='text-md'>{note.note}</p>

                                </div>
                                <div className="modification flex flex-1/5 justify-center items-center">
                                    <Image src="/edit.png" alt="edit_Image" className='w-7 h-7 cursor-pointer' width={30} height={30} onClick={() => editNotes(index)} />
                                    <Image src="/delete.png" alt="delete_Image" className='w-7 h-7 cursor-pointer' width={30} height={30} onClick={() => deleteNote(index)} />
                                </div>
                            </li>
                        )
                    }) : <h1 className='text-2xl font-bold flex justify-center items-center'>NO NOTES</h1>
                    }



                </ul>

            </div>

            {showEdit && <Save_notes prop={editNote} onClose={() => setShowEdit(false)} onRefresh={refreshNotes} />}


        </div>
    )
}

export default Page
