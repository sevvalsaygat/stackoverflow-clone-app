import { QuestionType } from '@types';
import Link from 'next/link';
import { useDeleteQuestionById } from '@hooks';
import { useRouter } from 'next/router';

type QuestionProps = {
  question: QuestionType;
};

export default function Question({ question }: QuestionProps) {
  const router = useRouter();

  const { mutate } = useDeleteQuestionById({
    onSuccess: () => {
      router.reload();
    },
  });

  return (
    <div>
      <div>{question.title}</div>
      <div>{question.details}</div>
      <div>{question.expect}</div>
      <div>{question.tag}</div>
      <div>
        <button
          onClick={() => {
            mutate(question.id);
          }}
        >
          Sil
        </button>
      </div>
    </div>
  );
}
