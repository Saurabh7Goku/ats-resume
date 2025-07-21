// src/lib/gemini.ts

import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function scanResume(
  resumeText: string,
  jobDescription: string,
  yearsOfExperience: number
) {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const prompt = `
    You are an ATS (Applicant Tracking System) resume scanner similar to Jobscan or ResumeWorded.
    Analyze the provided resume text against the job description and the user's years of experience (${yearsOfExperience} years).
    Return a JSON object with:
    - **matchScore (number, 1-100)**
    - **missingKeywords**: Array of keywords from the job description missing in the resume
    - **formattingIssues**: Array of ATS-related formatting issues
    - **skills.score**: A number (1-100) assessing the match of hard and soft skills to the job description.
    - **skills.tips**: Array of tips with type, tip, and explanation (e.g., { type: "improve", tip: "Add 'Agile methodology' skill", explanation: "The job description emphasizes Agile experience, which is missing in your resume." }).
    - **softSkillsMatch**: Array of soft skills from the job description and whether they are present
    - **hardSkillsMatch**: Array of hard skills from the job description and whether they are present
    - **experienceAlignment**: String describing how well the years of experience align with job requirements
    - **toneAndStyle.score**: A number (1-100) evaluating the tone and style suitability for the job.
    - **toneAndStyle.tips**: Array of tips with type, a concise tip, and an explanation (e.g., { type: "improve", tip: "Use more action verbs", explanation: "Action verbs like 'led' or 'developed' make your resume more dynamic." }).
    - **content.score**: A number (1-100) assessing the quality and relevance of content.
    - **content.tips**: Array of tips with type, tip, and explanation (e.g., { type: "improve", tip: "Quantify achievements", explanation: "Add metrics like 'increased sales by 20%' to demonstrate impact." }).
    - **structure.score**: A number (1-100) evaluating the resume's organization and readability.
    - **structure.tips**: Array of tips with type, tip, and explanation (e.g., { type: "improve", tip: "Use consistent formatting", explanation: "Inconsistent bullet points or fonts can confuse ATS systems." }).
    - **contentSuggestions**: Array of actionable suggestions to improve ATS compatibility
    - **ATS.tips**: Array of tips with type ("good" or "improve") and a concise tip (e.g., "Include more keywords like 'Python'").
    Ensure suggestions are specific, actionable, and mimic the detailed feedback provided by Jobscan or ResumeWorded.


    Resume: ${resumeText}
    Job Description: ${jobDescription}
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const rawText = response.text();

    // 🧹 Clean the response: remove markdown code blocks
    const jsonStartIndex = rawText.indexOf('{');
    const jsonEndIndex = rawText.lastIndexOf('}');
    const jsonString = rawText.slice(jsonStartIndex, jsonEndIndex + 1);

    const json = JSON.parse(jsonString);
    return json;
  } catch (error) {
    console.error('Gemini API error:', error);
    throw new Error('Failed to scan resume');
  }
}