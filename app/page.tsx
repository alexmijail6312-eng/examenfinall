import ExerciseListTemplate from "@/app/components/templates/ExerciseListTemplate";
import { Exercise } from "@/app/components/organisms/ExerciseItem";
import puxadaFrontal from "@/app/data/puxadaFrontal";

const exercises: Exercise[] = [
  puxadaFrontal,
  {
    id: "2",
    name: "Remada curvada",
    sets: 3,
    reps: 12,
    imageUrl: "/9af6513a3c39d123e3225f56f18849b34f0ab91d.png",
  },
  {
    id: "3",
    name: "Remada unilateral",
    sets: 3,
    reps: 12,
    imageUrl: "/d962a803d327514dacbe35cea3e74a3a3443b167.png",
  },
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
