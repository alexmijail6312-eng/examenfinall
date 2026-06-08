interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h2 className="text-white text-xl font-semibold">
      {title}
    </h2>
  );
}
