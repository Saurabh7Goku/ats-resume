ATS Resume Scanner
A web application built with Next.js, TypeScript, Tailwind CSS, and Firebase to scan resumes against job descriptions using the Gemini API, providing detailed feedback to optimize resumes for Applicant Tracking Systems (ATS). Features include a user dashboard displaying recent job scans with scores, similar to Jobscan and ResumeWorded.
Features

Resume Scanning: Upload a resume (PDF) and job description to get an ATS compatibility score and detailed feedback.
Gemini API Integration: Uses Google's Gemini API to analyze resumes and match them with job descriptions.
Firebase Storage: Stores user-specific ATS reports in Firestore.
User Dashboard: Displays recent job scans with scores, job titles, and resume details.
ATS Optimization Tips: Provides actionable suggestions for improving resume formatting, keywords, and content, inspired by Jobscan and ResumeWorded.
Responsive Design: Built with Tailwind CSS for a modern, mobile-friendly UI.

Prerequisites

Node.js (v18 or higher)
Firebase project with Firestore enabled
Google Gemini API key
npm or yarn

Setup Instructions

Clone the Repository
git clone https://github.com/your-username/ats-resume-scanner.git
cd ats-resume-scanner

Install Dependencies
npm install

Set Up Environment VariablesCreate a .env.local file in the project root and add the following:
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
GEMINI_API_KEY=your_gemini_api_key

Obtain Firebase credentials from your Firebase project console.
Get the Gemini API key from Google's API console.

Set Up Firebase

Create a Firebase project and enable Firestore.
Ensure Firestore security rules allow authenticated users to read/write their own data:rules_version = '2';
service cloud.firestore {
match /databases/{database}/documents {
match /users/{userId}/{document=\*\*} {
allow read, write: if request.auth != null && request.auth.uid == userId;
}
}
}

Run the Development Server
npm run dev

Open http://localhost:3000 in your browser.

Project Structure

src/app: Next.js App Router pages and API routes.
src/components: Reusable React components.
src/lib: Firebase and Gemini API utilities.
src/styles: Tailwind CSS configuration.
src/types: TypeScript interfaces and types.

Usage

Sign In: Use Firebase Authentication to log in (Google provider supported).
Upload Resume: Upload a PDF resume and paste a job description.
Scan Resume: The app uses the Gemini API to analyze the resume and provide a match score and optimization tips.
View Dashboard: See recent scans with job titles, scores, and detailed reports.
Improve Resume: Follow suggestions to enhance ATS compatibility (e.g., keywords, formatting).

Dependencies

next: Next.js framework
typescript: TypeScript for type safety
tailwindcss: Styling
firebase: Authentication and Firestore
@google/generative-ai: Gemini API for resume analysis
pdf-parse: PDF resume parsing
axios: HTTP requests
zustand: State management
react-hot-toast: Toast notifications

Contributing
Contributions are welcome! Please open an issue or submit a pull request on GitHub.
License
MIT License
