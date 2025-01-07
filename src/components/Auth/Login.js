import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({
    login: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', credentials);

    // Vérification ou redirection
    if (credentials.login && credentials.password) {
      navigate('/maraba-fashion');
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="grid grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="flex items-center justify-center bg-pink-800 p-8 rounded-lg">
          <div className="text-center text-white">
            <img 
              src="/assets/images/ramatoulaye.webp"
              alt="Maraba Fashion"
              className="w-64 mx-auto mb-4"
            />
            <div className="text-xl mt-4">Adresse: Sicap Mbao</div>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span>Téléphone: +221 78 683 80 05</span>
            </div>
          </div>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Formulaire de connexion</h2>
          
          <div className="flex justify-center mb-8">
            <img
              src="/assets/images/image.png"
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-green-500"
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-lg font-medium">Login</label>
              <input
                type="text"
                placeholder="Entrer votre login"
                className="w-full p-3 mt-2 rounded-lg bg-pink-700 text-white placeholder-white/70"
                value={credentials.login}
                onChange={(e) => setCredentials({...credentials, login: e.target.value})}
              />
            </div>

            <div>
              <label className="text-lg font-medium">Password</label>
              <input
                type="password"
                placeholder="Entrer votre password"
                className="w-full p-3 mt-2 rounded-lg bg-pink-700 text-white placeholder-white/70"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              />
            </div>

            <button
              type="submit"
              className="w-full p-3 mt-4 bg-pink-700 text-white rounded-lg hover:bg-pink-900 transition-colors"
            >
              Connexion
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
