'use client'

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Save_notes from "./components/Save_notes";
import { useTheme } from "./context/themeContext";

export default function Home() {


  const modalRef = useRef(null)
  const {isDarkMode} =useTheme()


  const [modalTitle, setModalTitle] = useState('')
  const [count, setCount] = useState('')
  const [modalContent, setModalContent] = useState([])
  const [noteClicked, setNoteClicked] = useState(false)
  const [noteData, setNoteData] = useState({ title: "", title_link: "" })



  const close_modal = () => {

    if (modalRef.current) {
      modalRef.current.classList.add('hidden')
      modalRef.current.classList.remove('opacity-100', 'scale-100');
      modalRef.current.classList.add('opacity-0', 'pointer-events-none', 'scale-95');
    }
  }

  const showModal = async (e) => {

    if (modalRef.current) {
      modalRef.current.classList.remove('hidden')
      modalRef.current.classList.remove('opacity-0', 'pointer-events-none', 'scale-95');
      modalRef.current.classList.add('opacity-100', 'scale-100');

      const source = e.target.value;

      const data = await fetch(`https://45e9509c-2d64-40e8-a31a-0d05dfec076a-00-2xfojhaiin0a8.pike.replit.dev/${source}`)
      const response = await data.json()
      const news = response.data

      if (source == "dawn") {
        setModalTitle("THE DAWN")
      }
      else if (source == "the_international_news") {
        setModalTitle("THE INTERNATIONAL NEWS")
      }
      else if (source == "tribune") {
        setModalTitle("THE TRIBUNE NEWS")
      }
      else {
        setModalTitle("DAILY TIMES")
      }

      setCount(response.count)

      setModalContent(news)




    }
  }







  return (
    <div className={`py-50 relative flex justify-center items-center transition-colors duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} `}>
      <div className='cards flex justify-center items-center gap-7 flex-wrap'>
        <div className={`card h-76 w-72 border border-gray-500 py-8 flex flex-col items-center justify-between ${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-300'}`}>
          <h1 className={`text-2xl font-bold w-full flex justify-center p-1 ${isDarkMode ? 'bg-gray-900 border border-gray-600' : 'bg-gray-400'}`}>DAWN NEWS</h1>

          <ul className="flex flex-col text-lg">
            <li className="list-disc">source for national news</li>
            <li className="list-disc">Established in 1941</li>
          </ul>

          <button className={`bg-gray-400 py-3 px-5 font-bold text-lg cursor-pointer ${isDarkMode ? 'bg-gray-900 border border-gray-600' : 'bg-gray-400'}`} value={"dawn"} onClick={(e) => showModal(e)}>view headlines</button>
        </div>
        <div className={`card h-76 w-72 border border-gray-500 py-8 flex flex-col items-center justify-between ${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-300'}`}>
          <h1 className={`text-2xl font-bold w-full flex justify-center p-1 ${isDarkMode ? 'bg-gray-900 border border-gray-600' : 'bg-gray-400'}`}>INTERNATIONAL NEWS</h1>

          <ul className="flex flex-col text-lg">
            <li className="list-disc">Global coverage, local insight</li>
            <li className="list-disc">Top international stories</li>
          </ul>

          <button className={`bg-gray-400 py-3 px-5 font-bold text-lg cursor-pointer ${isDarkMode ? 'bg-gray-900 border border-gray-600' : 'bg-gray-400'}`} value={"the_international_news"} onClick={(e) => showModal(e)}>view headlines</button>
        </div>
        <div className={`card h-76 w-72 border border-gray-500 py-8 flex flex-col items-center justify-between ${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-300'}`}>
          <h1 className={`text-2xl font-bold w-full flex justify-center p-1 ${isDarkMode ? 'bg-gray-900 border border-gray-600' : 'bg-gray-400'}`}>DAILY TIMES</h1>

          <ul className="flex flex-col text-lg">
            <li className="list-disc">Voices that matter</li>
            <li className="list-disc">Unbiased & factual</li>
          </ul>

          <button className={`bg-gray-400 py-3 px-5 font-bold text-lg cursor-pointer ${isDarkMode ? 'bg-gray-900 border border-gray-600' : 'bg-gray-400'}`} value={"daily_times"} onClick={(e) => showModal(e)}>view headlines</button>
        </div>
        <div className={`card h-76 w-72 border border-gray-500 py-8 flex flex-col items-center justify-between ${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-300'}`}>
          <h1 className={`text-2xl font-bold w-full flex justify-center p-1 ${isDarkMode ? 'bg-gray-900 border border-gray-600' : 'bg-gray-400'}`}>THE TRIBUNE NEWS</h1>

          <ul className="flex flex-col text-lg">
            <li className="list-disc">Latest headlines daily</li>
            <li className="list-disc">Crisp & reliable updates</li>
          </ul>

          <button className={`bg-gray-400 py-3 px-5 font-bold text-lg cursor-pointer ${isDarkMode ? 'bg-gray-900 border border-gray-600' : 'bg-gray-400'}`} value={"tribune"} onClick={(e) => showModal(e)}>view headlines</button>
        </div>

      </div>

      {/* ------------------news modal---------------------- */}

      <div className={`modal hide-scrollbar absolute top-[5%] md:w-[60%] w-[80%] md:h-[70%] h-[50%] p-5 cursor-pointer transition-all duration-500 ease-in-out opacity-0 scale-95 pointer-events-none overflow-x-auto ${isDarkMode? 'bg-gray-900 border border-gray-500 text-gray-200' : 'bg-gray-300'}`} id='modal' ref={modalRef} >
        <div className="close flex justify-end top-0 sticky">
          <img src="close_small_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png" alt="close" className="bg-black" onClick={close_modal} />
        </div>

        <div className="modal_content flex flex-col justify-start items-center p-5">
          <h1 className="font-bold text-2xl">{modalTitle}</h1>
          <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-500'}`}>{count} new headlines</p>

          <ul className="pt-6">
            {/* ------------ news items -------------- */}
            {modalContent.map((item, index) =>

            (
              // <div className="flex gap-6 justify-between items-center">


                <li key={index} className="py-4 flex justify-between gap-3 ">
                  <div className="flex items-start gap-3 md:flex-nowrap flex-wrap flex-10/12">
                    <img src={item.img} alt="news_image" width={150} />
                    <div>
                      <h1 className="font-bold text-xl hover:text-blue-700"><a href={item.link}>{item.title}</a></h1>
                      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{item.para}</p>
                    </div>
                  </div>
                  <div className="take_notes flex justify-end flex-2/12">
                    <button>
                      <img src={isDarkMode ? 'add_notes_gray.png' : 'add_notes_black.png'} alt="add_notes_img"
                      width={30}
                      className="cursor-pointer"
                      onClick={() => {
                        setNoteClicked(true)
                        setNoteData({ title: item.title, title_link: item.link })
                      }}
                    />
                    </button>
                  </div>
                </li>

              // </div>
            )

            )}
          </ul>
        </div>


      </div>


      {/* ----------------------- add notes ----------------- */}
      {noteClicked && <Save_notes prop={noteData} onClose={() => setNoteClicked(false)} />}


    </div>
  );
}
