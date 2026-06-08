interface ExerciseDescriptionProps {
  sets: number;
  reps: number;
}

export default function ExerciseDescription({ sets, reps }: ExerciseDescriptionProps) {
  return (
    <span className="text-[#8E8E93] text-sm leading-snug">
      {sets} séries x {reps} repetições
    </span>
  );
}
