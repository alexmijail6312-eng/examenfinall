import Image from "next/image";

interface ExerciseThumbnailProps {
  src: string;
  alt: string;
}

export default function ExerciseThumbnail({ src, alt }: ExerciseThumbnailProps) {
  return (
    <div className="relative w-[68px] h-[68px] flex-shrink-0 rounded-lg overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="68px"
      />
    </div>
  );
}
