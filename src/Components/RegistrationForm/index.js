import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    nickname: '',
    email: '',
    gender: '',
    age: ''
  });

  const [errors, setErrors] = useState({});

  // Обработчик изменения полей формы
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Валидация данных
  const validate = () => {
    const newErrors = {};

    if (!formData.nickname.trim()) {
      newErrors.nickname = 'Пожалуйста, введите ник.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Некорректный электронный адрес.';
    }

    if (!formData.gender) {
      newErrors.gender = 'Пожалуйста, выберите пол.';
    }

    const ageNumber = parseInt(formData.age, 10);
    if (isNaN(ageNumber) || ageNumber <= 0 || ageNumber > 120) {
      newErrors.age = 'Пожалуйста, введите правильный возраст.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Обработка отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Регистрация прошла успешно!');
      // Можно отправить данные на сервер или очистить форму
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Регистрационная форма</h2>

      <div>
        <label>Ник:</label><br />
        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
        />
        {errors.nickname && <div style={{ color: 'red' }}>{errors.nickname}</div>}
      </div>

      <div>
        <label>Электронная почта:</label><br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </div>

      <div>
        <label>Пол:</label><br />
        <label>
          <input
            type="radio"
            name="gender"
            value="Мужской"
            checked={formData.gender === 'Мужской'}
            onChange={handleChange}
          /> Мужской
        </label>
        <label style={{ marginLeft: '10px' }}>
          <input
            type="radio"
            name="gender"
            value="Женский"
            checked={formData.gender === 'Женский'}
            onChange={handleChange}
          /> Женский
        </label>
        {errors.gender && <div style={{ color: 'red' }}>{errors.gender}</div>}
      </div>

      <div>
        <label>Возраст:</label><br />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        {errors.age && <div style={{ color: 'red' }}>{errors.age}</div>}
      </div>

      <button type="submit" style={{ marginTop: '10px' }}>Зарегистрироваться</button>
    </form>
  );
}

export default RegistrationForm;
