import { useState } from "react";
import "./login-form.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import type { LoginUser } from "@/types/auth-user/auth-user";

export default function LoginForm() {
  const navigate = useNavigate();
  // ===== Controlled Componnent =====
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginUser>();

  const onSubmit = (data: LoginUser) => {
    const storredData = localStorage.getItem("userData");

    if (!storredData) {
      setError("User Tapilmadi. Qeydiyyatdan Kecin");
      setTimeout(() => {
        navigate("/auth/register");
      }, 3000);
      return;
    }

    const userData = JSON.parse(storredData);

    if (userData.email === data.email && userData.password === data.password) {
      const loginData = {
        isLoggedIn: true,
        name: userData.name,
        email: userData.email,
        loginTime: new Date().toISOString(),
      };

      localStorage.setItem("currentUser", JSON.stringify(loginData));

      setSuccessMessage("Ugurla daxil oldunuz! Ana sehifeye kecid...");
      setError("");
      reset();

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } else {
      setError("Email ve ya parol sehvdir!");
      setSuccessMessage("");
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        {error && <div className="form-error-message">{error}</div>}
        {successMessage && (
          <div className="form-success-message">{successMessage}</div>
        )}
        <input
          type="email"
          className="form-control"
          placeholder="Emailinizi daxil edin"
          required
          {...register("email", {
            required: "Email mutleqdir",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Email duzgun deir",
            },
          })}
        />
        {errors.email && <span className="error">{errors.email.message}</span>}
        <input
          type="password"
          className="form-control"
          placeholder="********"
          required
          {...register("password", {
            required: "Sifre mutleqdir",
            minLength: {
              value: 6,
              message: "Sifre min 6 simvoldan ibaret olmalidir",
            },
          })}
        />
        {errors.password && (
          <span className="error">{errors.password.message}</span>
        )}
        <button type="submit" className="btn btn-white">
          Submit
        </button>
      </form>
    </div>
  );

  // ====== Uncontrolled Form =====
  //   const nameRef = useRef();
  //   const emailRef = useRef();

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("Göndərildi:", {
  //       name: nameRef.current.value,
  //       email: emailRef.current.value,
  //     });
  //   };

  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <input ref={nameRef} type="text" placeholder="Ad" />
  //       <input ref={emailRef} type="email" placeholder="Email" />
  //       <button type="submit">Göndər</button>
  //     </form>
  //   );
}
