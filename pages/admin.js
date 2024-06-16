// pages/admin.js
import { useState } from 'react';

export default function Admin() {
  const [content, setContent] = useState({
    logo: { url: '', alt: '' },
    hero: { url: '', alt: '' },
    about: { text: '' },
    images: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContent({ ...content, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/updateContent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(content)
    });
    if (res.ok) {
      alert('Content updated successfully!');
    } else {
      alert('Failed to update content.');
    }
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <form onSubmit={handleSubmit}>
        <label>Logo URL:</label>
        <input type="text" name="logo.url" value={content.logo.url} onChange={handleInputChange} />
        <label>Logo Alt Text:</label>
        <input type="text" name="logo.alt" value={content.logo.alt} onChange={handleInputChange} />
        <label>Hero URL:</label>
        <input type="text" name="hero.url" value={content.hero.url} onChange={handleInputChange} />
        <label>Hero Alt Text:</label>
        <input type="text" name="hero.alt" value={content.hero.alt} onChange={handleInputChange} />
        <label>About Text:</label>
        <textarea name="about.text" value={content.about.text} onChange={handleInputChange}></textarea>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
