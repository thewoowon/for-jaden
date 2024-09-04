import { Plus, Minus } from "lucide-react";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

const NumberInput = ({
  value,
  onChange,
  min = 0,
  max = 100,
}: {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}) => {
  return (
    <div className="flex items-center">
      <Button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        className="px-3 py-1 bg-gray-200 text-gray-700 rounded-l"
      >
        <Minus className="h-4 w-4" />
      </Button>
      <Input
        type="number"
        value={value}
        onChange={(e) =>
          onChange(Math.min(max, Math.max(min, parseInt(e.target.value) || 0)))
        }
        className="w-16 text-center border-t border-b border-gray-300"
      />
      <Button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        className="px-3 py-1 bg-gray-200 text-gray-700 rounded-r"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default NumberInput;
