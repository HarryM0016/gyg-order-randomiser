interface VegetarianCheckboxProps {
  isChecked: boolean;
  onCheck: (isChecked: boolean) => void;
}

export default function VegetarianCheckbox({
  isChecked,
  onCheck,
}: VegetarianCheckboxProps) {
  return (
    <>
      <label>
        <input type="checkbox" onClick={() => onCheck(!isChecked)} />
        Vegetarian?
      </label>
    </>
  );
}
