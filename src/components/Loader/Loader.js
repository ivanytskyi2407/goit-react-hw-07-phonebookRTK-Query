import { Audio } from 'react-loader-spinner';
import s from './Loader.module.css';

export const Loader = () => (
  <div className={s.Loader}>
    <Audio id height="100" width="100" color="#7562d5" ariaLabel="loading" />
  </div>
);
