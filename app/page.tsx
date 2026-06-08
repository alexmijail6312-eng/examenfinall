import ExerciseListTemplate from "@/app/components/templates/ExerciseListTemplate";
import { Exercise } from "@/app/components/organisms/ExerciseItem";

const exercises: Exercise[] = [
  {
    id: "1",
    name: "Puxada frontal",
    sets: 3,
    reps: 12,
    imageUrl: "/6897dd537959d0801b173c66ceb0647dc37baea6.jpg",
  },
  {
    id: "2",
    name: "Remada curvada",
    sets: 3,
    reps: 12,
    imageUrl: "/9af6513a3c39d123e3225f56f18849b34f0ab91d.png",
  },
];

export default function Home() {
  return <ExerciseListTemplate exercises={exercises} />;
}
