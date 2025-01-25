import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaXmark } from "react-icons/fa6";
import Input from "../FormElements/Input/Input";
import Button from "../FormElements/Button/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Toaster, toast } from "react-hot-toast";

interface LoginFormProps {
  setOpenForm: (value: boolean) => void;
}

interface LoginInputs {
  email: string;
  name: string;
  surName: string;
  number: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Ad gerekli"),
  surName: yup.string().required("Soyad gerekli"),
  email: yup.string().email("Geçersiz email").required("Email gerekli"),
  number: yup
    .string()
    .matches(/^\d+$/, "Telefon numarası geçersiz")
    .required("Telefon numarası gerekli"),
});

const LoginForm: React.FC<LoginFormProps> = ({ setOpenForm }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    try {
      console.log("Form submitted:", data);

      toast.success("Form başarıyla gönderildi!", {
        position: "top-center",
      });

      setTimeout(() => {
        setOpenForm(false);
      }, 3000);
    } catch (error) {
      console.error("Hata", error);

      toast.error("Form gönderimi başarısız.", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen p-5">
      <Toaster />

      <div className="w-full max-w-[620px] px-10 py-20 relative bg-white rounded-lg shadow-lg">
        <h1 className="text-center text-3xl mb-8 text-[#2b75dd] font-semibold">
          Ücretsiz Deneme Formunu Doldurun
        </h1>
        <button
          onClick={() => setOpenForm(false)}
          className="absolute cursor-pointer top-2 right-2"
        >
          <FaXmark className="w-5 h-5 text-black" />
        </button>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col mt-4 w-full max-w-[400px] mx-auto space-y-4"
        >
          <Input
            props={{
              ...register("name", { required: "Name is required." }),
              placeholder: "Ad",
              type: "text",
            }}
            error={errors.name?.message}
          />
          <Input
            props={{
              ...register("surName", { required: "Surname is required." }),
              placeholder: "Soyad",
              type: "text",
            }}
            error={errors.surName?.message}
          />
          <Input
            props={{
              ...register("email", { required: "Email is required." }),
              placeholder: "Email",
              type: "text",
            }}
            error={errors.email?.message}
          />
          <Input
            props={{
              ...register("number", { required: "Number is required." }),
              placeholder: "Telefon Numarası",
              type: "text",
            }}
            error={errors.number?.message}
          />

          <Button
            type="submit"
            className="w-full px-4 py-2.5 text-base rounded font-semibold bg-[#2b75dd] text-white"
          >
            Gönder
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
