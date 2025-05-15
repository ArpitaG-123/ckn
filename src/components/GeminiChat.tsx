import React, { useState } from 'react';

const mockReplies = [
  // General
  "That's a great question! Keep exploring and you'll master this topic.",
  "Remember, practice makes perfect. Try solving a few more problems!",
  "AI tools like me can help, but your curiosity is your best asset!",
  "If you're stuck, try breaking the problem into smaller parts.",
  "Learning is a journey—don't hesitate to ask more questions!",
  "Here's a tip: review your notes and summarize what you've learned.",
  "Great effort! Keep going and you'll achieve your goals.",
  "Think about how this concept connects to real life.",
  // Science
  "In science, always observe carefully and ask why things happen the way they do.",
  "A scientific method starts with a question, then a hypothesis, experiment, and conclusion.",
  "Remember: Energy cannot be created or destroyed, only transformed (Law of Conservation of Energy).",
  "Photosynthesis is the process by which green plants make their own food using sunlight.",
  "Gravity is a force that attracts two bodies toward each other. That's why things fall to the ground!",
  // Maths
  "In maths, practice solving problems step by step for better understanding.",
  "Algebra helps you find unknown values using equations—think of it as solving a puzzle!",
  "Geometry is all about shapes, sizes, and the properties of space.",
  "Remember: The area of a rectangle is length × width.",
  "A fraction represents a part of a whole. For example, 1/2 is half.",
  // English
  "In English, reading stories and articles helps improve your vocabulary and comprehension.",
  "A noun is a person, place, or thing. A verb is an action word.",
  "Practice writing essays to organize your thoughts and express ideas clearly.",
  "Remember to check your grammar and punctuation for clear communication.",
  "Reading aloud can help you improve your pronunciation and confidence in English."
];

function getMockReply(question: string) {
  const q = question.toLowerCase();
  if (q.includes('what is')) {
    return `You asked: "${question}". This is an important concept! Try searching for a definition or example.`;
  }
  if (q.includes('science')) {
    return "Science is about curiosity and discovery. Always ask questions and seek evidence!";
  }
  if (q.includes('math') || q.includes('algebra') || q.includes('geometry') || q.includes('fraction')) {
    return "Maths is the language of logic and patterns. Practice regularly and you'll get better!";
  }
  if (q.includes('english') || q.includes('grammar') || q.includes('essay') || q.includes('vocabulary')) {
    return "English skills grow with reading, writing, and speaking. Try reading a new story or writing a short paragraph today!";
  }
  return mockReplies[Math.floor(Math.random() * mockReplies.length)];
}

const GeminiChat: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setAnswer('');
    setTimeout(() => {
      setAnswer(getMockReply(question));
      setLoading(false);
    }, 700);
  };

  return (
    <div className="mt-8 p-4 bg-white rounded shadow border max-w-xl mx-auto">
      <h2 className="text-lg font-bold mb-2 text-eduBlue">Ask AI (Doubt Clarification)</h2>
      <form onSubmit={handleAsk} className="flex flex-col gap-2">
        <input
          type="text"
          className="border rounded px-3 py-2"
          placeholder="Type your question..."
          value={question}
          onChange={e => setQuestion(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-eduBlue text-white px-4 py-2 rounded hover:bg-eduBlue/90"
          disabled={loading}
        >
          {loading ? 'Thinking...' : 'Ask AI'}
        </button>
      </form>
      {error && <div className="text-red-500 mt-2">{error}</div>}
      {answer && (
        <div className="mt-4 p-3 bg-gray-50 border rounded">
          <span className="font-semibold text-eduPurple">AI:</span> {answer}
        </div>
      )}
    </div>
  );
};

export default GeminiChat; 