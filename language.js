const translations = {
    hindi: { welcome: "नमस्ते! 🙏", chooseLanguage: "अपनी भाषा चुनें",help: "मदद के लिए इसे दबाएं", learn: "उपयोग करना सीखें", accept: "स्वीकार करें" },
    english: { welcome: "Namaste! 🙏", chooseLanguage: "Choose your language", help: "Press this for help", learn: "Learn how to use", accept: "Accept" },
    marathi: { welcome: "नमस्कार! 🙏", chooseLanguage: "तुमची भाषा निवडा", help: "मदतीसाठी हे दाबा", learn: "वापरण्यास शिका", accept: "स्वीकारा" },
    gujarati: { welcome: "નમસ્તે! 🙏", chooseLanguage: "તમારા ભાષા પસંદ કરો", help: "મદદ કરવા માટે ઇહ દાબા કરો", learn: "ઉપયોગ કરવા માટે શિકા", accept: "સ્વીકારો" },
    tamil: { welcome: "வணக்கம்! 🙏", chooseLanguage: "நீங்கள் மொழி தேர்ந்தெடுக்கவும்", help: "உதவி செய்யவும்", learn: "வாடிக்கையை விட்டு", accept: "சரியானது" },
    telugu: { welcome: "స్వాగతం! 🙏", chooseLanguage: "నీకు భాషాన్ని ఎంపికుచేయండి", help: "మదదం చేయండి ఇది దాబాయించండి", learn: "ఉపయోగంలో వాటికి కూడినండి", accept: "స్వికారం" },
    kannada: { welcome: "ಹಲೋ! 🙏", chooseLanguage: "ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ", help: "ಸಹಾಯ ನೀವು ತಪ್ಪಿಸಿ", learn: "ಉಪಯೋಗಿಸಿ ಸೂಚಿಸಿ", accept: "ಸ್ವಿಕಾರಿಸಿ" },
    urdu: { welcome: "سلام! 🙏", chooseLanguage: "تمام کریں", help: "کیا کوئی مدد کرنا چاہتہ ہے؟", learn: "کیا کوئی مدد کرنا چاہتہ ہے؟", accept: "اپنے کیا کوئی مدد کرنا چاہتہ ہے؟" },
    bengali: { welcome: "হ্যালো! 🙏", chooseLanguage: "আপনার ভাষা নির্বাচন করুন", help: "সহায়তা করার জন্য এই বাটন চাপে ক্লিক করুন", learn: "উপযোগ করার জন্য এই বাটন চাপে ক্লিক করুন", accept: "অনুমোদন করুন" },
  };
  
  let selectedLanguage = null;
  
  const welcomeText = document.getElementById("welcomeText");
  const subText = document.getElementById("subText");
  const languagesContainer = document.getElementById("languagesContainer");
  const acceptButton = document.getElementById("acceptButton");
  
  const languages = [
    { key: "hindi", label: "हिंदी" },
    { key: "english", label: "English" },
    { key: "marathi", label: "मराठी" },
    { key: "gujarati", label: "ગુજરાતી" },
    { key: "tamil", label: "தமிழ்" },
    { key: "telugu", label: "తెలుగు" },
    { key: "kannada", label: "ಕನ್ನಡ" },
    { key: "urdu", label: "اردو" },
    { key: "bengali", label: "বাংলা" },
  ];
  
  // Add language buttons dynamically
  languagesContainer.innerHTML = "";



  
  languages.forEach((lang) => {
    const button = document.createElement("div");
    button.className = "language-button";
    button.textContent = lang.label;
    button.onclick = () => handleLanguageSelect(lang.key, button);
    languagesContainer.appendChild(button);
  });
  
  function handleLanguageSelect(langKey, button) {
    selectedLanguage = langKey;
    const buttons = document.querySelectorAll(".language-button");
    buttons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
    updateTexts();
    acceptButton.disabled = false;
    acceptButton.classList.remove("disabled");
  }
  
  function updateTexts() {
    const translate = (key) => translations[selectedLanguage]?.[key] || translations.english[key];
    welcomeText.textContent = translate("welcome");
    subText.textContent = translate("chooseLanguage");
    acceptButton.textContent = translate("accept");
  }