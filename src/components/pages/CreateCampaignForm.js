/* src/components/pages/CreateCampaignForm.jsx */
import React, { useState, useEffect } from "react";
import Select from "react-select";

const CreateCampaignForm = () => {
  const [formData, setFormData] = useState({
    campaignName: "",
    description: "",
    rewardType: null,
    communicationChannel: null,
    campaignType: "",
    clientTarget: "",
    startDate: "",
    endDate: "",
  });

  const [filteredClientOptions, setFilteredClientOptions] = useState([]);
  
  const optionsRewardType = [
    { value: "cashback", label: "Cashback" },
    { value: "points", label: "Points" },
    { value: "discount", label: "Discount" },
    { value: "voucher", label: "Voucher" },
  ];

  const optionsCommunicationChannel = [
    { value: "email", label: "Email" },
    { value: "sms", label: "SMS" },
    { value: "social_media", label: "Social Media" },
    { value: "push_notification", label: "Push Notification" },
  ];

  const optionsClientTarget = [
    { value: "clients_existants", label: "Clients existants" },
    { value: "nouveaux_clients", label: "Nouveaux clients" },
    { value: "clients_fideles", label: "Clients fidèles" },
    { value: "tous_les_clients", label: "Tous les clients" },
  ];

  // Filtrer les options des clients en fonction de l'entrée
  useEffect(() => {
    if (typeof formData.clientTarget === 'string') {
      const filtered = optionsClientTarget.filter(option =>
        option.label.toLowerCase().includes(formData.clientTarget.toLowerCase())
      );
      setFilteredClientOptions(filtered);
    }
  }, [formData.clientTarget]);

  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'rgb(249 115 22)',
      borderColor: 'transparent',
      borderRadius: '0.375rem',
      boxShadow: 'none',
      minHeight: '42px',
      '&:hover': {
        borderColor: 'transparent',
      }
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: 'rgb(249 115 22)',
      borderRadius: '0.375rem',
      marginTop: '4px',
      overflow: 'hidden'
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? 'rgb(234 88 12)' : 'rgb(249 115 22)',
      color: 'white',
      cursor: 'pointer',
      padding: '8px 12px',
      '&:hover': {
        backgroundColor: 'rgb(234 88 12)',
      }
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'white'
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'rgba(255, 255, 255, 0.8)'
    }),
    input: (provided) => ({
      ...provided,
      color: 'white'
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: 'white',
      '&:hover': {
        color: 'white'
      }
    }),
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (selectedOption, fieldName) => {
    setFormData({ ...formData, [fieldName]: selectedOption });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Campagne créée avec succès :", formData);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full mx-auto">
      <h2 className="text-2xl font-semibold mb-8 text-center text-black">
        Formulaire de création des campagnes
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* Nom de la campagne */}
          <div>
            <label className="block text-sm mb-2 text-black">Nom de la campagne</label>
            <input
              type="text"
              name="campaignName"
              value={formData.campaignName}
              onChange={handleChange}
              className="w-full p-2.5 rounded-md bg-orange-500 text-white placeholder-white/80 border-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {/* Client de Cible */}
          <div>
            <label className="block text-sm mb-2 text-black">Clients de Cible</label>
            <Select
              options={filteredClientOptions}
              value={formData.clientTarget}
              onChange={(option) => handleSelectChange(option, "clientTarget")}
              onInputChange={(inputValue) => {
                setFormData({ ...formData, clientTarget: inputValue });
              }}
              styles={customSelectStyles}
              placeholder="Sélectionner les cibles clients"
              isSearchable
              isClearable
            />
          </div>

          {/* Type de récompenses */}
          <div>
            <label className="block text-sm mb-2 text-black">Type de récompenses</label>
            <Select
              options={optionsRewardType}
              value={formData.rewardType}
              onChange={(option) => handleSelectChange(option, "rewardType")}
              styles={customSelectStyles}
              placeholder="Sélectionner les types de récompenses"
            />
          </div>

           {/* Canal de communication */}
           <div>
            <label className="block text-sm mb-2 text-black">Canal de communication</label>
            <Select
              options={optionsCommunicationChannel}
              value={formData.communicationChannel}
              onChange={(option) => handleSelectChange(option, "communicationChannel")}
              styles={customSelectStyles}
              placeholder="Sélectionner les canaux de communication"
            />
          </div>

          {/* Date de début */}
          <div>
            <label className="block text-sm mb-2 text-black">Date de début</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full p-2.5 rounded-md bg-orange-400 text-white border-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {/* Date de fin */}
          <div>
            <label className="block text-sm mb-2 text-black">Date de fin</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full p-2.5 rounded-md bg-orange-400 text-white border-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {/* Type de campagne */}
          <div className="md:col-span-2">
            <label className="block text-sm mb-2 text-black">Type de campagne</label>
            <input
              type="text"
              name="campaignType"
              value={formData.campaignType}
              onChange={handleChange}
              className="w-full p-2.5 rounded-md bg-orange-400 text-white placeholder-white/80 border-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>
        </div>

        {/* Description */}
        <div className="mt-6">
          <label className="block text-sm mb-2 text-black">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full p-2.5 rounded-md bg-orange-400 text-white placeholder-white/80 border-none focus:ring-2 focus:ring-orange-400"
            required
          ></textarea>
        </div>

        {/* Boutons */}
        <div className="flex justify-between mt-8">
          <button
            type="button"
            className="px-6 py-2.5 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            Annuler
          </button>
          <button
            type="submit"
            className="px-6 py-2.5 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
          >
            Soumettre
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCampaignForm;