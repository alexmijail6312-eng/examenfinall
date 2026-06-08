import SectionTitle from "@/app/components/atoms/SectionTitle";
import ItemCountBadge from "@/app/components/atoms/ItemCountBadge";

interface SectionHeaderProps {
  title: string;
  count: number;
}

export default function SectionHeader({ title, count }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <SectionTitle title={title} />
      <ItemCountBadge count={count} />
    </div>
  );
}
