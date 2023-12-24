import styles from '@/app/page.module.css';
import Image from 'next/image';



export default function RecipeComp({ item }: any) {
    const { recipe: { images, label, summary, calories } } = item;
    return (
        <div className={styles.recipeComp}>
            <Image loading='lazy' width={100} height={100} src={images?.REGULAR?.url} alt='' />
            <h2>{label}</h2>
            <p>{summary}</p>
            <span>{calories.toFixed(2)}</span>
        </div>
    )
}