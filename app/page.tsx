import ExerciseListTemplate from "@/app/components/templates/ExerciseListTemplate";
import { Exercise } from "@/app/components/organisms/ExerciseItem";
import puxadaFrontal from "@/app/data/puxadaFrontal";
import remadaCurvada from "@/app/data/remadaCurvada";
import remadaUnilateral from "@/app/data/remadaUnilateral";

const exercises: Exercise[] = [
  puxadaFrontal,
  remadaCurvada,
  remadaUnilateral,
  {
    id: "4",
    name: "Levantamento terra",
    sets: 3,
    reps: 12,
    imageUrl: "/d9e62f6cda00190bbe2430b25592dba9702b7bd1.png",
  },
];

export default function Home() {
  return <ExerciseListTemplate exercises={exercises} />;
}
