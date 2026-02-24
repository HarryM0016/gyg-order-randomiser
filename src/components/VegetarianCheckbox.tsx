interface VegetarianCheckboxProps {
  isChecked: boolean;
  onCheck: (isChecked: boolean) => void;
}

export default function VegetarianCheckbox({
  isChecked,
  onCheck,
}: VegetarianCheckboxProps) {
  return (
    <label className="big-label">
      <input
        type="checkbox"
        className="big-checkbox"
        checked={isChecked}
        onChange={(e) => onCheck(e.target.checked)}
      />
      VEGETARIAN
    </label>
  );
}
