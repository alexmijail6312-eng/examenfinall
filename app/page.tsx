import ExerciseListTemplate from "@/app/components/templates/ExerciseListTemplate";
import { Exercise } from "@/app/components/organisms/ExerciseItem";
import puxadaFrontal from "@/app/data/puxadaFrontal";
import remadaCurvada from "@/app/data/remadaCurvada";
import remadaUnilateral from "@/app/data/remadaUnilateral";
import levantamentoTerra from "@/app/data/levantamentoTerra";

const exercises: Exercise[] = [
  puxadaFrontal,
  remadaCurvada,
  remadaUnilateral,
  levantamentoTerra,
];

export default function Home() {
  return <ExerciseListTemplate exercises={exercises} />;
}
