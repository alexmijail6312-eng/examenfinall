import ExerciseList from "@/app/components/organisms/ExerciseList";
import { Exercise } from "@/app/components/organisms/ExerciseItem";

interface ExerciseListTemplateProps {
  exercises: Exercise[];
}

export default function ExerciseListTemplate({ exercises }: ExerciseListTemplateProps) {
  return (
    <div className="min-h-screen bg-[#000000] flex justify-center">
      <div className="w-full max-w-md px-4 py-8">
        <ExerciseList title="Exercícios" exercises={exercises} />
      </div>
    </div>
  );
}
