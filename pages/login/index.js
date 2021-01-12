import { Facebook, GitHub, Twitter } from '@material-ui/icons';
import { useRouter } from 'next/router';
import { useState } from 'react';
import MyButton from '../../components/Button/MyButton.component';
import Card from '../../components/Card/Card.component';
import CardFooter from '../../components/Card/CardFooter.component';
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
                  <CardHeader color="brightYellow" className={style.cardHeader}>
                    <h4>Login</h4>
                    <div className={style.socialLine}>
                      <MyButton
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                        size="lg"
                      >
                        <Twitter />
                      </MyButton>
                      <MyButton
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                        size="lg"
                      >
                        <Facebook />
                      </MyButton>
                      <MyButton
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                        size="lg"
                      >
                        <GitHub />
                      </MyButton>
                    </div>
                  </CardHeader>
                  <CardFooter className={style.cardFooter}>
                    <div className={style.textRight}>
                      <a href="/forgot-password">Quên mật khẩu</a>
                    </div>
                    <MyButton
                      href="#pablo"
                      target="_blank"
                      color="brightYellow"
                      fullWidth
                      onClick={(e) => e.preventDefault()}
                    >
                      Đăng nhập
                    </MyButton>
                  </CardFooter>
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
