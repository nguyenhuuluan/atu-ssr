import { Card } from '@material-ui/core';
import { useRouter } from 'next/router';
import { useState } from 'react';
import CardHeader from '../../components/Card/CardHeader.component';
import GridContainer from '../../components/Grid/GridContainer.component';
import GridItem from '../../components/Grid/GridItem.component';

import style from './style.module.scss';

const LoginPage = (props) => {
  const router = useRouter();
  const { classes, ...rest } = props;
  const [cardAnimation, setCardAnimation] = useState(style.cardHidden);
  setTimeout(() => {
    setCardAnimation('');
  }, 700);

  const onLogin = (e) => {
    e.preventDefault();

    router.push('/dashboard');
  };
  return (
    <>
      <h1>Header will be here</h1>
      <div
        className={style.pageHeader}
        style={{
          backgroundImage: 'url(/img/background/login.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      >
        <div className={style.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={cardAnimation}>
                <form className={style.form}>
                  <CardHeader color="warning" className={style.CardHeader}>
                    <h4>Login</h4>
                  </CardHeader>
                  <input placeholder="User name" />
                  <input placeholder="Password" type="password" />
                  <button onClick={onLogin} type="button">
                    Login
                  </button>
                </form>
              </Card>
            </GridItem>
          </GridContainer>

          {/* <input placeholder="User name" />
            <input placeholder="Password" type="password" />
            <button onClick={onLogin} type="button">
              Login
          </button> */}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
