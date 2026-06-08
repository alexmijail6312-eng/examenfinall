interface ItemCountBadgeProps {
  count: number;
}

export default function ItemCountBadge({ count }: ItemCountBadgeProps) {
  return (
    <span className="text-[#8E8E93] text-base font-medium">
      {count}
    </span>
  );
}
