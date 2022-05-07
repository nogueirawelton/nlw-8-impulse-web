import { useState } from "react";

import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

import bugIconUrl from '../../assets/bug.svg';
import ideaIconUrl from '../../assets/idea.svg';
import thoughtIconUrl from '../../assets/thought.svg';
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugIconUrl,
      alt: 'Ícone de um inseto',
    },
  },
  IDEA: {
    title: 'Sugestão',
    image: {
      source: ideaIconUrl,
      alt: 'Ícone de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtIconUrl,
      alt: 'Ícone de um balão de pensamento',
    },
  }
}

export type FeedbackType = keyof typeof feedbackTypes;

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

return (
    <div className="bg-zinc-200 dark:bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep onFeedbackSent={() => {setFeedbackSent(true)}} feedbackType={feedbackType} onFeedbackStartRequested={handleRestartFeedback}/>
          )}
        </>
      )}
      <footer className="text-xs text-zinc-500">
        <span>
          <span>Feedback Widget - </span>
          <a className="underline underline-offset-1" href="https://github.com/NogueiraWelton" target="_blank">Welton Nogueira</a>
        </span>
      </footer>
    </div>
  )
}
