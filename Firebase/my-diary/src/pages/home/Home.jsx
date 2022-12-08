import DiaryForm from './DiaryForm'
import DiaryList from './DiaryList';
import styles from './Home.module.css'
import {useAuthContext} from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection';

export default function Home() {
    const {user} = useAuthContext();
    const { documents, error } = useCollection('나의 일기장', ["uid", "==", user.uid]); // 첫번째 인자는 document의 uid이며 세번째 인자는 context에 있는 현재 접속한 유저의 아이디를 의미합니다.

    return (
        <main className={styles.cont}>
            <aside className={styles.side_menu}>
                <DiaryForm uid={user.uid}/>
            </aside>
            <ul className={styles.content_list}>
                {error && <strong>{error}</strong>}
                {documents && <DiaryList diaries={documents} />}
            </ul>
        </main>
    )
}