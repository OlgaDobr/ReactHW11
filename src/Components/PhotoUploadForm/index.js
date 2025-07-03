import React, { useState } from 'react';

function PhotoUploadForm() {
  const [formData, setFormData] = useState({
    nickname: '',
    password: '',
    email: '',
    photo: null,
    description: '',
    tags: '',
  });

  const [errors, setErrors] = useState({});

  // Обработчик изменения текстовых полей
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Обработчик выбора файла
  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, photo: e.target.files[0] }));
  };

  // Валидация формы
  const validate = () => {
    const newErrors = {};

    if (!formData.nickname.trim()) {
      newErrors.nickname = 'Введите никнейм';
    }

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Пароль должен быть не менее 6 символов';
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Введите корректный email';
    }

    if (!formData.photo) {
      newErrors.photo = 'Пожалуйста, выберите фотографию';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Введите описание фотографии';
    }

    // Теги — необязательное поле, можно оставить без проверки или добавить по необходимости

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Обработка отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // Здесь можно отправить данные на сервер или обработать их
      alert('Форма успешно отправлена!');
      
      // Для примера сбросим форму
      setFormData({
        nickname: '',
        password: '',
        email: '',
        photo: null,
        description: '',
        tags: '',
      });
      
      setErrors({});
      
     
      document.getElementById('photoInput').value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h2>Загрузка фотографии</h2>

      {/* Ник */}
      <div style={{ marginBottom: '10px' }}>
        <label>Ник:</label><br />
        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
        {errors.nickname && <div style={{ color: 'red' }}>{errors.nickname}</div>}
      </div>

      {/* Пароль */}
      <div style={{ marginBottom: '10px' }}>
        <label>Пароль:</label><br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
      </div>

      {/* Электронная почта */}
      <div style={{ marginBottom: '10px' }}>
        <label>Электронная почта:</label><br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </div>

      {/* Фото */}
      <div style={{ marginBottom: '10px' }}>
        <label>Фотография:</label><br />
        <input
          type="file"
          id="photoInput"
          accept="image/*"
          onChange={handleFileChange}
        />
        {errors.photo && <div style={{ color: 'red' }}>{errors.photo}</div>}
      </div>

      {/* Описание */}
      <div style={{ marginBottom: '10px' }}>
        <label>Описание фотографии:</label><br />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          style={{ width: '100%' }}
        ></textarea>
        {errors.description && <div style={{ color: 'red' }}>{errors.description}</div>}
      </div>

      {/* Теги */}
      <div style={{ marginBottom: '10px' }}>
        <label>Теги (через запятую):</label><br />
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>

      {/* Кнопка отправки */}
      <button type="submit">Отправить</button>
    </form>
  );
}

export default PhotoUploadForm;








