interface BreakfastCheckboxProps {
  isChecked: boolean;
  onCheck: (isChecked: boolean) => void;
}

export default function BreakfastCheckbox({
  isChecked,
  onCheck,
}: BreakfastCheckboxProps) {
  return (
    <>
      <label>
        <input type="checkbox" onClick={() => onCheck(!isChecked)} />
        Breakfast Menu
      </label>
    </>
  );
}
