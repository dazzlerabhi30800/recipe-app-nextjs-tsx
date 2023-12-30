import styles2 from "@/app/recipe.module.css";

interface label {
  labels: Array<string>;
  title: string;
}
export default function Labels({ labels, title}: label) {
  return (
    <div className={styles2.labels}>
      <p>{title}:</p>
      {labels.map((label: string, index: number) => (
        <span className={styles2.label} key={index}>{label}</span>
      ))}
    </div>
  );
}

