import Button from '@/components/Button';
import style from '@/styles/index.module.scss';

export default function Home() {
  return (
    <>
      <div className={style.header}>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
      </div>
      <div className={style['button-container']}>
        <Button onClick={() => console.log('button clicked')}>
          Hello world!
        </Button>
      </div>
    </>
  );
}
