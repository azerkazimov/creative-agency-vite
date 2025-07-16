import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

import "./register-form.css";
import { useNavigate } from "react-router-dom";
import type { RegisterUser } from "@/types/auth-user/auth-user";

interface FormErrors {
  name?: string;
  email?: string;
  age?: string;
  password?: string;
  confirmPassword?: string;
}

export default function RegisterForm() {
    const navigate = useNavigate()
  const [formData, setFormData] = useState<RegisterUser>({
    name: "",
    email: "",
    age: 0,
    password: "",
    confirmPassword: "",
    notification: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name) {
      newErrors.name = "Adinizi daxil edin";
    } else if (formData.name.length < 2) {
      newErrors.name = "Duzdun format daxil olunmuyub";
    }

    if (!formData.email) {
      newErrors.email = "Email mutleqdir";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email düzgün deyil";
    }

    if (!formData.age) {
      newErrors.age = "Yasinizi qeyd edin";
    } else if (isNaN(Number(formData.age))) {
      newErrors.age = "Regem daxil edin";
    }

    if (!formData.password) {
      newErrors.password = "Sifrefi daxil edin";
    } else if (formData.password.length < 6) {
      newErrors.password = "Min 6 simvol";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Sifrefi tekrar edin";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Sifreler uygun deil";
    }

    return newErrors;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationsError = validateForm();
    if (Object.keys(validationsError).length === 0) {
      console.log("User info: ", formData);

      const userData = {
        name: formData.name,
        email: formData.email,
        age: formData.age,
        password: formData.password,
        nptification: formData.notification,
        registeredAt: new Date().toISOString(),
      };

      localStorage.setItem("userData", JSON.stringify(userData));
      setErrors({});
      setSuccessMessage(
        "Qeydiyyat ugurla tamamlandi! Login sehifesine yonlendirilirsiniz"
      );

      setFormData({
        name: "",
        email: "",
        age: 0,
        password: "",
        confirmPassword: "",
        notification: false,
      });
      e.currentTarget.reset();

      setTimeout(() => {
        navigate('/auth/login')
      }, 2000);
    } else {
      setErrors(validationsError);
    }
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit} className="form-container">
        {successMessage && (
            <div className="form-success-message">
                {successMessage}
            </div>
        )}
        <input
          name="name"
          type="text"
          className="form-control"
          onChange={handleInputChange}
          placeholder="Ad"
        />
        {errors.name && <span className="error">{errors.name}</span>}
        <input
          name="email"
          type="email"
          className="form-control"
          onChange={handleInputChange}
          placeholder="Email"
        />
        {errors.email && <span className="error">{errors.email}</span>}
        <input
          name="age"
          type="text"
          className="form-control"
          onChange={handleInputChange}
          placeholder="Yas"
        />
        {errors.age && <span className="error">{errors.age}</span>}
        <input
          name="password"
          type="password"
          className="form-control"
          onChange={handleInputChange}
          placeholder="********"
        />
        {errors.password && <span className="error">{errors.password}</span>}
        <input
          name="confirmPassword"
          type="password"
          className="form-control"
          onChange={handleInputChange}
          placeholder="********"
        />
        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        <label className="check-control">
          <input
            type="checkbox"
            name="notification"
            checked={formData.notification}
            onChange={handleCheckboxChange}
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
