'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import Input from '../components/Input';

const buttonMotionConfig = {
    whileHover: {
        transition: { duration: 0.1 }
    },
    whileTap: {
        scale: 0.9
    }
};

export default function Contacto() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    });

    const [response, setResponse] = useState(null);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        Object.entries(formData).forEach(([key, value]) => {
            if (value.trim() === '') {
                newErrors[key] = '*Obligatorio';
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        const templateParams = {
            from_name: formData.nombre,
            from_email: formData.email,
            to_name: 'Matteozzi Lavilla',
            from_phone: formData.telefono,
            from_message: formData.mensaje
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey).then(
            (response) => {
                console.log('SUCCESS!', response);
                setResponse('¡Mensaje enviado!');
                setFormData({
                    nombre: '',
                    email: '',
                    telefono: '',
                    mensaje: ''
                });
                setTimeout(() => {
                    setResponse(null);
                }, 2000);
            },
            (error) => {
                console.log('FAILED...', error.text);
            }
        );
    };

    return (
        <section
            id="contacto"
            className="flex justify-center w-screen h-auto lg:h-screen items-center lg:p-20"
            data-scroll-section
        >
            <div className="bg-white shadow-2xl rounded-3xl py-5 lg:py-20 px-8 w-[90%] h-[90%] lg:w-full lg:h-auto flex flex-col justify-center items-center lg:flex-row">
                <div className="w-full lg:w-4/8 lg:pr-8 flex flex-col text-white mb-8 lg:mb-0">
                    <h2 className="lg:text-[6vw]  text-[7.5vw] font-[700] mb-4 text-black leading-[1]">
                        Te leemos
                    </h2>
                    <p className="lg:text-[1.25vw] lg:w-[90%] md:text-xl text-black">
                        Nuestros horarios de atención son 24/7 por lo que
                        responderemos a tus inquietudes de inmediato. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolorem laborum nemo minima porro nisi doloremque ratione sapiente. Possimus facilis autem maiores recusandae? Sunt ut pariatur quam atque. Voluptate, ipsam?
                    </p>
                </div>

                <div className="w-full lg:w-4/8 flex justify-center items-center">
                    <div className="w-full">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <Input
                                label="Nombre"
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                error={errors.nombre}
                            />
                            <div className="flex flex-col md:flex-row md:space-x-3">
                                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                                    <Input
                                        label="Mail"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        error={errors.email}
                                    />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <Input
                                        label="Teléfono"
                                        type="tel"
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleChange}
                                        error={errors.telefono}
                                    />
                                </div>
                            </div>
                            <Input
                                label="Mensaje"
                                type="text"
                                name="mensaje"
                                value={formData.mensaje}
                                onChange={handleChange}
                                error={errors.mensaje}
                                isTextarea
                            />
                            <div className="flex justify-center mt-4">
                                <motion.button
                                    onClick={handleSubmit}
                                    {...buttonMotionConfig}
                                    className="w-full px-8 py-3 bg-black rounded-md text-white hover:bg-blue-500 transition duration-200 ease-in-out shadow-md"
                                >
                                    Enviar
                                </motion.button>
                            </div>
                            {response && (
                                <p className="mt-4 text-lg text-blue-200 font-semibold">
                                    {response}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
