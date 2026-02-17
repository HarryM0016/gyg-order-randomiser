interface BreakfastCheckboxProps {
  isChecked: boolean;
  onCheck: (isChecked: boolean) => void;
}

export default function BreakfastCheckbox({
  isChecked,
  onCheck,
}: BreakfastCheckboxProps) {
  return (
    <label className="big-label">
      <input
        type="checkbox"
        className="big-checkbox"
        checked={isChecked}
        onChange={(e) => onCheck(e.target.checked)}
      />
      Breakfast Menu
    </label>
  );
}
