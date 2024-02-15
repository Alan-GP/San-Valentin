import { useChangeElements } from '../hooks/changeElements'
import { useChangeHeart } from '../hooks/hearts'
import Modal from 'react-modal';
import '../styles/styles.css'

export function Main() {

    const { handleButtonNo, handleButtonYes, textP, image, showExtraButton, showModal, handleCloseModal, handleOpenModal, modalIsOpen, openModal, closeModal } = useChangeElements()
    const { open, close, isOpen } = useChangeHeart()

    return (
        <>
            <main className='max-w-3xl m-auto w-full h-screen text-center flex justify-center items-center'>

                <div className='flex justify-center items-center flex-col gap-2'>

                    <h1 className='font-sans font-bold text-gray-400 text-2xl'>
                        Quieres ser mi San Valentin? </h1>

                    <img src={image} className='w-72' />

                    <p className='font-mono text-yellow-100'> {textP} </p>

                    <section className='flex gap-3'>

                        <button className='bg-purple-500 w-20 text-white font-bold py-2 px-4 rounded transition-all hover:scale-110' onClick={handleButtonYes}> Si </button>

                        <button className='bg-pink-500 w-20 text-white font-bold py-2 px-4 rounded transition-all hover:scale-110' onClick={handleButtonNo}> No </button>

                    </section>

                    {showExtraButton &&
                        <div onClick={openModal}>

                            <div id="envelope" className={isOpen ? 'open' : 'close'} onClick={open}>
                                <div className="front flap"></div>
                                <div className="front pocket"></div>
                                <div className="letter">
                                    <div className="words line1"></div>
                                    <div className="words line2"></div>
                                    <div className="words line3"></div>
                                    <div className="words line4"></div>
                                </div>
                                <div className="hearts">
                                    <div className="heart a1"></div>
                                    <div className="heart a2"></div>
                                    <div className="heart a3"></div>
                                </div>
                            </div>
                            {/* <div className="reset">
                                <button id="open" onClick={open}>Open</button>
                                <button id="reset" onClick={close}>Reset</button>
                            </div> */}
                        </div>

                    }

                    <div>
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            contentLabel="Carta de San Valentin"
                            style={{
                                content: {
                                  width: '500px', // Ancho del modal
                                  height: '300px', // Altura del modal
                                  margin: 'auto', // Centra el modal en la pantalla
                                },
                              }}
                        >
                            <h2>Hello</h2>
                            <button onClick={closeModal}>close</button>
                            <div>I am a modal</div>
                        </Modal>
                    </div>

                </div>

            </main >
        </>
    )
}