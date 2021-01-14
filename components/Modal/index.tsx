import React, { ReactNode, MouseEvent } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { createPortal } from 'react-dom'

// Hooks
import useDomReady from 'hooks/useDomReady'

type ModalProps = {
  setVisible: (value: boolean) => void,
  visible: boolean,
  children: ReactNode;
}

const Modal = ({ children, visible, setVisible }: ModalProps) => {
  const domReady = useDomReady()

  function close (evt: MouseEvent<HTMLDivElement | HTMLButtonElement>) {
    if (evt.target === evt.currentTarget) {
      setVisible(false)
    }
  }

  return (
    domReady && visible && (
      createPortal(
        <div onClick={close} className='absolute top-0 left-0 right-0 bottom-0 px-4 bg-black bg-opacity-80 flex items-center justify-center z-10'>
          {children}
          <button onClick={() => setVisible(false)} className='focus:outline-none bg-transparent border-none absolute top-5 right-5'><IoIosCloseCircleOutline color='white' size={35} /></button>
        </div>,
        document.body
      )
    )
  )
}

export default Modal
