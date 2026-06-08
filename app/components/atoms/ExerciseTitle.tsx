interface ExerciseTitleProps {
  name: string;
}

export default function ExerciseTitle({ name }: ExerciseTitleProps) {
  return (
    <span className="text-white font-semibold text-[17px] leading-tight">
      {name}
    </span>
  );
}
