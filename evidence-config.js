/* =====================================================================
   EVIDENCE SETTINGS: edit this file to manage the "Evidence of my work" section.
   You never need to touch index.html again for evidence.

   HOW IT WORKS
   - Each block below is one skill. Put the files you upload in its "items" list.
   - Upload files into the "evidence" folder of your GitHub repository.
   - Accepted: PDF (.pdf), images (.jpg .jpeg .png .webp), videos (.mp4 .webm)
     and YouTube links (watch, youtu.be, shorts) which are embedded as players.
   - A skill with no uploaded evidence shows an "Evidence coming soon" placeholder.
   - To hide empty skills once you are done, change showPlaceholders to false.
   - To add a caption: { src: "evidence/file.pdf", title: "My caption" }
   - To add another skill: copy one block, change skill, note and items.
   ===================================================================== */

window.EVIDENCE_SETTINGS = { showPlaceholders: true };

window.EVIDENCE = [
  { skill: "Academic Administration",
    note: "Admissions, viva schedules, registration, meetings and official correspondence.",
    items: [
      "evidence/admission-viva-schedule.pdf",
      "evidence/meeting-minutes.pdf",
      "evidence/official-letters.pdf"
    ] },

  { skill: "Admissions Marketing & Social Media",
    note: "Social media and SMS campaigns for the MPH admission cycle.",
    items: [
      "evidence/admission-campaign.pdf",
      "evidence/social-media-1.jpg",
      "evidence/social-media-2.jpg"
    ] },

  { skill: "Faculty Coordination & HR",
    note: "Adjunct faculty recruitment, interview sessions and onboarding.",
    items: [
      "evidence/adjunct-recruitment.pdf"
    ] },

  { skill: "Office & Financial Management",
    note: "Budget preparation, procurement support and records.",
    items: [
      "evidence/budget-draft.pdf"
    ] },

  { skill: "Event Management",
    note: "Seminars, workshops, orientations and meetings.",
    items: [
      "evidence/orientation-program.pdf",
      "evidence/event-1.jpg",
      "evidence/event-2.jpg"
    ] },

  { skill: "Graphic Design",
    note: "Posters, banners and promotional creatives.",
    items: [
      "evidence/graphic-design-1.jpg",
      "evidence/graphic-design-2.jpg",
      "evidence/graphic-design-3.jpg"
    ] },

  { skill: "Motion Graphics & Video",
    note: "Animated and edited video work.",
    items: [
      "evidence/motion-graphics.mp4"
      // , "https://www.youtube.com/watch?v=VIDEO_ID"
    ] },

  { skill: "AI & Prompt Engineering",
    note: "Prompts and results created with Claude, Gemini and ChatGPT.",
    items: [
      "evidence/prompt-examples.pdf"
    ] },

  { skill: "AI Promotional Video",
    note: "Promotional videos created with AI tools.",
    items: [
      "evidence/ai-promo-video.mp4"
      // , "https://www.youtube.com/watch?v=VIDEO_ID"
    ] },

  { skill: "Credentials & Verification",
    note: "Certificates and employment verification.",
    tag: "Verification",
    items: [
      "evidence/experience-certificate.pdf",
      "evidence/mba-certificate.pdf"
    ] }
];
