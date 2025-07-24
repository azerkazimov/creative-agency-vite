import { useState } from "react";

import "./register-form.css";
import { useNavigate } from "react-router-dom";
import type { RegisterUser } from "@/types/auth-user/auth-user";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<RegisterUser>();

  const [successMessage, setSuccessMessage] = useState("");

  const password = watch("password");

  const validatePassword = (value: string) => {
    if (value.length < 8) return "Sifre min 8 simvol olmalidir";
    if (!/(?=.*[a-z])/.test(value)) return "Kicik herf lazimdir";
    if (!/(?=.*[A-Z])/.test(value)) return "Boyuk herf lazimdir";
    if (!/(?=.*\d)/.test(value)) return "Reqem lazimdir";
    return true;
  };

  const onSubmit = (data: RegisterUser) => {
    const userData = {
      name: data.name,
      email: data.email,
      age: data.age,
      password: data.password,
      nptification: data.notification,
      registeredAt: new Date().toISOString(),
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    setSuccessMessage(
      "Qeydiyyat ugurla tamamlandi! Login sehifesine yonlendirilirsiniz"
    );

    reset();

    setTimeout(() => {
      navigate("/auth/login");
    }, 2000);
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        {successMessage && (
          <div className="form-success-message">{successMessage}</div>
        )}
        <input
          {...register("name", {
            required: "Ad mutleqdir",
            minLength: {
              value: 3,
              message: "Ad Min 3 simvoldan ibaret olmalidir",
            },
            validate: {
              noSpaces: (value) => !/\s/.test(value) || "Bosduqlar qadagandir",
              notAdmin: (value) =>
                value !== "admin" || '"admin" adi qadagandir',
            },
          })}
          name="name"
          type="text"
          className="form-control"
          placeholder="Ad"
        />
        {errors.name && <span className="error">{errors.name.message}</span>}
        <input
          {...register("email", {
            required: "Email mutleqdir",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Email duzgun deir",
            },
          })}
          name="email"
          type="email"
          className="form-control"
          placeholder="Email"
        />
        {errors.email && <span className="error">{errors.email.message}</span>}
        <input
          {...register("age", {
            required: "Yasinizi qeyd edin",
            validate: (value) => {
              const numValue = Number(value);
              if (isNaN(numValue)) return 'Regem daxil edin';
              if (numValue <= 0) return 'Yas müsbət rəqəm olmalıdır';
              if (numValue > 100) return 'Yas realist olmalıdır';
              return true;
            }
          })}
          name="age"
          type="text"
          className="form-control"
          placeholder="Yas"
        />
        {errors.age && <span className="error">{errors.age.message}</span>}
        <input
          {...register("password", {
            required: "Sifre mutleqdir",
            validate: validatePassword,
          })}
          name="password"
          type="password"
          className="form-control"
          placeholder="********"
        />
        {errors.password && (
          <span className="error">{errors.password.message}</span>
        )}
        <input
          {...register("confirmPassword", {
            required: "Sifre mutleqdir",
            validate: (value) =>
              value === password || "Sifreler eyni olmalidir",
          })}
          name="confirmPassword"
          type="password"
          className="form-control"
          placeholder="********"
        />
        {errors.confirmPassword && (
          <span className="error">{errors.confirmPassword.message}</span>
        )}
        <label className="check-control">
          <input
            {...register("notification")}
            type="checkbox"
            name="notification"
          />
          Xəbər bülletenlərinə abunə ol
        </label>
        <button type="submit" className="btn btn-white">
          Submit
        </button>
      </form>
    </div>
  );
}
