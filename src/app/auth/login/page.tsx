"use client";

import ButtonCustom from "@/components/ui/ButtonCustom"
import InputCustom from "@/components/ui/InputCustom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";

const formSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres"),
});

type FormValues = z.infer<typeof formSchema>;



const LoginPage = () => {
  const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
    } = useForm<FormValues>({
      resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: FormValues) => {
    console.log(data);
  };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gris-clarito">
            <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit(onSubmit)}>
                <InputCustom register={register} name="email" placeholder="Correo electrónico" type="email" errors={errors}/>
                <InputCustom register={register} name="password" placeholder="Contraseña" type="password" errors={errors}/>
                <ButtonCustom label="Iniciar Sesión" type="submit"/>
            </form>

        </div>)
        }

export default LoginPage;
