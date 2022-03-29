import React, {useContext} from 'react'
import classes from './StartingPageContent.module.css';
import { authContext } from '../../store/authContext';

const StartingPageContent = () => {
  const authCtx = useContext(authContext)
  console.log(authCtx.name)
  return (
    <section className={classes.starting}>
      <h1>{`Welcome on Board ${authCtx.name}`}</h1>
    </section>
  );
};

export default StartingPageContent;
