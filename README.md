# ATS Resume Scanner

A web application built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Firebase** to scan resumes against job descriptions using the **Gemini API**, providing detailed feedback to optimize resumes for Applicant Tracking Systems (ATS). Features include a user dashboard displaying recent job scans with scores, similar to **Jobscan** and **ResumeWorded**.

---

## 🚀 Features

- **Resume Scanning**: Upload a resume (PDF) and job description to get an ATS compatibility score and detailed feedback.
- **Gemini API Integration**: Uses Google's Gemini API to analyze resumes and match them with job descriptions.
- **Firebase Storage**: Stores user-specific ATS reports in Firestore.
- **User Dashboard**: Displays recent job scans with scores, job titles, and resume details.
- **ATS Optimization Tips**: Provides actionable suggestions for improving resume formatting, keywords, and content, inspired by Jobscan and ResumeWorded.
- **Responsive Design**: Built with Tailwind CSS for a modern, mobile-friendly UI.

---

## 📋 Prerequisites

- **Node.js** (v18 or higher)
- **Firebase project** with Firestore enabled
- **Google Gemini API key**
- **npm** or **yarn**

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Saurabh7Goku/ats-resume.git
cd ats-resume
```


### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root of your project directory and add the following variables:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
GEMINI_API_KEY=your_gemini_api_key
```

- Get Firebase credentials from your Firebase Console.
- Get the Gemini API key from the [Google Cloud Console](https://console.cloud.google.com/).

### 4. Set Up Firebase

- Create a Firebase project.
- Enable **Firestore** in the Firebase Console.
- Enable **Google Authentication** under the Authentication → Sign-in method tab.
- Set Firestore rules as follows:

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### 5. Run the Development Server

```bash
npm run dev
```

Then open your browser and navigate to:

```
http://localhost:3000
```

---

## 📁 Project Structure

```
src/
├── app/           # Next.js App Router pages and API routes
├── components/    # Reusable React components
├── lib/           # Firebase and Gemini API utilities
├── styles/        # Tailwind CSS configuration
├── types/         # TypeScript interfaces and types
```

---

## 🧪 Usage

- **Sign In**: Use Firebase Authentication to log in (Google provider supported).
- **Upload Resume**: Upload a PDF resume and paste a job description.
- **Scan Resume**: The app uses the Gemini API to analyze the resume and provide a match score and optimization tips.
- **View Dashboard**: See recent scans with job titles, scores, and detailed reports.
- **Improve Resume**: Follow suggestions to enhance ATS compatibility (e.g., keywords, formatting).

---

## 📦 Dependencies

- `next`: Next.js framework
- `typescript`: TypeScript for type safety
- `tailwindcss`: Styling
- `firebase`: Authentication and Firestore
- `@google/generative-ai`: Gemini API for resume analysis
- `pdf-parse`: PDF resume parsing
- `axios`: HTTP requests
- `zustand`: State management
- `react-hot-toast`: Toast notifications

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

---

## 📄 License

**MIT License**

```

You can directly paste this into a `README.md` file, and it will render properly on GitHub with consistent formatting throughout. Let me know if you want a version with badges or deployment steps (e.g., for Vercel or Firebase Hosting).
```
