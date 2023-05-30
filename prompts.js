const getStylePrompt = (grade) => {
  if (grade === "First Grade") {
    return "Write a short story using simple words and short sentences. Include a character, a place, and an action.";
  } else if (grade === "Second Grade") {
    return "Write a story that has at least two characters, a problematic situation, and a solution. Use simple sentences and vocabulary appropriate for your level.";
  } else if (grade === "Third Grade") {
    return "Create a story using detailed descriptions of the characters and the environment. Include a conflict and its resolution, and make sure to use more complex sentences.";
  } else if (grade === "Fourth Grade") {
    return "Write a brief report on a topic of personal interest or a topic you are studying in school. Make sure to include facts and relevant information.";
  } else if (grade === "Fifth Grade") {
    return "Write an argumentative text about a current or relevant topic for you. Make sure to present a clear stance, solid arguments, and examples to support your opinion.";
  } else if (grade === "Sixth Grade") {
    return "Write an essay that compares and contrasts two related topics. Make sure to include an introduction, development of arguments, and a strong conclusion.";
  } else if (grade === "Seventh Grade") {
    return "Write a persuasive article on a subject of your choice. Provide strong reasoning and evidence to support your viewpoint.";
  } else if (grade === "Eighth Grade") {
    return "Compose a descriptive narrative capturing a memorable experience. Utilize vivid language and sensory details to engage the reader.";
  } else if (grade === "Ninth Grade") {
    return "Write a research paper exploring a historical event or a scientific concept. Include credible sources and a well-structured argument.";
  }
};




export const promptCreateNewSection = (pageName, currentSections) => {
  let currentSectionsNames = currentSections.map((section) => section.header);
  return `Here are the sections names created for the page ${pageName}:\n${currentSectionsNames}. Return a new section with a description. Result is in a json format like this: \{"header": "Event A ", "description": "This event happens/describe ..."}\}`;
};
export const promptSections = (pageName, style) => {
  return `Can you return the 3 sections related to this subject: '${pageName}'
  ${getStylePrompt(
    style
  )}.In a json format like this, in the order of appearance in the page: [\{{"header": "Event A ", "description": "This event happens/describe ..."}}, ...]`;
};

export const promptContinue = (pageName, currentSection, style) => {
  return `This is the section named "${
    currentSection.header
  }" for the page ${pageName}:\n${
    currentSection.description
  }.\n.Continue the section with 1 more paragraph ${getStylePrompt(style)}:\n`;
};
