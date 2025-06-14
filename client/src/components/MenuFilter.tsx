import { Button } from "@/components/ui/button";

interface MenuFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = [
  { id: "all", label: "All" },
  { id: "coffee", label: "Coffee" },
  { id: "tea", label: "Tea" },
  { id: "pastries", label: "Pastries" },
  { id: "snacks", label: "Snacks" },
];

export default function MenuFilter({ activeFilter, onFilterChange }: MenuFilterProps) {
  return (
    <div className="flex flex-wrap justify-center mb-12 gap-4">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          variant={activeFilter === filter.id ? "default" : "outline"}
          className={`px-6 py-2 rounded-full font-semibold transition-colors ${
            activeFilter === filter.id
              ? "bg-coffee-brown text-white hover:bg-espresso"
              : "bg-gray-200 text-gray-700 hover:bg-coffee-brown hover:text-white"
          }`}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
}
