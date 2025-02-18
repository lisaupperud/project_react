import styles from "./CustomButton.module.css";

// interface i extern fil 
interface CustomButtonProps {
  customButtonName: string;
  onClick: () => void; // definiera som en void funktion
}

// funktion med parametrar och argument + typat
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
