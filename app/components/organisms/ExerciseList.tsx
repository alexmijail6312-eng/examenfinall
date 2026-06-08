import SectionHeader from "@/app/components/molecules/SectionHeader";
import ExerciseItem, { Exercise } from "@/app/components/organisms/ExerciseItem";

interface ExerciseListProps {
  title: string;
  exercises: Exercise[];
}

export default function ExerciseList({ title, exercises }: ExerciseListProps) {
  return (
    <section>
      <SectionHeader title={title} count={exercises.length} />
      <ul className="flex flex-col gap-2">
        {exercises.map((exercise) => (
          <ExerciseItem key={exercise.id} exercise={exercise} />
        ))}
      </ul>
    </section>
  );
}
