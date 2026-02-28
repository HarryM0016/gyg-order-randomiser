interface MealCheckboxProps {
  isChecked: boolean;
  onCheck: (isChecked: boolean) => void;
}

export default function MealCheckbox({
  isChecked,
  onCheck,
}: MealCheckboxProps) {
  return (
    <label className="big-label">
      <input
        type="checkbox"
        className="big-checkbox"
        checked={isChecked}
        onChange={(e) => onCheck(e.target.checked)}
      />
      MAKE IT A MEAL
    </label>
  );
}
