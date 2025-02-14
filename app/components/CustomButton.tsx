import styles from "./CustomButton.module.css";

interface CustomButtonProps {
  customButtonName: string;
  onClick: () => void; // definiera som en void funktion
}

// className === class
// id === id (remains the same)
export function CustomButton({ customButtonName, onClick }: CustomButtonProps) {
  return (
    <div>
      {/* med .btn åkallar vi cssen */}
      {/* utan styles.btn i måsvinge --> inte ett scope, utan ett objekt */}
      <button className={styles.btn} onClick={onClick}>
        {customButtonName}
      </button>
    </div>
  );
}
