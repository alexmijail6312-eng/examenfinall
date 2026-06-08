import ExerciseThumbnail from "@/app/components/atoms/ExerciseThumbnail";
import ExerciseInfo from "@/app/components/molecules/ExerciseInfo";
import ChevronRightIcon from "@/app/components/atoms/ChevronRightIcon";

export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  imageUrl: string;
}

interface ExerciseItemProps {
  exercise: Exercise;
}

export default function ExerciseItem({ exercise }: ExerciseItemProps) {
  return (
    <li className="flex items-center gap-3 bg-[#1C1C1E] rounded-2xl px-4 py-3">
      <ExerciseThumbnail src={exercise.imageUrl} alt={exercise.name} />
      <ExerciseInfo name={exercise.name} sets={exercise.sets} reps={exercise.reps} />
      <ChevronRightIcon />
    </li>
  );
}
