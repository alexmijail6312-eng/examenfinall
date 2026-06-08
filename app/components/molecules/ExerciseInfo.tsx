import ExerciseTitle from "@/app/components/atoms/ExerciseTitle";
import ExerciseDescription from "@/app/components/atoms/ExerciseDescription";

interface ExerciseInfoProps {
  name: string;
  sets: number;
  reps: number;
}

export default function ExerciseInfo({ name, sets, reps }: ExerciseInfoProps) {
  return (
    <div className="flex flex-col gap-1 flex-1 min-w-0">
      <ExerciseTitle name={name} />
      <ExerciseDescription sets={sets} reps={reps} />
    </div>
  );
}
