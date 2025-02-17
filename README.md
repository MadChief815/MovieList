# 🎬 **Movie Shortlist App**  
A feature-rich React Native movie browsing application that allows users to explore and shortlist their favorite movies. This app integrates TMDb API for fetching movie data, Redux Toolkit for state management, and React Query for efficient data fetching and caching.  

---

## 🔹 **Key Features**  
✅ **Movie Browsing** – Fetch movies from TMDb and display them in a clean UI  
✅ **Shortlisting** – Add and remove movies from a personal shortlist using Redux Toolkit  
✅ **Efficient Data Fetching** – Uses React Query for caching and optimized API calls  
✅ **State Management** – Redux Toolkit ensures smooth and scalable state handling  
✅ **Smooth Navigation** – Tab-based navigation with React Navigation  
✅ **Optimized Performance** – Handles API requests efficiently with caching  
✅ **Persistent State** – Uses Redux Persist to keep shortlisted movies even after app restarts  

---

## 🔹 **Tech Stack**  
- ⚛ **React Native** 
- 🎭 **Redux Toolkit** (State Management)  
- 🌐 **React Query + Axios** (Data Fetching & Caching)  
- 🧭 **React Navigation** (Tab Navigation)  

---

## 📌 **Future Enhancements**   
📽 **Movie details screen** with trailers and ratings  
🌙 **Light mode support**  
💾 **Local storage** for offline access  
👤 **User Sign-In & Accounts** – Allow users to create accounts and save their shortlisted movies across devices

---

## 🚀 **Installation & Setup**  
Follow these steps to set up the project locally:  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/MadChief815/MovieList.git
```  

### **2️⃣ Navigate to the Project Directory**  
```sh
cd MovieList
```  

### **3️⃣ Install Dependencies**  
```sh
npm install
```  

### **4️⃣ Create a TMDb Account & Get API Key**  
1. Go to [TMDb](https://www.themoviedb.org/) and sign up for a free account.  
2. Navigate to **Settings > API** and request an API key.  
3. Once approved, get your **API Key** and **Base URL**.  
4. Open the file:  
   ```sh
   MovieList/Services/api.js
   ```  
5. Replace the placeholders with your API details:  
   ```javascript
   BASE_URL = 'https://api.themoviedb.org/3';
   api_key = 'your_tmdb_api_key';
   ```  

### **5️⃣ Run the App**  
```sh
npm start
```  

🎉 **You're now ready to browse and shortlist movies!** 🚀✨  

---

⚡ **If you encounter any issues, feel free to reach out for support.**  

💻 **Happy coding!** 🔥  
